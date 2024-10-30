
import { CartItem as CartItemType } from '../types';
import { formatCurrency } from '../utils';

type CartItemProps = {
    item: CartItemType
}

export default function CartItem({item}: CartItemProps) {


    return (
        <div >
            <div className='flex items-center gap-2 md:gap-4'>
                <div className='w-20 '>
                    <img src={`.${item.img}`} alt={`${item.name} image`} className='rounded-lg'/>
                </div>
                <div className='max-w-min md:max-w-full xl:max-w-min'>
                    <h4 className='text-sm uppercase font-bold'>{item.name}</h4>
                    <p className='opacity-50 font-bold'>{ formatCurrency(item.price) }</p>
                </div>
            </div>

        </div>
    )
}
