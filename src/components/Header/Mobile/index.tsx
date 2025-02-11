import { category } from "@/types/category";
import Nav from "../Nav";
import { useState } from "react";
import { AnimatePresence, motion } from 'framer-motion';

export default function Mobile({ categorys }: {categorys: category[]}){
    const [open, setOpen] = useState<boolean>(false);
    return(
        <>
            <div className="md:block hidden">
                <button onClick={() => setOpen(!open)}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </button>
            </div>
            <AnimatePresence>
                {
                    open &&
                    <motion.aside
                    className="absolute w-[50vw] h-screen left-0 top-[12vh] bg-background shadow-xl py-5"
                    initial={{ x: '-100%' }}  
                    animate={{ x: 0 }}         
                    exit={{ x: '-100%' }}    
                    transition={{ duration: 0.5 }}
                >
                    <Nav categorys={categorys} position="column" />
                </motion.aside>
                }
            </AnimatePresence>
        </>
    )
}