import { category } from "@/types/category";
import Nav from "../Nav";
import { Dispatch, SetStateAction, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import CartSide from "../Cart";
import { products } from "@/types/products";

export default function Mobile({
  categorys,
  cartClick,
  setCartClick,
  cartProducts,
}: {
  categorys: category[];
  cartClick: boolean;
  setCartClick: Dispatch<SetStateAction<boolean>>;
  cartProducts: products[];
}) {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <>
      <div className="relative sm:block hidden">
        <button onClick={() => setCartClick(!cartClick)} className="relative">
          <motion.svg
            initial={{ scale: 1, rotate: 0 }}
            whileHover={{ scale: 1.3, transition: { ease: "easeInOut" } }}
            transition={{ type: "spring", stiffness: 300 }}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
            />
          </motion.svg>

          <div className="absolute bg-black rounded-3xl text-white text-xs h-[18px] w-[18px] flex items-center justify-center top-[14px] left-[10px]">
            1
          </div>
        </button>
        {
          <AnimatePresence>
            {cartClick && (
              <CartSide
                cartClick={cartClick}
                setCartClick={setCartClick}
                products={cartProducts}></CartSide>
            )}
          </AnimatePresence>
        }
      </div>
      <div className="md:block hidden">
        <button onClick={() => setOpen(!open)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.aside
            className="absolute w-[50vw] h-screen left-0 top-[12vh] bg-background shadow-xl py-5"
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.5 }}>
            <Nav categorys={categorys} position="column" />
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
}
