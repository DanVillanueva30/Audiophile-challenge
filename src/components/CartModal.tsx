import { Dialog, DialogPanel, DialogTitle, Transition, TransitionChild } from '@headlessui/react';
import { Fragment, useMemo } from 'react';
import { useCartStore } from '../store';
import CartItem from './CartItem';
import { Link, useLocation } from 'react-router-dom';
import { formatCurrency } from '../utils';
import ItemQuantityButton from './ItemQuantityButton';

export default function CartModal() {
    const cart = useCartStore((state) => state.cart);
    const modal = useCartStore((state) => state.modal);
    const closeModal = useCartStore((state) => state.closeModal);
    const cartItems = useCartStore((state) => state.cart);
    const removeAll = useCartStore((state) => state.removeAll);
    const increaseQuantity = useCartStore((state) => state.increaseQuantity);
    const decreaseQuantity = useCartStore((state) => state.decreaseQuantity);
    const isEmpty = useMemo(() => cart.length === 0, [cart]);
    const cartTotal = useMemo(() => cart.reduce((total, item) => total + (item.quantity * item.price), 0), [cart]);
    const location = useLocation();
    return (
        <>
            <Transition appear show={modal} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
                    <TransitionChild
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed top-[70px] md:top-16 right-0 left-0 bottom-0 bg-black bg-opacity-50" />
                    </TransitionChild>

                    <div className="fixed  top-28 md:top-24 right-0 left-0 overflow-y-auto ">
                        <div className="flex items-center justify-center w-11/12 mx-auto text-center  xl:w-10/12">
                            <TransitionChild
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <DialogPanel className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-2xl sm:p-6 w-full md:w-auto md:my-0 ml-auto">
                                    {isEmpty ? (
                                        <>
                                            <p className='py-20 text-center uppercase font-bold tracking-widest md:p-20'>Your cart is empty </p>
                                            <button onClick={closeModal} type="button" className='bg-black text-white py-4 uppercase block text-center tracking-widest w-full cursor-pointer'>Continue shopping</button>
                                        </>
                                    ) : (
                                        <>
                                            <div className='flex items-center justify-between'>
                                                <DialogTitle as="h4" className="text-black uppercase text-xl font-extrabold my-5">
                                                    Cart
                                                </DialogTitle>
                                                <button type="button" onClick={removeAll} className='text-sm opacity-50 underline underline-offset-1 hover:text-primary hover:opacity-100'>Remove all</button>
                                            </div>
                                            <div>
                                                <ul className='space-y-6'>
                                                    {cartItems.map(item => (
                                                        <li className='flex items-center justify-between md:gap-12' key={item.id}>
                                                            <CartItem item={item} />
                                                            <div className="flex items-center xl:items-stretch">
                                                                <ItemQuantityButton sum={false} paddingY="py-2" paddingLeft="pl-4" handler={() => decreaseQuantity(item.id)} />
                                                                <p className="bg-light-gray py-2 px-6 font-bold"> {item.quantity} </p>
                                                                <ItemQuantityButton sum={true} paddingY="py-2" paddingRight="pr-4" handler={() => increaseQuantity(item.id)} />
                                                            </div>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                            <div className='flex items-center justify-between my-6'>
                                                <p className='uppercase opacity-50 font-medium '>Total</p>
                                                <p className='text-lg uppercase font-extrabold'>{formatCurrency(cartTotal)}</p>
                                            </div>
                                            <div className='space-y-6 xl:space-y-2'>
                                                <Link
                                                    to={'/checkout'}
                                                    state={{ from: location.pathname }} //Send the current url to the checkout view.
                                                    onClick={closeModal}
                                                    className='text-white bg-primary py-4 uppercase block text-center tracking-widest *:hover:bg-[#FBAF85]'
                                                >Checkout</Link>
                                                <button onClick={closeModal} type="button" className='bg-black text-white py-4 uppercase 
                                                block text-center tracking-widest w-full cursor-pointer'>Continue shopping</button>
                                            </div>
                                        </>
                                    )}
                                </DialogPanel>
                            </TransitionChild>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}