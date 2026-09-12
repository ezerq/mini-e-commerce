import { useParams } from "react-router-dom";

import Path from "../components/Path";
import ProductGallery from "../components/ProductGallery";
import ProductInfo from "../components/ProductInfo";

function ProductDetail({ products }) {
  const { id } = useParams();

  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return <p>Loading...</p>;
  }

  return (
    <div className="flex flex-col gap-2">
      <Path product={product.title} />

      <div className="grid grid-cols-2 gap-6">
        <ProductGallery product={product} />
        <ProductInfo product={product} />
      </div>
    </div>
  );
}

export default ProductDetail;
