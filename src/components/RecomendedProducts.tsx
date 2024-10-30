import SeeProductButton from "./SeeProductButton"
import { slugDictionary } from "../lib";

type RecomendedProductsProps = {
    others: [{
        slug: string;
        name: string;
        image: {
            mobile: string;
            tablet: string;
            desktop: string;
        };
    }]
}
export default function RecomendedProducts({others}: RecomendedProductsProps) {
    return (
        <section className="space-y-10">
            <h2 className="uppercase font-bold text-2xl text-center md:text-3xl">You may also like</h2>
            <div className="space-y-10 md:flex items-center md:space-y-0 md:gap-4 xl:gap-6">
                {others.map((other, index) => (
                    <div key={index} className="space-y-6 flex flex-col items-center">
                        <div>
                            <picture>
                                <source media="(min-width: 1280px)" srcSet={`.${other.image.desktop}`}/>
                                <source media="(min-width: 768px)" srcSet={`.${other.image.tablet}`}/>
                                <img src={`.${other.image.mobile}`} loading="lazy" decoding="async" alt={`${other.name} Image`} className="w-full rounded-lg"/>
                            </picture>
                        </div>
                        <h3 className="uppercase text-2xl font-bold">{other.name}</h3>
                        <SeeProductButton 
                            href={`/${slugDictionary[other.slug].category}/${slugDictionary[other.slug].id}`}
                            textColor="text-white" 
                            bgColor="bg-primary" 
                            hoverBgColor='hover:bg-[#FBAF85]'
                        />
                    </div>
                ))}
            </div>
        </section>
    )
}
