function RatingBar({ rate, percent }) {
  return (
    <div className="flex gap-1.5 items-center">
      <span className="mso-fill text-xs text-amber-400">star</span>
      <p className="text-xs w-3 flex justify-center">{rate}</p>
      <div className="bg-primary/20 h-1.5 w-full rounded-full overflow-hidden">
        <div
          className={`bg-primary h-full ${percent === 0 ? "w-0" : `w-[${percent}%]`}`}
        ></div>
      </div>
    </div>
  );
}

function Rating({ product }) {
  //

  const totalReview = product.reviews.length;

  const ratingCount = { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 };

  product.reviews.forEach((review) => {
    ratingCount[review.rating]++;
  });

  const ratingPercentage = {};

  for (let rating in ratingCount) {
    ratingPercentage[rating] = (ratingCount[rating] / totalReview) * 100;
  }

  return (
    <div className="grid grid-cols-2 cursor-default pr-1">
      <div className="flex flex-col justify-between">
        <div className="flex items-end">
          <h1 className="text-5xl font-medium">{product.rating.toFixed(1)}</h1>
          <p className="text-primary/50">/5</p>
        </div>

        <p className="text-xs text-primary/50">
          ({product.reviews.length} New Reveiws)
        </p>
      </div>

      <div className="flex flex-col-reverse justify-between">
        {Object.entries(ratingPercentage).map((r) => (
          <div>
            <RatingBar rate={r[0]} percent={Number(r[1].toFixed(0))} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Rating;
