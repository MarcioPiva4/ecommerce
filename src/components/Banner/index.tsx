'use client'
import banner from "@/types/banner";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from "swiper/react";

export default function Banner({ banners }: {banners: banner[] }){
    return(
        <Swiper
        slidesPerView={1}
        pagination={{ clickable: true }}
        loop
        navigation={{
            prevEl: '.swiper-button-prev',
            nextEl: '.swiper-button-next',
          }}
          modules={[Navigation, Pagination, Autoplay]}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
        className="relative"
      >
        <button className="swiper-button-prev absolute z-[2] top-[43%] left-[60px] bg-white p-2 rounded-full cursor-pointer outline-none transition-all hover:scale-[1.1]">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
            </svg>
        </button>
        <button className="swiper-button-next absolute z-[2] top-[43%] right-[60px] bg-white p-2 rounded-full cursor-pointer outline-none transition-all hover:scale-[1.1]">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
            </svg>
        </button>
        {banners.map((e) => (
          <SwiperSlide key={e.id}>
            <img src={e.src} alt={e.title} style={{ width: '100%', height: '300px' }} />
          </SwiperSlide>
        ))}
      </Swiper>
    )
}