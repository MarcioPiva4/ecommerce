import { Dispatch, SetStateAction } from "react";

export default function Overlay({ children, setClick, click }: { children: React.ReactNode; setClick?: Dispatch<SetStateAction<boolean>>, click?:boolean; }){
    return(
        <div className="w-screen h-screen fixed left-0 top-0 bg-black bg-opacity-50 flex items-center justify-center z-100" onClick={() => setClick ? setClick(!click) : null}>
            {children}
        </div>
    )
}