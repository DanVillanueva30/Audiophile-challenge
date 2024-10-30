import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom";
import { GalleryItem, Product } from "../types";
import { fetchProductById } from "../service";
import CategoriesNav from "./CategoriesNav";
import AboutUsSection from "./AboutUsSection";
import GalleryImages from "./GalleryImages";
import RecomendedProducts from "./RecomendedProducts";
import { formatCurrency } from "../utils";
import { useCartStore } from "../store";
import ItemQuantityButton from "./ItemQuantityButton";


export default function ProductDetails() {
    const params = useParams();
    const productId = params.productId!;
    const productCategory = params.category!;
    const [product, setProduct] = useState<Product>({} as Product);
    const [isLoading, setIsLoading] = useState(true)
    const addToCart = useCartStore(state => state.addToCart); //    ###########    Zustand Store
    const MIN_ITEMS = 1;
    const MAX_ITEMS = 5;
    const [itemQuantity, setItemQuantity] = useState(MIN_ITEMS);
    useEffect(() => {
        const getProductById = async() => {
            try {
                const product = await fetchProductById(+productId);
                setProduct(product);
            } catch (error) {
                console.log(error);
            } finally {
                setIsLoading(false)
            }
        }
        getProductById();
    }, [productId]);
    if(isLoading) return <p>Loading....</p>


    const galleryArray : GalleryItem[] = product ? [product.gallery.first, product.gallery.second, product.gallery.third] : []
    const paragraphs = product.features.split('\n\n');
    //handlers
    const handleDecreaseQuantity = () => setItemQuantity(prevQuantity => Math.max(prevQuantity - 1, MIN_ITEMS));
    const handleIncreaseQuantity = () => setItemQuantity(prevQuantity => Math.min(prevQuantity + 1, MAX_ITEMS));
    const resetData = {
        id: 0,
        img: '',
        name: '',
        price: 0,
        quantity: 0
    }
    const handleAddToCart = () => {
        let data = {
            id: product.id,
            img: product.image.mobile,
            name: product.name,
            price: product.price,
            quantity: itemQuantity
        }
        addToCart(data);
        setItemQuantity(MIN_ITEMS);
        data = resetData; //Reset
    }
    return (    
        <div className="pt-8 space-y-20">
            <div className="flex flex-col gap-8">
                <Link to={`/${productCategory}`} className="opacity-50 text-sm md:text-base"> Go Back </Link>
                <div className="md:grid md:grid-cols-2 md:gap-12 md:items-center">
                    <div className="mb-6 md:mb-0">
                        <picture>
                            <source media="(min-width: 1280px)" srcSet={`.${product.image.desktop}`} />
                            <source media="(min-width: 768px)" srcSet={`.${product.image.tablet}`} />
                            <img src={`.${product.image.mobile}`} loading="lazy" decoding="async" alt={`${product.name} Image`} className="w-full rounded-lg"/>
                        </picture>
                    </div>{/**Product Image */}
                    <div>
                        <div className="space-y-6">
                            <p className={`${product.new ? `text-primary uppercase tracking-[5px] font-light` : 'hidden'}`}>New product</p>
                            <h2 className="font-bold text-3xl w-2/4">{product.name}</h2>
                            <p className="opacity-50">{product.description}</p>
                            <p className="font-extrabold text-lg">{formatCurrency(product.price)}</p>
                        </div> {/**Product description */}

                        <div className="flex items-center gap-4 mt-6">
                            <div className="flex items-center xl:items-stretch">
                                <ItemQuantityButton sum={false} paddingY="py-5" paddingLeft="pl-6" handler={handleDecreaseQuantity}/>
                                <p className="bg-light-gray py-5 px-6 font-bold">{itemQuantity}</p>
                                <ItemQuantityButton sum={true} paddingY="py-5" paddingRight="pr-6" handler={handleIncreaseQuantity}/>
                            </div>
                            <button 
                                type="button" 
                                className="py-5 px-6 uppercase font-bold tracking-widest transition-colors text-white bg-primary 
                                hover:bg-[#FBAF85]"
                                onClick={handleAddToCart}
                            >Add to cart</button>
                        </div> {/**Add to cart section */}
                    </div> {/**Product description & quantity buttons container */}
                </div>
            </div>
            <div className="space-y-20 xl:space-y-0 xl:grid xl:grid-cols-3 xl:gap-20">
                <div className="space-y-6 xl:col-start-1 xl:col-end-3">
                    <h3 className="text-2xl uppercase font-bold">Features</h3>
                    {paragraphs.map((paragraph, index) => ( <p key={index} className="opacity-50">{paragraph}</p> ))}
                </div> {/**Product features */}
                <div className="md:flex md:gap-52 xl:flex-col xl:gap-0 xl:col-start-3 xl:col-end-4">   
                    <h2 className="uppercase font-bold text-2xl md:text-3xl mb-6">In the box</h2>
                    <div className="space-y-2">
                        {product.includes.map((item, index) => (
                            <div key={index} className="flex gap-6 items-center md:gap-6">
                                <p className="text-primary font-bold">{item.quantity}x</p>
                                <p className="opacity-50">{item.item}</p>
                            </div>
                        ))}
                    </div>
                </div> {/**Items included in the box */}
            </div>
            <div> <GalleryImages gallery={galleryArray}/> </div> {/**Gallery images */}
            <RecomendedProducts others={product.others}/>
            <CategoriesNav />
            <AboutUsSection />
        </div>
    )
}
