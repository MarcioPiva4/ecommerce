'use client'
import { category } from "@/types/category";
import { AnimatePresence, motion } from 'framer-motion';
import Search from "./Search";
import Mobile from "./Mobile";
import Nav from "./Nav";
import { store } from "@/types/store";
import Box from "./Box";
import { useState } from "react";
import CartSide from "./Cart";
import Link from "next/link";
import { products } from "@/types/products";

export default function Header({ categorys, store, cartProducts }: {categorys: category[]; store: store; cartProducts: products[] }){

    const [favoriteHover, setFavoriteHover] = useState<boolean>(false);
    const [userHover, setUserHover] = useState<boolean>(false);
    const [cartClick, setCartClick] = useState<boolean>(false);

    const isLoggin = false;

    return(
        <header className="flex justify-between pr-10 pl-10 items-center h-[12vh] w-screen fixed border-b-2 z-10 bg-secondary">
            <Link href={'#'}>
                <h1 className="text-2xl tracking-[1.5px] font-semibold">{store.name}</h1>
            </Link>
            <div className="md:hidden">
                <Nav categorys={categorys} position="row"></Nav>
            </div>
            <Search></Search>
            <div className="flex gap-5 sm:hidden">
                <div className="relative" onMouseEnter={() => setFavoriteHover(true)} onMouseLeave={() => setFavoriteHover(false)}>
                    <motion.svg       
                    initial={{ scale: 1, rotate: 0 }}
                    whileHover={{ scale: 1.3, fill: 'red', transition: { ease: 'easeInOut'} }}
                    transition={{ type: 'spring', stiffness: 300  }} 
                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                    </motion.svg>
                    {
                        favoriteHover &&
                        <Box title="favoritos" items={ ['teste', 'teste2', 'teste3'] } position={56} isLoggin={isLoggin}></Box>
                    }
                </div>

                <div className="relative" onMouseEnter={() => setUserHover(true)} onMouseLeave={() => setUserHover(false)}>
                    <motion.svg                 
                        initial={{ scale: 1, rotate: 0 }}
                        whileHover={{ scale: 1.3, transition: { ease: 'easeInOut'} }}
                        transition={{ type: 'spring', stiffness: 300  }}  
                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    </motion.svg>
                    {
                        userHover &&
                        <Box title="Olá, Usuario!" position={100} account isLoggin={isLoggin}></Box>
                    }
                </div>


                <div className="relative">
                    <button onClick={() => setCartClick(!cartClick)} className="relative">
                        <motion.svg                 
                            initial={{ scale: 1, rotate: 0 }}
                            whileHover={{ scale: 1.3, transition: { ease: 'easeInOut'} }}
                            transition={{ type: 'spring', stiffness: 300  }}   xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                        </motion.svg>

                        <div className="absolute bg-black rounded-3xl text-white text-xs h-[18px] w-[18px] flex items-center justify-center top-[14px] left-[10px]">1</div>
                    </button>
                    {
                        <AnimatePresence>
                            {
                                cartClick &&
                                <CartSide cartClick={cartClick} setCartClick={setCartClick} products={cartProducts}></CartSide>
                            }
                        </AnimatePresence>
                    }
                </div>

            </div>

            <Mobile categorys={categorys} cartClick={cartClick} setCartClick={setCartClick} cartProducts={cartProducts}></Mobile>
        </header>
    )
}