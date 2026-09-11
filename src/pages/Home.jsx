import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";

function Home({ search }) {
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

  const filteredProducts = products.filter((p) => {
    return p.title.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <section className="flex flex-col gap-10">
      <div className="flex justify-center">
        <h1 className="font-bold text-3xl">Product List</h1>
      </div>

      <div className="grid grid-cols-4 gap-4 md:grid-cols-3 xl:grid-cols-8">
        {filteredProducts.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  );
}

export default Home;
