import RatingStars from "./RatingStars";

function ProductCard({ product }) {
  //
  const discountPrice =
    product.price - product.price * (product.discountPercentage / 100);

  const category =
    product.category[0].toUpperCase() + product.category.slice(1);

  function openProductDetail() {
    console.log(product.title);
  }

  return (
    <div
      onClick={openProductDetail}
      className="bg-bg/30 rounded-2xl px-4 py-3 cursor-pointer hover:bg-bg/60"
    >
      <img src={product.thumbnail} alt={product.title} />

      <h2 className="truncate font-semibold">{product.title}</h2>

      <p className="bg-blue-100 text-xs text-primary/50 rounded-lg w-fit px-2 py-0.5">
        {category}
      </p>

      <div className="flex items-center gap-1 text-sm text-primary/50">
        <RatingStars rating={product.rating} />
        <p>{product.rating}</p>
      </div>

      <div className="flex items-end gap-1">
        <p className="font-bold text-xl">${discountPrice.toFixed(2)}</p>
        <p className="text-primary/50 text-sm line-through">${product.price}</p>
      </div>
    </div>
  );
}

export default ProductCard;
