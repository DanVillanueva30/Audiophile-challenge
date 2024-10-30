import { useFormContext } from "react-hook-form";
import FieldsetContainer from "./FieldsetContainer";
import ErrorMessage from "./ErrorMessage";

export default function PaymentDetails() {

    const { register, watch, formState: { errors } } = useFormContext();
    const paymentMethod = watch('paymentMethod');
    return (
        <FieldsetContainer legendText="Payment details">
            <div className="md:grid md:grid-cols-2">
                <label>Payment Method</label>
                <div className="space-y-6">
                    <div className={`flex items-center gap-4 rounded-lg border cursor-pointer hover:border-primary py-3 px-5 ${paymentMethod === 'eMoney' ? 'border-primary' : 'border-[#cfcfcf]'}`}>
                        <input
                            type="radio"
                            id="eMoney"
                            value="eMoney"
                            className="accent-primary cursor-pointer"
                            {...register('paymentMethod', { required: 'Payment method is required' })}
                        />
                        <label htmlFor="eMoney" className="m-0 w-full cursor-pointer">e-Money</label>
                    </div>
                    <div className={`flex items-center gap-4 rounded-lg border cursor-pointer hover:border-primary border-[#cfcfcf] py-3 px-5 ${paymentMethod === 'cash' ? 'border-primary' : 'border-[#cfcfcf]'}`}>
                        <input
                            type="radio"
                            id="cash"
                            value="cash"
                            className="accent-primary cursor-pointer"
                            {...register('paymentMethod', { required: 'Payment method is required' })}
                        />
                        <label htmlFor="cash" className="m-0 w-full cursor-pointer">Cash on Delivery</label>
                    </div>
                </div>
            </div>

            {paymentMethod === 'cash' ? (
                <div className="space-y-4 md:space-y-0 md:flex items-center md:gap-6">
                    <div>
                        <img src="/checkout/icon-cash-on-delivery.svg" alt="Cash on delivery Icon" className="mx-auto md:w-32" />
                    </div>
                    <p className="opacity-50">The ‘Cash on Delivery’ option enables you to pay in cash when our delivery courier arrives
                        at your residence. Just make sure your address is correct so that your order will not be cancelled.</p>
                </div>
            ) : (
                <div className="space-y-6 md:space-y-0 md:grid md:grid-cols-2 md:gap-4">
                    <div className="relative">
                        <label htmlFor="eMoneyNum" className={`${errors.eMoneyNum ? 'text-red-500' : ''}`}>e-Money Number</label>
                        <ErrorMessage error={errors.eMoneyNum} />
                        <input
                            type="text"
                            id="eMoneyNum"
                            placeholder="238521993"
                            className={`${errors.eMoneyNum ? `border-red-500 outline-red-500` : `border-[#cfcfcf] outline-primary`}`}
                            {...register('eMoneyNum', { required: 'e-Money Number is required' })}
                        />
                    </div>
                    <div className="relative">
                        <label htmlFor="eMoneyPin" className={`${errors.eMoneyPin ? 'text-red-500' : ''}`}>e-Money PIN</label>
                        <ErrorMessage error={errors.eMoneyPin} />
                        <input
                            type="text"
                            id="eMoneyPin"
                            placeholder="6891"
                            className={`${errors.eMoneyPin ? `border-red-500 outline-red-500` : `border-[#cfcfcf] outline-primary`}`}
                            {...register('eMoneyPin', { required: 'e-Money PIN is required' })}
                        />
                    </div>
                </div>
            )}


        </FieldsetContainer>
    )
}
