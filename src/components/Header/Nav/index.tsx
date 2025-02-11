import { category } from "@/types/category";
import Link from "next/link";

export default function Nav({ categorys, position }: { categorys: category[]; position: 'row'|'column' }){
    return(
        <nav>
            <ul className={"flex gap-10 items-center " + (position === 'row' ? 'flex-row' : 'flex-col')}>
                {categorys.map((e) => (
                    <li key={e.id}><Link href={e.href}>{e.title}</Link></li>
                ))}
            </ul>
        </nav>
    )
}