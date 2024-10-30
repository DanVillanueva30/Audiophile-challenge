import { useLocation } from "react-router-dom";
import SeeProductButton from "../components/SeeProductButton";
import { ProductPreview } from "../types";

type ProductCardProps = {
    product: ProductPreview;
    index: number;
}
export default function ProductCard({product, index}: ProductCardProps) {
    const location = useLocation();

    const isEven = index % 2 === 0;
    return (
        <div 
            className={`flex flex-col justify-center items-center space-y-6 xl:flex-row xl:gap-20 ${isEven ? 'xl:flex-row' : 'xl:flex-row-reverse'}`}
        >
            <div className="w-full">
                <picture>
                    <source
                        media="(min-width: 1280px)"
                        srcSet={`.${product.categoryImage.desktop}`}
                    />
                    <source
                        media="(min-width: 768px)"
                        srcSet={`.${product.categoryImage.tablet}`}
                    />
                    <img src={product.categoryImage.mobile} loading="lazy" decoding="async" alt={`${product.name} Image`} className="w-full" />
                </picture>
            </div>
            <div className="flex flex-col items-center space-y-6 md:w-4/5 xl:w-full xl:space-y-8 xl:items-start">
                <p className={`${product.new ? `text-primary uppercase tracking-[5px] font-light` : 'hidden'}`}>New product</p>
                <h2 className="text-center font-bold uppercase text-3xl md:text-4xl xl:mt-0">{product.name}</h2>
                <p className="text-center opacity-50 xl:text-start">{product.description}</p>
                <SeeProductButton href={`${location.pathname}/${product.id}`} textColor="text-white" bgColor="bg-primary" hoverBgColor='hover:bg-[#FBAF85]' />
            </div>
        </div>
    )
}
