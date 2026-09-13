import { useParams } from "react-router-dom";

import Path from "../components/Path";
import ProductGallery from "../components/ProductGallery";
import ProductInfo from "../components/ProductInfo";
import Accordion from "../components/Accordion";
import Rating from "../components/Rating";
import ReviewCard from "../components/ReviewCard";

function ProductDetail({ products }) {
  const { id } = useParams();

  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return <p>Loading...</p>;
  }

  return (
    <div className="flex flex-col gap-5">
      <Path product={product.title} />

      <div className="grid grid-cols-2 gap-6">
        <ProductGallery product={product} />
        <ProductInfo product={product} />
      </div>

      <div className="grid grid-cols-3 gap-2">
        <Accordion title="Description">
          <p>{product.description}</p>
        </Accordion>

        <div className="h-fit p-4 cursor-default border justify-between flex items-center border-primary/20 col-span-2 rounded-lg">
          <h1 className="text-sm">Dimensions</h1>

          <div className="flex gap-4 items-center">
            <div className="flex gap-2 items-center">
              <p className="text-xs text-primary/50">W</p>
              <p className="text-sm">{product.dimensions.width} cm</p>
            </div>

            <div className="flex gap-2 items-center">
              <p className="text-xs text-primary/50">H</p>
              <p className="text-sm">{product.dimensions.height} cm</p>
            </div>

            <div className="flex gap-2 items-center">
              <p className="text-xs text-primary/50">D</p>
              <p className="text-sm">{product.dimensions.depth} cm</p>
            </div>
          </div>
        </div>

        <h1 className="text-lg col-span-3">Rating & Review</h1>

        <Rating product={product} />

        <div className="col-span-2 overflow-x-auto h-full scroll-smooth scrollbar-hide">
          <div className="flex gap-2 h-full">
            {product.reviews.map((review) => (
              <ReviewCard review={review} />
            ))}
          </div>
        </div>
      </div>

      <div className="divider"></div>
    </div>
  );
}

export default ProductDetail;
