import type { Metadata } from "next";
import CategoryPage from "@/components/product/CategoryPage";

export const metadata: Metadata = {
  title: "Brownies",
  description:
    "Rich, fudgy brownies in Bangladesh. Made fresh daily in small batches by Minimals By Afroja.",
  openGraph: {
    title: "Brownies | Minimals By Afroja",
    description:
      "Rich, fudgy brownies with a crackling crust — baked fresh. Order today.",
  },
};

export default function BrowniesPage() {
  return (
    <CategoryPage
      category="brownies"
      title="Brownies"
      description="Rich, fudgy brownies with a crackling crust and gooey centre — baked fresh in small batches every day. Pure indulgence in every bite."
      emoji="🍫"
    />
  );
}
