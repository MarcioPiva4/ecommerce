import AdvantageRuler from "@/components/AdvantageRuler";
import Banner from "@/components/Banner";
import Header from "@/components/Header";
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
  return (
    <>
      <Header categorys={category} store={store} cartProducts={cartProducts}></Header>
      <main className="pt-[12vh]">
        <Banner banners={banners}></Banner>
        <AdvantageRuler></AdvantageRuler>
      </main>
    </>
  );
}
