import { useState, useEffect } from "react";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";

function App() {
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

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [sortPrice, setSortPrice] = useState(null);

  return (
    <main className="py-5 px-35 flex flex-col gap-10">
      <Navbar
        search={search}
        setSearch={setSearch}
        //
        category={category}
        setCategory={setCategory}
        //
        sortPrice={sortPrice}
        setSortPrice={setSortPrice}
        //
        products={products}
        setProducts={setProducts}
      />
      <Home
        products={products}
        search={search}
        category={category}
        sortPrice={sortPrice}
      />
    </main>
  );
}

export default App;
