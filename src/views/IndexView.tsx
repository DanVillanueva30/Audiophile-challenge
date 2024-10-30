import AboutUsSection from "../components/AboutUsSection"
import CategoriesNav from "../components/CategoriesNav"
import SeeProductButton from "../components/SeeProductButton"

const productsHref = {
    zx9: '/speakers/6',
    zx7: 'speakers/5',
    yx1: '/earphones/1'
}
export default function IndexView() {
    return (
        <>
            <CategoriesNav />

            <section className="space-y-6 md:grid md:grid-cols-2 xl:space-y-8">   

                <div 
                    className="bg-primary px-6 pt-14 pb-10 rounded-lg bg-[url('/home/desktop/pattern-circles.svg')] bg-cover bg-[top_-8rem_center] bg-no-repeat grid grid-rows-2 md:gap-16 md:py-16 md:px-10 md:bg-auto md:bg-[top_-20rem_center] xl:grid-rows-1 xl:grid-cols-2 xl:pt-32 xl:pb-0 xl:px-20 xl:bg-[-10rem_-1rem] md:row-start-1 md:row-end-2 md:col-start-1 md:col-end-3"
                    >
                    <div className="flex mx-auto">
                        <picture>
                            <source media="(min-width: 1280px)" srcSet="/home/desktop/image-speaker-zx9.png" />
                            <source media="(min-width: 768px)" srcSet="/home/tablet/image-speaker-zx9.png"/>
                            <img src="/home/mobile/image-speaker-zx9.png" loading="lazy" decoding="async" alt="Speaker-zx9 image" className="w-40 md:w-48 xl:w-[410px]"/>
                        </picture>
                    </div>
                    <div 
                        className="flex flex-col items-center justify-center space-y-5 row-start-2 row-end-3 md:w-3/5 md:mx-auto xl:w-3/4 xl:row-start-1 xl:row-end-2 xl:col-start-2 xl:col-end-3 xl:items-start xl:justify-start xl:pt-5"
                    >
                        <h2 className="text-white text-4xl uppercase font-bold tracking-wide md:text-6xl">
                            <span className="block text-center xl:text-start">ZX9</span>
                            speaker
                        </h2>
                        <p className="text-white text-center font-extralight xl:text-start">Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
                        <SeeProductButton href={productsHref.zx9} textColor="text-white" bgColor="bg-black" hoverBgColor="hover:bg-[#4C4C4C]"/> 
                    </div>
                </div> {/**speaker-zx9 container */}

                <div className="relative md:row-start-2 md:row-end-3 md:col-start-1 md:col-end-3">
                    <div className="relative ">
                        <picture>
                            <source media="(min-width: 1280px)" srcSet="/home/desktop/image-speaker-zx7.jpg" />
                            <source media="(min-width: 768px)" srcSet="/home/tablet/image-speaker-zx7.jpg"/>
                            <img loading="lazy" decoding="async"  src="/home/mobile/image-speaker-zx7.jpg" alt="Speaker model-zx7 image" className="w-full rounded-lg"/>
                        </picture>
                    </div>
                    <div className="space-y-6 absolute top-1/2 transform -translate-y-1/2 left-8">
                        <h3 className="uppercase text-3xl font-bold tracking-widest mb-12 ">Zx7 Speaker</h3>
                        <SeeProductButton href={productsHref.zx7} textColor="text-black" hoverTextColor="hover:text-white" bgColor="transparent" hoverBgColor="hover:bg-black" border="border-2" borderColor="border-black"/>
                    </div>
                </div> {/**Speaker model-zx7 */}

                <div className="md:mr-4 xl:mr-8">
                    <picture>
                        <source media="(min-width: 1280px)" srcSet="/home/desktop/image-earphones-yx1.jpg" />
                        <source media="(min-width: 768px)" srcSet="/home/tablet/image-earphones-yx1.jpg"/>
                        <img loading="lazy" decoding="async"  src="/home/mobile/image-earphones-yx1.jpg" alt="Earphones yx1 image" className="w-full rounded-lg h-full"/>
                    </picture>
                </div> {/**Earphones yx1 container */}

                <div className="bg-light-gray flex flex-col items-start pt-16 pb-12 rounded-lg px-8 space-y-8 md:justify-center xl:px-14">
                    <h2 className="uppercase text-4xl font-bold md:text-3xl">Yx1 earphones</h2>
                    <SeeProductButton href={productsHref.yx1} textColor="text-black" hoverTextColor="hover:text-white" bgColor="transparent" hoverBgColor="hover:bg-black" border="border-2" borderColor="border-black"/>
                </div>

            </section>

            <AboutUsSection />
        </>
    )
}
