import SearchBar from "./SearchBar";
import FilterBar from "./FilterBar";

function Navbar({
  products,
  setProducts,
  setSearch,
  category,
  setCategory,
  setSortPrice,
}) {
  return (
    <div className="flex flex-col gap-2">
      <nav className="w-full bg-bg/60 rounded-lg px-8 py-3 flex justify-between items-center">
        <h1 className="text-xl font-black cursor-pointer">MiniBuy</h1>

        <div className="flex items-center gap-2 text-lg">
          <SearchBar setSearch={setSearch} />

          <button className="mso icon-btn">favorite</button>
          <button className="mso icon-btn">shopping_cart</button>
        </div>
      </nav>

      <FilterBar
        products={products}
        setProducts={setProducts}
        category={category}
        setCategory={setCategory}
        setSortPrice={setSortPrice}
      />
    </div>
  );
}

export default Navbar;
