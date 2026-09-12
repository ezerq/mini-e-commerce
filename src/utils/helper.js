function toTitleCase(text) {
  return text
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");
}

function getDiscount(price, discount) {
  return price - price * (discount / 100);
}

export { toTitleCase, getDiscount };
