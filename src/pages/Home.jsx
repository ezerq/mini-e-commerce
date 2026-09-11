import ProductCard from "../components/ProductCard";

function Home({ products, search, category, sortPrice }) {
  //

  const filteredCategory =
    category === "all"
      ? products
      : products.filter((p) => {
          return p.category === category;
        });

  const seacrhedProducts = filteredCategory.filter((p) => {
    return p.title.toLowerCase().includes(search.toLowerCase());
  });

  function getSortedPrice(sort) {
    switch (sort) {
      case "":
        return seacrhedProducts;

      case "expensive":
        return [...seacrhedProducts].sort((a, b) => b.price - a.price);

      case "cheap":
        return [...seacrhedProducts].sort((a, b) => a.price - b.price);

      default:
        break;
    }
  }

  const sortedPriceProducts = getSortedPrice(sortPrice);

  return (
    <section className="flex flex-col gap-10">
      <div className="flex justify-center">
        <h1 className="font-bold text-3xl">Product List</h1>
      </div>

      <div className="grid grid-cols-4 gap-4 md:grid-cols-3 xl:grid-cols-8">
        {sortedPriceProducts.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  );
}

export default Home;
