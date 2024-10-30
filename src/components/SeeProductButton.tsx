import { Link } from "react-router-dom";

type SeeProductButtonProps = {
    bgColor: string;
    textColor: string;
    hoverBgColor?: string;
    hoverTextColor?: string;
    border?: string;
    borderColor?: string;
    href: string;
}

export default function SeeProductButton({bgColor, textColor, hoverBgColor, hoverTextColor, border, borderColor, href}: SeeProductButtonProps) {

    return (
        <Link 
            to={href}
            type="button" 
            className={`${bgColor} ${textColor} ${hoverBgColor ? hoverBgColor : ''} ${hoverTextColor ? hoverTextColor : ''} ${border ? border : ''} ${borderColor ? borderColor : ''} py-5 px-8 uppercase  font-bold tracking-widest transition-colors `}
        >See product</Link>
    )
}
