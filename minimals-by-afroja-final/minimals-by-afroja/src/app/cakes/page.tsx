import type { Metadata } from "next";
import CategoryPage from "@/components/product/CategoryPage";

export const metadata: Metadata = {
  title: "Cakes",
  description:
    "Order premium custom cakes in Bangladesh. Birthday cakes, wedding cakes, and anniversary cakes — all handcrafted by Minimals By Afroja.",
  openGraph: {
    title: "Cakes | Minimals By Afroja",
    description:
      "Bespoke celebration cakes for every occasion. Order your custom cake today.",
  },
};

export default function CakesPage() {
  return (
    <CategoryPage
      category="cake"
      title="Our Cakes"
      description="Bespoke celebration cakes for birthdays, weddings, anniversaries, and every sweet milestone. Each cake is handcrafted to order with love."
      emoji="🎂"
    />
  );
}
