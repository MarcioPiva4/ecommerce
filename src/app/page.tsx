import AdvantageRuler from "@/components/AdvantageRuler";
import Banner from "@/components/Banner";
import Header from "@/components/Header";
import Showcase from "@/components/Showcase";
import { products } from "@/types/products";
import { showcases } from "@/types/showcase";
import axios from "axios";

export default async function Home() {
  const dataCategory = await fetch('http://localhost:5000/category');
  const category = await dataCategory.json();

  const dataStore = await axios.get('http://localhost:5000/store');
  const store = await dataStore.data;

  const dataCartProducts = await axios.get('http://localhost:5000/products');
  const cartProducts = await dataCartProducts.data;

  const dataBanners = await axios.get('http://localhost:5000/banners');
  const banners = await dataBanners.data;

  const dataShowcases = await axios.get('http://localhost:5000/showcases');
  const showcases = await dataShowcases.data as showcases[];

  const dataProducts = await axios.get('http://localhost:5000/products');
  const products = await dataProducts.data as products[];

  const productsShowcase1 = products.filter((e, i) => (
    e.id == showcases[0].products[i]
  ));

  const productsShowcase2 = products.filter((e, i) => (
    e.id == showcases[1].products[i]
  ));
  return (
    <>
      <Header categorys={category} store={store} cartProducts={cartProducts}></Header>
      <main className="pt-[12vh]">
        <Banner banners={banners} type="carrossel"></Banner>
        <AdvantageRuler></AdvantageRuler>
        <Banner banners={banners} type="mosaic"></Banner>
        {showcases && showcases[0].id && <Showcase slider title={showcases[0].title} products={productsShowcase1}></Showcase>}
        {showcases && showcases[1].id && <Showcase slider title={showcases[1].title} products={productsShowcase2}></Showcase>}
      </main>
    </>
  );
}
