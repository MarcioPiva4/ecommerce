import { products } from "@/types/products";
import Product from "../Product";

export default function Showcase({ slider, title, products }: {slider: boolean; title: string; products: products[]}){
    return(
        <div className="my-5 p-3">
            <h2 className="text-3xl p-5 px-10 text-terciary font-bold decoration-solid mb-5">{title}</h2>
            <div className="px-10 flex flex-wrap gap-10">
                {products.map((e) => (
                    <Product title={e.title} linkProduct={e.link} src={e.images} alt={e.title} description={e.description.length >= 200 ? e.description.slice(0, 100)+"..." : e.description} price={e.price} priceDiscount={e.priceDiscount} key={e.id}></Product>
                )) }
            </div>
        </div>
    )
}