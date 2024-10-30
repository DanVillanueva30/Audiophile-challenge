

export default function AboutUsSection() {
    return (
        <section className="grid grid-rows-2  xl:grid-rows-1 xl:grid-cols-2">
            <div className="rounded-lg bg-cover bg-no-repeat bg-center bg-[url('/shared/mobile/image-best-gear.jpg')] md:bg-[url('/shared/tablet/image-best-gear.jpg')] xl:bg-[url('/shared/desktop/image-best-gear.jpg')] xl:col-start-2 xl:col-end-3"></div>{/**about us image */}
            <div className="md:pt-16 md:px-8 xl:row-start-1 xl:row-end-2 xl:py-24 xl:pl-0 xl:pr-20">
                <h2 className="text-4xl uppercase font-bold text-center my-6 md:text-5xl md:mt-0 md:mb-8 xl:text-start">Bringing you the {' '} 
                    <span className="text-primary">best {' '}</span>
                    audio gear
                </h2>
                <p className="font-light text-center xl:text-start">
                    Located at the heart of New York City, Audiophile is the premier store for high end headphones, 
                    earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration 
                    rooms available for you to browse and experience a wide range of our products. Stop by our store 
                    to meet some of the fantastic people who make Audiophile the best place to buy your portable 
                    audio equipment.
                </p>
            </div>
        </section>
    )
}
