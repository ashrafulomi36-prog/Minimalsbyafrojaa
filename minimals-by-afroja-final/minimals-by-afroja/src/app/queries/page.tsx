import type { Metadata } from "next";
import SiteLayout from "@/components/layout/SiteLayout";
import QueriesForm from "@/components/forms/QueriesForm";

export const metadata: Metadata = {
  title: "Queries",
  description:
    "Have a question about our cakes, brownies, or ice cream? Send us a message and we'll reply on WhatsApp instantly.",
  openGraph: {
    title: "Queries | Minimals By Afroja",
    description:
      "Ask us anything — custom orders, pricing, delivery, and more.",
  },
};

export default function QueriesPage() {
  return (
    <SiteLayout>
      <QueriesForm />
    </SiteLayout>
  );
}
