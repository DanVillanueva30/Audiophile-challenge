import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { fetchProductsByCategory } from "../service";
import {  ProductPreview } from "../types";
import ProductCard from "../components/ProductCard";
import CategoriesNav from "../components/CategoriesNav";
import AboutUsSection from "../components/AboutUsSection";


export default function CategoryView() {
    const location = useLocation();
    const pathName = location.pathname.replace('/', '');
    const [products, setProducts] = useState<ProductPreview[]>([]);
    useEffect(() => {
        const getProductsByCategory = async() => {
            const products = await fetchProductsByCategory(pathName);
            if(products) setProducts(products);

        }
        getProductsByCategory();
    }, [pathName]);

    return (
        <>
            <section className=" pt-20 flex flex-col-reverse gap-20">
                {products.map((product, index) => (
                    <ProductCard key={product.id} product={product} index={index}/>
                ))}
            </section>

            <CategoriesNav />

            <AboutUsSection />
        </>

    )
}
