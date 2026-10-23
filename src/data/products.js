import { PACKET_IMAGES } from "../constants/productImages";

export const STAR_PRODUCT_ID = 1;

export const CATEGORIES = [
  { id: "all", label: "All packs" },
  { id: "mixture", label: "Mixture" },
  { id: "sev", label: "Bhujia & sev" },
  { id: "dal", label: "Moong dal" },
];

export const products = [
  {
    id: 1,
    name: "Mixture",
    hindiName: "मिक्सचर",
    slug: "mixture",
    category: "mixture",
    tagline: "Star product",
    highlights: ["Premium", "Crispy delicious", "Natural ingredients"],
    description:
      "Our bestselling namkeen mixture — golden crunch, handmade spices, and the perfect tea-time blend. The pack customers ask for first.",
    price: 5,
    mrp: null,
    priceNote: "MRP on pack",
    weights: ["Retail pouch"],
    image: PACKET_IMAGES.mixture,
    isStar: true,
    featured: true,
  },
  {
    id: 2,
    name: "Bhujia Sev",
    hindiName: "भुजिया सेव",
    slug: "bhujia-sev",
    category: "sev",
    tagline: "Chatpata crispy",
    highlights: ["Natural ingredients", "100% veg"],
    description:
      "Thin, crispy bhujia sev with bold masala — a classic savoury snack for every age.",
    price: 5,
    mrp: null,
    priceNote: "₹5 ONLY",
    weights: ["Retail pouch"],
    image: PACKET_IMAGES.bhujiaSev,
    isStar: false,
    featured: true,
  },
  {
    id: 3,
    name: "Moong Dal",
    hindiName: "मूंग दाल",
    slug: "moong-dal",
    category: "dal",
    tagline: "Light & crunchy",
    highlights: ["Rich in protein", "100% veg", "Natural ingredients"],
    description:
      "Salty, tasty moong dal namkeen — light crunch and protein-rich snacking from our kitchen.",
    price: 5,
    mrp: null,
    priceNote: "₹5 ONLY",
    weights: ["Retail pouch"],
    image: PACKET_IMAGES.moongDal,
    isStar: false,
    featured: true,
  },
];

export function getStarProduct() {
  return products.find((p) => p.id === STAR_PRODUCT_ID);
}
