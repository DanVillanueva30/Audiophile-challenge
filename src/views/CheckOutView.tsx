import { useForm, FormProvider } from "react-hook-form";
import BillingDetails from "../components/checkout/BillingDetails";
import PaymentDetails from "../components/checkout/PaymentDetails";
import ShippingInfo from "../components/checkout/ShippingInfo";
import { useCartStore } from "../store";
import CartItem from "../components/CartItem";
import { useMemo, useState } from "react";
import { formatCurrency } from "../utils";
import { Link, useLocation } from "react-router-dom";
import CheckOutModal from "../components/checkout/CheckOutModal";



export default function CheckOutView() {
    const location = useLocation();
    const previousPath : string = location.state?.from || '/';
    const cart = useCartStore((state) => state.cart);
    const [showModal, setShowModal] = useState(false);
    const methods = useForm({
        defaultValues: {
            name: '',
            email: '',
            phone: '',
            address: '',
            zipCode: '',
            city: '',
            country: '',
            paymentMethod: 'eMoney',
            eMoneyNum: '',
            eMoneyPin: ''
        }
    });
    const subTotal = useMemo(() => cart.reduce((total, item) => total + (item.quantity * item.price), 0), [cart]);
    const vatFee = useMemo(() => (subTotal / 100 )* 20 , [subTotal]);
    const shippingFee = 50;
    const grandTotal = subTotal + shippingFee;

    const onSubmit = () => {
        setShowModal(true);
        methods.reset();
    }
    return (
        <div className="w-11/12 mx-auto space-y-6 pt-6 xl:w-10/12">
            <Link to={previousPath} className="opacity-50 text-sm hover:text-primary hover:opacity-100 transition-colors">Go Back</Link>
            <FormProvider {...methods}>
                <form 
                    className="grid gap-6 xl:grid-cols-3" 
                    onSubmit={methods.handleSubmit(onSubmit)}
                    noValidate
                >
                    <div className="rounded-lg bg-white px-6 space-y-6 pb-6 xl:col-start-1 xl:col-end-3 xl:px-8 xl:pb-8">
                        <h1 className="text-3xl uppercase font-bold pt-6">Checkout</h1>
                        <BillingDetails />
                        <ShippingInfo />
                        <PaymentDetails />
                    </div>
                    <section className="rounded-lg bg-white px-6 pb-6 space-y-8 xl:col-start-3 xl:col-end-4 xl:h-fit xl:px-8 xl:pb-8">
                        <h2 className="uppercase text-lg pt-6 font-bold tracking-widest">Summary</h2>
                        <div className="space-y-6">
                            {cart.map((item) => (
                                <div key={item.id} className="flex items-center justify-between">
                                    <CartItem key={item.id} item={item} />
                                    <p className="font-bold opacity-50">x{item.quantity}</p>
                                </div>
                            ))}
                        </div> {/**cart items container */}

                        <div className="space-y-3">
                            <p className="uppercase flex justify-between items-center">
                                <span className="opacity-50">Total</span>
                                <span className="font-extrabold opacity-100">{formatCurrency(subTotal)}</span>
                            </p>
                            <p className="uppercase flex justify-between items-center">
                                <span className="opacity-50">Shipping</span>
                                <span className="font-extrabold opacity-100">${shippingFee}</span>
                            </p>
                            <p className="uppercase flex justify-between items-center">
                                <span className="opacity-50">Vat (Included)</span>
                                <span className="font-extrabold opacity-100">{formatCurrency(vatFee)}</span>
                            </p>
                        </div> {/**Total && shipping info */}
                        <p className="uppercase flex justify-between items-center">
                                <span className="opacity-50">Grand total</span>
                                <span className="font-extrabold text-primary opacity-100">{formatCurrency(grandTotal)}</span>
                        </p>
                        <button type="submit" className="bg-primary text-white uppercase font-bold text-sm py-4 w-full tracking-widest hover:bg-[#FBAF85] transition-colors">Continue & pay</button>
                    </section>
                </form>
            </FormProvider>
            <CheckOutModal showModal={showModal} setShowModal={setShowModal} total={grandTotal}/>
        </div>
    )
}
