
export type Product = {
    id: number;
    slug: string;
    name: string;
    image: {
        mobile: string;
        tablet: string;
        desktop: string;
    }
    category:string;
    categoryImage: {
        mobile: string;
        tablet: string;
        desktop: string;
    }
    new: boolean;
    price: number;
    description: string;
    features: string;
    includes: [
        {
            quantity: number;
            item: string;
        }
    ]
    gallery: {
        first: {
            mobile: string;
            tablet: string;
            desktop: string;
        },
        second: {
            mobile: string;
            tablet: string;
            desktop: string;
        },
        third: {
            mobile: string;
            tablet: string;
            desktop: string;
        }
    }
    others: [
        {
            slug: string;
            name: string;
            image: {
                mobile: string;
                tablet: string;
                desktop: string;
            }
        }
    ]
}

export type ProductPreview = Pick<Product, 'id' | 'slug' | 'name' | 'category' | 'categoryImage' | 'new' | 'description'>
export type Products = Product[];
export type GalleryItem = {
    mobile: string;
    tablet: string;
    desktop: string;
}

export type CartItem = {
    id: number;
    img: string,
    name: string;
    price: number;
    quantity: number
}