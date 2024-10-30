import { Description, Dialog, DialogPanel, DialogTitle, Transition, TransitionChild } from '@headlessui/react';
import { Fragment } from 'react';
import { useCartStore } from '../../store';
import { formatCurrency } from '../../utils';
import { useNavigate } from 'react-router-dom';

type CheckOutModalProps = {
    total: number;
    showModal: boolean;
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>
}

export default function CheckOutModal({total, showModal, setShowModal}: CheckOutModalProps) {
    const navigate = useNavigate();
    const cart = useCartStore((state) => state.cart);
    const resetCartState = useCartStore((state) => state.resetCartState);
    const firstItem = cart[0];
    const handleCloseCheckoutModal = () => {
        setShowModal(false);
        navigate('/');
        resetCartState();
    }
    return (
        <>
            <Transition appear show={showModal} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={handleCloseCheckoutModal}>
                    <TransitionChild
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-50" />
                    </TransitionChild>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center xl:p-0">
                            <TransitionChild
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <DialogPanel className="relative transform overflow-hidden rounded-lg bg-white p-8 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-2xl md:max-w-xl sm:p-6 xl:mt-8 xl:mb-0 ">
                                    <div>
                                        <img src="/checkout/icon-order-confirmation.svg" alt="Order confirmation icon" />
                                    </div>
                                    <DialogTitle as="h1" className="text-black text-2xl font-extrabold my-6 uppercase md:text-3xl md:w-7/12 md:tracking-wide">
                                        Thank you for your order
                                    </DialogTitle>
                                    <Description className={'opacity-50'}>You will receive an email confirmation shortly</Description>

                                    <div className='mt-6 md:flex'>
                                        <div className='bg-[#F1F1F1] py-4 px-6 rounded-t-lg md:w-[120%] md:py-8 md:rounded-t-none md:rounded-tl-lg md:rounded-bl-lg'>
                                            <div className='flex justify-between mb-2 md:mb-3'>
                                                <div>
                                                    <img src={firstItem.img} alt={`${firstItem.name} image`} className='w-16'/>
                                                </div>
                                                <div className='flex flex-col justify-center'>
                                                    <p className='font-bold md:mb-2'>{firstItem.name}</p>
                                                    <p className='text-sm font-bold opacity-50 md:text-base'>{formatCurrency(firstItem.price)}</p>
                                                </div>
                                                <p className='font-bold opacity-50 h-min mt-3 ml-5' >x{firstItem.quantity}</p>
                                            </div> 
                                            {cart.length > 1 && (
                                                <p className='border-t border-gray-400 opacity-50 text-center pt-2 font-bold md:pt-3'>
                                                    {cart.length - 1 > 0 ? `and ${cart.length - 1} other item(s)` : ''}
                                                </p>
                                            )}
                                        </div> {/**cart items details */}

                                        <div className='bg-black py-4 px-6 rounded-b-lg md:flex md:flex-col md:justify-center md:w-full md:py-8 md:rounded-b-none md:rounded-tr-lg md:rounded-br-lg'>
                                            <p className='uppercase text-white opacity-60'>Grand total</p>
                                            <p className='font-extrabold text-white mt-2'>{formatCurrency(total)}</p>
                                        </div>
                                    </div> {/**summary container */}

                                    <button 
                                        type="button"
                                        onClick={handleCloseCheckoutModal}
                                        className='w-full bg-primary text-white uppercase mt-6 font-bold p-4 tracking-widest text-sm'
                                    >Back to home</button>
                                </DialogPanel>
                            </TransitionChild>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}