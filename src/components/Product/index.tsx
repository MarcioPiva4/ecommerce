'use client'
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Product( { title, src, alt, description, price, priceDiscount, linkProduct }: { title: string; src: Array<string>; alt: string; description: string; price: string; priceDiscount: string; linkProduct: string; } ){
    const [hoverImage, setHoverImage] = useState<boolean>(false);
    return(
        <div className="flex flex-col max-w-[350px] gap-5 p-3 border border-gray_light rounded-lg justify-between" onMouseEnter={() => src[1] && setHoverImage(true)} onMouseLeave={() => src[1] && setHoverImage(false)}>
            <div>
                <figure className="max-w-[350px] max-h-[350px] overflow-hidden">
                    {!hoverImage && src[0] && <Image src={src[0]} alt={alt} width={200} height={200} className="w-[350px] h-[350px] object-cover rounded-lg"></Image>}
                    {src[1] && hoverImage && <Image src={src[1]} alt={alt} width={200} height={200} className="w-[350px] h-[350px] object-cover rounded-lg"></Image>}
                </figure>
            </div>
            <div>
                <h1 className="text-xl font-semibold">{title}</h1>
                {priceDiscount ? <p className="py-2"><span className="block text-base line-through font-medium">De: R${price}</span>  <span className="text-lg">Por: R${priceDiscount}</span></p> : <p className="text-lg py-2">R${price}</p>}
                <p className="py-2 mb-2">{description}</p>
                <Link className="w-full py-3 border border-bg_button_buy tracking-wide rounded-lg block text-center uppercase bg-bg_button_buy text-secondary transition-all hover:bg-transparent hover:text-bg_button_buy" href={linkProduct}>Comprar</Link>
            </div>
        </div>
    )
}