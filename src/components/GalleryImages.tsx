import { GalleryItem } from "../types"

type ProductGalleryProps = {
    gallery: GalleryItem[];
}
type ImgStyles = {
    [key: number]: string;
}

export default function GalleryImages({gallery}: ProductGalleryProps) {
    const imgStyles : ImgStyles = {
        0: 'col-start-1 col-end-2 row-start-1 row-end-2',
        1: 'col-start-1 col-end-2 row-start-2 row-end-3',
        2: 'col-start-2 col-end-3 row-start-1 row-end-3'
    }

    return (
        <div className="flex flex-col gap-6 md:grid md:grid-cols-2 md:grid-rows-2">
            {gallery.map((item, index) => (
                <div key={index} className={`${imgStyles[index]}`}>
                    <picture>
                        <source media="(min-width: 1280px)" srcSet={`.${item.desktop}`}/>
                        <source media="(min-width: 768px)" srcSet={`.${item.tablet}`}/>
                        <img src={`.${item.mobile}`} loading="lazy" decoding="async" alt={`Gallery Image ${index + 1}`} className="w-full rounded-lg h-full object-cover"/>
                    </picture>
                </div>
            ))}
        </div>
    )
}
