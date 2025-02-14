import banner from "@/types/banner";
import Image from "next/image";
import Link from "next/link";

export default function Mosaic({banners}: {banners: banner}){
    return(
        <div className="grid grid-cols-2 grid-rows-2 max-w-[80%] m-auto p-5 mt-5 gap-5 md:max-w-[90%] sm:max-w-[100%]">
            {
                banners.mosaic.map((e, i) => (
                    e.link.length > 1 ? (
                        <Link 
                        key={e.id}
                        href={e.link} 
                        className={
                        i === 0
                            ? 'col-start-1 col-end-2 sm:col-end-3 row-start-1 row-end-3 w-[100%] h-[100%] flex items-center justify-center overflow-hidden'
                            : 'w-[100%] h-[220px] self-end overflow-hidden'
                        }>
                            <Image
                            loading="eager"
                            src={e.src}
                            alt={e.title}
                            title={e.title}
                            width={500}
                            height={500}
                            className={i === 0 ? 'h-[100%] w-[300px] object-cover transition-all hover:scale-[1.2]' : 'w-full h-full object-cover transition-all hover:scale-[1.2]'}
                            />
                        </Link>
                    ) : (
                        <div
                        key={e.id}
                        className={
                            i === 0
                            ? 'col-start-1 col-end-2 sm:col-end-3 row-start-1 row-end-3 w-[100%] h-[100%] flex items-center justify-center'
                            : 'w-[100%] h-[220px] self-end'
                        }
                        >
                            <Image
                                loading="eager"
                                src={e.src}
                                alt={e.title}
                                title={e.title}
                                width={500}
                                height={500}
                                className={i === 0 ? 'h-[100%] w-[300px] object-cover' : 'w-full h-full object-cover'}
                            />
                        </div>
                    )
                ))
            }
      </div>
    )
}