// import ProductCard from "../components/ProductCard";
import BannerCarousel from "../components/BannerCarousel";
import CategoriesSection from "../components/CategoriesSection";
import ProductsSection from "../components/ProductsSection";

// import { getDiscount } from "../utils/helper";
import { heroBanners } from "../datas/heroBanners";

function Home({ products }) {
  //

  // const filteredCategory =
  //   category === "all"
  //     ? products
  //     : products.filter((p) => {
  //         return p.category === category;
  //       });

  // const seacrhedProducts = filteredCategory.filter((p) => {
  //   return p.title.toLowerCase().includes(search.toLowerCase());
  // });

  // function getSortedPrice(sort) {
  //   switch (sort) {
  //     case null:
  //       return seacrhedProducts;

  //     case "expensive":
  //       return [...seacrhedProducts].sort(
  //         (a, b) =>
  //           getDiscount(b.price, b.discountPercentage) -
  //           getDiscount(a.price, a.discountPercentage),
  //       );

  //     case "cheap":
  //       return [...seacrhedProducts].sort(
  //         (a, b) =>
  //           getDiscount(a.price, a.discountPercentage) -
  //           getDiscount(b.price, b.discountPercentage),
  //       );

  //     default:
  //       break;
  //   }
  // }

  // const sortedPriceProducts = getSortedPrice(sortPrice);

  return (
    <section className="flex flex-col gap-5">
      <BannerCarousel banners={heroBanners} />

      <div className="px-15 flex flex-col gap-5">
        <CategoriesSection products={products} />

        <ProductsSection products={products} />

        {/* <div className="flex justify-center">
          <h1 className="font-bold text-3xl">Product List</h1>
        </div>

        <div className="grid grid-cols-4 gap-4 md:grid-cols-3 xl:grid-cols-8">
          {sortedPriceProducts.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div> */}
      </div>
    </section>
  );
}

export default Home;
