export type ProductImage = {
  src: string;
  alt: string;
};

export type ProductVariant = {
  id: "mini" | "pro";
  label: string;
  title: string;
  compareAtPrice: string;
  price: string;
  color: string;
  code: string;
  images: ProductImage[];
};

export const productVariants: ProductVariant[] = [
  {
    id: "mini",
    label: "MINI BALL",
    title: "FIFA World Cup 26™ Historical Mini Ball Set",
    compareAtPrice: "$250",
    price: "$59",
    color: "White / Multicolor",
    code: "JN2093",
    images: [
      {
        src: "/product/optimized/mini/jn2093-1.webp",
        alt: "FIFA World Cup 26 Historical Mini Ball Set box and mini balls",
      },
      {
        src: "/product/optimized/mini/jn2093-2.webp",
        alt: "FIFA World Cup 26 Historical Mini Ball Set front view",
      },
      {
        src: "/product/optimized/mini/jn2093-3.webp",
        alt: "FIFA World Cup 26 Historical Mini Ball Set open display box",
      },
      {
        src: "/product/optimized/mini/jn2093-4.webp",
        alt: "FIFA World Cup 26 Historical Mini Ball Set packaging detail",
      },
      {
        src: "/product/optimized/mini/jn2093-5.webp",
        alt: "FIFA World Cup 26 Historical Mini Ball Set mini ball collection",
      },
      {
        src: "/product/optimized/mini/jn2093-6.webp",
        alt: "FIFA World Cup 26 Historical Mini Ball Set side packaging",
      },
    ],
  },
  {
    id: "pro",
    label: "PRO BALL",
    title: "FIFA World Cup 26™ Historical Pro Ball Set",
    compareAtPrice: "$500",
    price: "$89",
    color: "Multicolor",
    code: "KB1812",
    images: [
      {
        src: "/product/optimized/pro/kb1812-1.webp",
        alt: "Multicolor FIFA World Cup 26 Historical Pro Ball Set open box",
      },
      {
        src: "/product/optimized/pro/kb1812-2.webp",
        alt: "Adidas World Cup Historical Pro Match Ball Set front angle",
      },
      {
        src: "/product/optimized/pro/kb1812-3.webp",
        alt: "Adidas World Cup Historical Pro Match Ball Set closed package",
      },
      {
        src: "/product/optimized/pro/kb1812-4.webp",
        alt: "Adidas World Cup Historical Pro Match Ball Set side detail",
      },
      {
        src: "/product/optimized/pro/kb1812-5.webp",
        alt: "Adidas World Cup Historical Pro Match Ball Set display box",
      },
      {
        src: "/product/optimized/pro/kb1812-6.webp",
        alt: "Adidas World Cup Historical Pro Match Ball Set packaging detail",
      },
    ],
  },
];

export const footerColumns = [
  {
    title: "PRODUCTS",
    links: ["Shoes", "Clothing", "Accessories", "Gift Cards", "New Arrivals"],
  },
  {
    title: "SPORTS",
    links: ["Soccer", "Running", "Basketball", "Football", "Golf"],
  },
  {
    title: "SUPPORT",
    links: ["Help", "Returns & Exchanges", "Shipping", "Order Tracker", "Size Charts"],
  },
  {
    title: "COMPANY INFO",
    links: ["About Us", "adidas Stories", "adidas Apps", "Impact", "Careers"],
  },
];

export const productReviews = [
  {
    rating: 5,
    author: "josemariacarne",
    title: "Awesome",
    date: "May 6, 2026",
    color: "White",
    body: "Awesome product, I can't wait for the next one, recommended",
  },
  {
    rating: 5,
    author: "Yasmin.H.I",
    title: "Best purchase ever",
    date: "April 24, 2026",
    color: "White",
    body: "The World Cup ball set is amazing. Each design feels like part of football history and the quality is really impressive. The texture and details are great, and they feel authentic even as collectibles. Perfect for any football fan or someone who loves the World Cup legacy.",
  },
  {
    rating: 5,
    author: "Marcus R.",
    title: "Bought as a surprise gift",
    date: "April 14, 2026",
    color: "White",
    body: "The display box looks clean and premium. The mini balls are detailed, light, and easy to display on a shelf. It makes the whole collection feel special.",
  },
  {
    rating: 4,
    author: "Lina S.",
    title: "Great collectible set",
    date: "March 30, 2026",
    color: "White",
    body: "Beautiful set and a strong gift idea. I wish the outer packaging was a little thicker, but the balls themselves look fantastic and the historical designs are the highlight.",
  },
];
