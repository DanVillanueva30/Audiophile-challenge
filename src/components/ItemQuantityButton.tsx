type ItemQuantityButtonProps = {
    paddingLeft?: string;
    paddingRight?: string;
    paddingY: string;
    sum: boolean;
    handler: () => void;
}

export default function ItemQuantityButton({ paddingLeft, paddingRight, paddingY, sum, handler }: ItemQuantityButtonProps) {
    return (
        <button 
            type="button" 
            onClick={handler}
            className={`bg-light-gray ${paddingY} ${paddingLeft ? paddingLeft : ''} ${paddingRight ? paddingRight : ''}`}
        ><span className="opacity-50 hover:text-primary hover:opacity-100 xl:text-xl">{sum ? '+' : '-'}</span></button>
    )
}
