import RatingStars from "./RatingStars";

function ReviewCard({ review }) {
  function getDate(date) {
    const theDate = new Date(date);

    const text = `${theDate.getMonth()}-${theDate.getDate()}-${theDate.getFullYear()}`;
    return text;
  }

  return (
    <div className="cursor-default border shrink-0 basis-[calc(50%-4px)] border-primary/20 rounded-lg px-2 pt-1.5 flex flex-col justify-between">
      <h1 className="text-sm font-medium">{review.reviewerName}</h1>
      <p className="text-xs text-primary/60 flex-1">{review.comment} </p>

      <div className="flex items-center justify-between">
        <RatingStars rating={review.rating} />
        <p className="text-xs text-primary/50">{getDate(review.date)}</p>
      </div>
    </div>
  );
}

export default ReviewCard;
