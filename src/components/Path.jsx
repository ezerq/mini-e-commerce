import { Link } from "react-router-dom";

function Path({ product }) {
  return (
    <div className="flex gap-1 text-sm text-primary/70 items-center">
      <Link
        to="/"
        className="mso text-xl p-1.5 hover:bg-primary/10 rounded-full"
      >
        arrow_back
      </Link>
      <div className="flex gap-1 items-center">
        <Link to="/" className="path">
          Home
        </Link>
        <span className="mso path-arrow">arrow_right</span>{" "}
        <p className="path">{product}</p>
      </div>
    </div>
  );
}

export default Path;
