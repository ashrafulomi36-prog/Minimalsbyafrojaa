import type { Metadata } from "next";
import CategoryPage from "@/components/product/CategoryPage";

export const metadata: Metadata = {
  title: "Ice Cream",
  description:
    "Premium artisan ice creams in Bangladesh. Made with real fruits, fresh dairy, and seasonal flavours by Minimals By Afroja.",
  openGraph: {
    title: "Ice Cream | Minimals By Afroja",
    description:
      "Artisan ice creams made with real ingredients. Order your favourites today.",
  },
};

export default function IceCreamPage() {
  return (
    <CategoryPage
      category="ice-cream"
      title="Ice Cream"
      description="Artisan ice creams made with real fruit, premium dairy, and seasonal flavours. A cool indulgence for every moment."
      emoji="🍦"
    />
  );
}
