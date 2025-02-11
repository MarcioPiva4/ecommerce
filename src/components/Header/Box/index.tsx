import Link from "next/link";

export default function Box({title, items, position, account, isLoggin}: {title: string; items?: Array<any>; position?: number; account?: boolean; isLoggin: boolean;}){
    return(
        <div className={`absolute p-4 bg-background top-[30px] shadow-lg ${account ? 'w-48' :'w-36'}`} style={{ left: '-'+position+'px' }}>
            { title && <h2 className="text-center text-lg capitalize pb-3">{title}</h2> }
            {
                account 
                ? 
                    <div className="flex flex-col text-center gap-2 justify-center items-center">
                        <Link href={'#'} className="text-base border border-terciary py-2 rounded-lg w-[100px]">Entrar</Link>
                        <span className="text-sm relative after:absolute after:w-16 after:bg-black after:h-px after:bottom-3 after:left-6 before:absolute before:w-16 before:bg-black before:h-px before:bottom-3 before:right-6">Ou</span>
                        <Link href={'#'} className="text-base border border-terciary bg-black text-white py-2 rounded-lg w-[120px]">Criar conta</Link>
                    </div>
                :
                    <ul>
                        {
                            isLoggin 
                            ? 
                            items?.map((e, i) => (
                                <li key={i}>{e}</li>
                            ))
                            :
                            <p className="text-sm text-center">Você precisa estar logado.</p>
                        }
                    </ul>
            }
        </div>
    )
}