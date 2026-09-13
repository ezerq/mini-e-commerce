import SectionHome from "./SectionHome";
import ProductCard from "./ProductCard";

function ProductsSection({ products }) {
  //

  const toDisplay = products.slice(0, 8);

  return (
    <SectionHome title={"Popular Products"} btnText={"Products"}>
      {toDisplay.map((product) => (
        <ProductCard key={product.title} product={product} />
      ))}
    </SectionHome>
  );
}

export default ProductsSection;
