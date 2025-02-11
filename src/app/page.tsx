import Header from "@/components/Header";

export default async function Home() {
  const dataCategory = await fetch('http://localhost:5000/category');
  const category = await dataCategory.json();

  const dataStore = await fetch('http://localhost:5000/store');
  const store = await dataStore.json();
  return (
    <>
      <Header categorys={category} store={store}></Header>
    </>
  );
}
