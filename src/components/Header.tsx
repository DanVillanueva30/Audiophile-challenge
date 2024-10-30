
import { Link, useLocation, useParams } from 'react-router-dom';
import SeeProductButton from './SeeProductButton'
import CartModal from './CartModal';
import { useCartStore } from '../store';
import CategoriesNav from './CategoriesNav';
import { useEffect, useMemo, useState } from 'react';

const headerBackgroundImageHref = '/headphones/4';

export default function Header() {
    const [showMobileMenu, setShowMobileMenu] = useState(false);
    const location = useLocation();
    const homePage = location.pathname === '/';
    const params = useParams();
    const category = params.category!;
    const productId = params.productId!;
    const showModal = useCartStore((state) => state.showModal);
    const cart = useCartStore((state) => state.cart);
    const checkout = location.pathname === '/checkout';
    const cartCounter = useMemo(() => cart.reduce((total, item) => total + item.quantity, 0), [cart]);
    useEffect(() => {
        if(showMobileMenu) {
            document.querySelector('body')?.classList.add('relative');
            document.querySelector('#mobileMenu')?.classList.remove('hidden');
        } else {
            document.querySelector('body')?.classList.remove('relative');
            document.querySelector('#mobileMenu')?.classList.add('hidden');
        }
    }, [showMobileMenu]);
    return (
        <header
            className={`flex flex-col py-6 ${homePage ? `bg-[url('/home/mobile/image-header.jpg')] gap-28  bg-cover bg-center md:bg-[url('/home/tablet/image-header.jpg')] xl:bg-[url('/home/desktop/image-hero.jpg')] md:gap-40` : 'bg-black'}  `}
        >
            <div className="flex items-center justify-between md:justify-start md:gap-10 xl:gap-0 xl:justify-between w-11/12 xl:w-10/12 mx-auto xl:grid xl:grid-cols-3">
                <div className="xl:col-start-2 xl:col-end-3">
                    <div className="xl:hidden">
                        <img
                            src="/shared/tablet/icon-hamburger.svg"
                            alt="Mobile menu icon"
                            className="cursor-pointer"
                            onClick={() => setShowMobileMenu(!showMobileMenu)}
                        />
                        <div className={`${showMobileMenu ? `absolute top-20 right-0 left-0 w-full z-10 h-full max-h-full bg-black bg-opacity-50` : ''}`}></div>
                        <div id='mobileMenu' className='hidden'>
                            <CategoriesNav  mobileMenu={true} showMobileMenu={showMobileMenu} setShowMobileMenu={setShowMobileMenu}/>
                        </div>
                    </div>{/**mobile menu */}

                    <nav className="hidden xl:flex xl:gap-8">
                        <Link to={'/'} className="text-white uppercase font-bold text-sm hover:text-primary">Home</Link>
                        <Link to={'/headphones'} className="text-white uppercase font-bold text-sm hover:text-primary">Headphones</Link>
                        <Link to={'/speakers'} className="text-white uppercase font-bold text-sm hover:text-primary">Speakers</Link>
                        <Link to={'/earphones'} className="text-white uppercase font-bold text-sm hover:text-primary">Earphones</Link>
                    </nav>
                </div>{/**navigation & mobile menu container */}

                <Link to={'/'} className="xl:col-start-1 xl:col-end-2 xl:row-start-1 xl: xl:row-end-2">
                    <img src="/shared/desktop/logo.svg" alt="Audiophile Logo" />
                </Link> {/**logo */}


                <div  className="md:w-full md:flex md:justify-end xl:w-auto xl:col-start-3 xl:col-end-4 relative">
                    <p 
                        className='absolute -top-5 right-0 text-white w-5 h-5 text-sm text-center font-bold md:-right-2 md:-top-4 xl:-top-5 xl:-right-3'
                    > {cartCounter} </p>
                    <img src="/shared/desktop/icon-cart.svg" alt="Cart icon" className="cursor-pointer" onClick={showModal}/>
                    <CartModal />
                </div> {/**cart */}
            </div>

            {homePage ? (
                <section className="xl:xl:w-10/12 xl:mx-auto">
                    <div
                        className="flex flex-col items-center px-8 pb-20 space-y-6 md:w-4/6 md:mx-auto xl:w-1/2 xl:mx-0 xl:px-0 xl:items-start"
                    >
                        <p className="text-white opacity-50 uppercase tracking-[10px]">New product</p>
                        <h1 className="text-white uppercase text-4xl text-center font-bold md:text-6xl xl:text-start">XX99 Mark II Headphones</h1>
                        <p className="text-light-gray opa text-center xl:text-start xl:w-4/6">Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
                        <SeeProductButton href={headerBackgroundImageHref} textColor="text-white" bgColor="bg-primary" hoverBgColor='hover:bg-[#FBAF85]' />
                    </div>
               </section>
            ) : productId || checkout ? ( <></> ) : ( <h1 className='text-3xl text-center uppercase font-bold tracking-widest text-white pt-12 pb-4 md:pb-8 xl:pt-16'>{category}</h1> )}

        </header>
    )
}
