import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function BannerCarousel({ banners }) {
  //
  const [currentIndex, setCurrentIndex] = useState(1);
  const [enableSlide, setEnableSlide] = useState(true);

  const sliderBanners = [banners[banners.length - 1], ...banners, banners[0]];

  const activeDot =
    currentIndex === 0
      ? banners.length - 1
      : currentIndex === sliderBanners.length - 1
        ? 0
        : currentIndex - 1;

  const nextSlide = () => {
    setCurrentIndex((prev) => prev + 1);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => prev - 1);
  };

  const jumpWithoutSlide = (index) => {
    setEnableSlide(false);
    setCurrentIndex(index);

    setTimeout(() => {
      setEnableSlide(true);
    }, 70);
  };

  const handleTransitionEnd = () => {
    if (currentIndex === sliderBanners.length - 1) {
      jumpWithoutSlide(1);
    } else if (currentIndex === 0) {
      jumpWithoutSlide(sliderBanners.length - 2);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        return prev === sliderBanners.length - 1 ? 1 : prev + 1;
      });
    }, 10000);

    return () => clearInterval(interval);
  });

  return (
    <div className="relative overflow-hidden">
      <div
        onTransitionEnd={handleTransitionEnd}
        className={`flex ${enableSlide ? "transition-transform duration-500 ease-in-out" : ""}`}
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {sliderBanners.map((banner, index) => (
          <div
            key={index}
            className={`relative w-full  shrink-0 cursor-default ${banner.textColor}`}
          >
            <div className="flex flex-col gap-2 inset-y-10 left-15 absolute">
              <p className="text-xs w-fit bg-white/50 px-2 py-0.5 rounded-full border border-white">
                {banner.tag}
              </p>

              <h1 className={`text-4xl max-w-90 font-bold leading-9`}>
                {banner.headline}
              </h1>

              <p className="max-w-80 leading-4 text-sm opacity-70">
                {banner.subHeadline}
              </p>

              <Link
                to={`/product/${banner.productId}`}
                className={`${banner.bgColor} ${banner.bgHoverColor} mt-3 flex items-center text-sm text-white w-fit px-4 h-9 rounded-lg`}
              >
                {banner.ctaPrimary}
              </Link>
            </div>

            <img src={banner.image} alt={banner.headline} />
          </div>
        ))}
      </div>

      <div className=" flex justify-center gap-1 absolute bottom-3 left-1/2 -translate-x-1/2">
        {banners.map((banner, index) => (
          <div
            key={index}
            className={`${activeDot === index ? `${banner.bgColor} w-20` : "bg-white/50 w-10"} rounded-full h-1 transition-all duration-300`}
          ></div>
        ))}
      </div>

      <button onClick={prevSlide} className="banner-btn hover:bg-gradient-to-l">
        <span className="mso bg-white/30 rounded-full p-0.5">
          keyboard_arrow_left
        </span>
      </button>

      <button
        onClick={nextSlide}
        className="banner-btn right-0 hover:bg-gradient-to-r"
      >
        <span className="mso bg-white/30 rounded-full p-0.5">
          keyboard_arrow_right
        </span>
      </button>
    </div>
  );
}

export default BannerCarousel;
