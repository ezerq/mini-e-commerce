import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import Navbar from "../components/Navbar";

function Home() {
  //
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getProducts() {
      //
      const response = await fetch("https://dummyjson.com/products");

      const data = await response.json();

      setProducts(data.products);
    }

    getProducts();
  }, []);

  return (
    <section className="py-5 px-35 flex flex-col gap-10">
      <Navbar />

      <div className="flex justify-center">
        <h1 className="font-bold text-3xl">Product List</h1>
      </div>

      <div className="grid grid-cols-4 gap-4 xl:grid-cols-8">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  );
}

export default Home;
