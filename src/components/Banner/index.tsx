'use client'
import banner from "@/types/banner";
import Mosaic from "./Mosaic";
import Slider from "./Slider";

export default function Banner({ banners, type }: { banners: banner; type: 'carrossel' | 'mosaic' | 'solo' }) {
  if (type === 'carrossel') {
    return <Slider banners={banners}></Slider>;

  }

  if (type === 'mosaic') {
    return <Mosaic banners={banners}></Mosaic>;
  }

  return null;
}
