function RatingStars({ rating }) {
  //
  const stars = [];

  const fullStar = Math.floor(rating);
  const hasHalf = rating % 1 >= 0.5;

  for (let i = 1; i <= fullStar; i++) {
    console.log(`* ${i}`);
    stars.push(<span className="mso-fill mt-1">star_rate</span>);
  }

  if (hasHalf) {
    console.log("*/");
    stars.push(<span className="mso-fill">star_rate</span>);
  } else {
    console.log("()");
    stars.push(<span className="mso-fill text-slate-300">star_rate</span>);
  }

  const emptyStar = 5 - stars.length;

  for (let i = 1; i <= emptyStar; i++) {
    console.log("()");
    stars.push(<span className="mso-fill text-slate-300">star_rate</span>);
  }

  return <div className="text-amber-300">{stars}</div>;
}

export default RatingStars;
