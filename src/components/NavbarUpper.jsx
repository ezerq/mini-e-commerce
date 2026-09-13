import { useEffect, useState } from "react";

function NavbarUpper() {
  const promos = [
    "🔥 Flash Sale! Up to 50% Off Today Only",
    "🚚 Free Shipping on Your First Order",
    "🎉 Special Deals Are Here! Shop & Save More",
    "⚡ Limited Time Offer — Grab Your Favorites Now",
    "🛍️ New Arrivals Are Here! Explore Now",
    "🎁 Exclusive Deals Just For You",
    "💳 Save More with Our Special Discounts",
    "🌟 Best Picks at Better Prices — Shop Now",
    "🔥 Hot Deals Dropping Every Week",
    "🚀 Big Savings Start Here — Don’t Miss Out",
  ];

  const [currentPromo, setCurrentPromo] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPromo((prev) => {
        if (prev === promos.length - 1) {
          return 0;
        }
        return prev + 1;
      });
    }, 30000);

    return () => clearInterval(interval);
  });

  return (
    <div className="bg-primary flex text-slate-400 justify-center py-1.5 gap-2 text-xs font-thin">
      <p>{promos[currentPromo]}</p>
      <span className="w-[1px] bg-slate-500"></span>
      <p>{promos[(currentPromo + 3) % promos.length]} </p>
      <span className="w-[1px] bg-slate-500"></span>
      <p>{promos[(currentPromo + 6) % promos.length]} </p>
    </div>
  );
}

export default NavbarUpper;
