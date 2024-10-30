import { Link } from "react-router-dom";

const productCategory = [
    {
        src: '/shared/desktop/image-category-thumbnail-headphones.png',
        category: 'headphones',
        href: '/headphones'
    },
    {
        src: '/shared/desktop/image-category-thumbnail-speakers.png',
        category: 'speakers',
        href: '/speakers'
    },
    {
        src: '/shared/desktop/image-category-thumbnail-earphones.png',
        category: 'earphones',
        href: '/earphones'
    }
]
type CategoriesNavProps = {
    mobileMenu?: boolean
    showMobileMenu?: boolean;
    setShowMobileMenu?: (value: React.SetStateAction<boolean>) => void;
}
export default function CategoriesNav({mobileMenu, showMobileMenu, setShowMobileMenu}: CategoriesNavProps) {
    
    const close = () => {
        if (showMobileMenu && setShowMobileMenu) {
            setShowMobileMenu(false);
        }
    }
    return (
        <nav 
            className={` ${mobileMenu && showMobileMenu ? ` absolute bg-white w-full mx-auto left-0 right-0 top-20 z-10 px-8 pb-8 overflow-y-hidden rounded-b-lg xl:hidden` : ''} pt-24 flex flex-col space-y-20 md:flex-row md:space-y-0 md:gap-4 xl:gap-6 `}
        >
            {productCategory.map(category => (
                <Link 
                    to={category.href}
                    key={category.category}
                    onClick={close}
                    className="bg-light-gray flex flex-col items-center relative pt-16 pb-6 space-y-4 rounded-md w-full"
                >
                    <img 
                        src={category.src} 
                        alt={`${category.category} Image`} 
                        className="w-40 -top-14 absolute"
                    />

                    <h3 className="uppercase font-bold tracking-widest">{category.category}</h3>
                    <div className="flex gap-4 items-center">
                        <p className="uppercase text-sm tracking-widest font-medium opacity-75 xl:hover:text-primary xl:hover:opacity-100">Shop</p>
                        <img src="/shared/desktop/icon-arrow-right.svg" alt="Arrow icon" />
                    </div>
                </Link>
            ))}
        </nav>
        

    )
}
