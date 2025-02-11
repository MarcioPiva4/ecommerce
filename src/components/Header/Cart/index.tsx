import Overlay from "@/components/Overlay";
import Link from "next/link";
import { Dispatch, SetStateAction } from "react";
import {motion} from 'framer-motion';

export default function CartSide({ setCartClick, cartClick }: { setCartClick: Dispatch<SetStateAction<boolean>>; cartClick: boolean }){
    return(
        <Overlay>
                <motion.aside 
                    initial={{ x: '100%' }}  
                    animate={{ x: 0 }}         
                    exit={{ x: '100%' }}    
                    transition={{ duration: 0.5 }} 
                    className="w-7xl h-screen absolute right-0 bg-background w-[500px] p-5 flex items-center justify-between flex-col pb-10"
                >
                    <div className="flex items-center justify-between px-4 border-b pb-2 border-gray_light w-full">
                        <h1 className="text-terciary text-xl">CART</h1>
                        <button onClick={() => setCartClick(!cartClick)} className="hover:rotate-[360deg] transition-transform duration-500">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path stroke="#333" strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>
                        </button>
                    </div>

                    <div className="w-full h-full py-5">
                        <ul>
                            {
                                Array.from(['produto1', 'produto2', 'produto3', 'produto4']).map((e, i) => <div key={i}>{e}</div>)
                            }
                        </ul>
                    </div>

                    <div className="flex flex-col w-full border-t border-gray_light pt-3">
                        <ul className="flex flex-col text-sm text-gray_light">
                            <li>Estoques limitados! Garanta o seu antes que acabe.</li>
                            <li>Nós cuidamos do seu pedido do início ao fim. Fique tranquilo!</li>
                            <li>Super descontos o aguarda.</li>
                        </ul>
                        <div className="flex items-center justify-between pt-5">
                            <Link href={'#'} onClick={() => setCartClick(!cartClick)} className="flex items-center p-3 px-6 border border-bg_button_back text-bg_button_back rounded-lg">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                                </svg>
                                Voltar as compras
                            </Link>
                            <Link href={'/checkout'} className="flex items-center p-3 px-6 border border-bg_button_buy rounded-lg bg-bg_button_buy text-white hover:bg-transparent hover:text-bg_button_buy transition-all">
                                Continuar
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </motion.aside>
        </Overlay>
    )
}