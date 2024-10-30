import { Link, Outlet, useLocation } from "react-router-dom";
import Header from "../components/Header";

export default function AppLayout() {
    const location = useLocation();
    const isCheckoutView = location.pathname === '/checkout';
    return (
        <>
            <Header />
            <main className={`space-y-20 pb-20 ${isCheckoutView ? `bg-very-light-gray w-full` : 'w-11/12 xl:w-10/12 mx-auto'}`}>
                <Outlet/>
            </main>
            <footer 
                className="flex flex-col justify-center items-center pb-10 bg-black md:items-start xl:block"
            >
                <div className="w-11/12 xl:w-10/12 mx-auto">
                    <div>
                        <div>
                            <span className="w-24 h-1 bg-primary block mx-auto md:m-0"></span>
                        </div>

                        <div className="flex items-center flex-col md:block xl:flex xl:flex-row xl:justify-between xl:pt-14 xl:pb-9">
                            <div className="py-10 md:pt-14 md:pb-9 xl:p-0">
                                <img 
                                    src="/shared/desktop/logo.svg"
                                    alt="Audiophile Logo"
                                />
                            </div>
                            <nav className="flex flex-col items-center gap-4 pb-10 md:flex-row md:gap-10 xl:pb-0">
                                <Link to={'/'} className="text-white uppercase font-bold text-sm hover:text-primary">Home</Link>
                                <Link to={'/headphones'} className="text-white uppercase font-bold text-sm hover:text-primary">Headphones</Link>
                                <Link to={'/speakers'} className="text-white uppercase font-bold text-sm hover:text-primary">Speakers</Link>
                                <Link to={'/earphones'} className="text-white uppercase font-bold text-sm hover:text-primary">Earphones</Link>
                            </nav>
                        </div>
                    </div>{/**Logo & footer nav container */}

                    <div 
                        className="space-y-10 flex flex-col items-center md:items-start md:space-y-16 md:grid md:grid-cols-2"
                    >
                        <p className="text-white opacity-50 text-center md:text-start md:col-start-1 md:col-end-3 xl:col-start-1 xl:col-end-2">
                            Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers 
                            and sound specialists who are devoted to helping you get the most out of personal audio. Come and 
                            visit our demo facility - we’re open 7 days a week.
                        </p>

                        <p 
                            className="text-white opacity-50 text-center font-bold  md:text-start md:col-start-1 md:col-end-2"
                        >Copyright 2021. All Rights Reserved</p>

                        <nav className="flex gap-4 md:justify-end md:col-start-2 md:col-end-3 md:row-start-2 md:row-end-3 xl:col-start-2 xl:col-end-3 xl:row-start-1 xl:row-end-3 ">
                            <div className="icon-container">
                                <img src="/shared/desktop/icon-facebook.svg" alt="Facebook Icon" className="cursor-pointer" />
                            </div>
                            <div className="icon-container">
                                <img src="/shared/desktop/icon-twitter.svg" alt="Twitter Icon" className="cursor-pointer" />
                            </div>
                            <div className="icon-container">
                                <img src="/shared/desktop/icon-instagram.svg" alt="Instagram Icon" className="cursor-pointer" />
                            </div>
                        </nav>
                    </div>{/**about us container */}
                </div>
            </footer>
        </>
    )
}
