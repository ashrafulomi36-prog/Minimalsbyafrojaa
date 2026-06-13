import { Suspense } from "react";
import SiteLayout from "@/components/layout/SiteLayout";
import HeroSection from "@/components/home/HeroSection";
import CategoriesSection from "@/components/home/CategoriesSection";
import FeaturedProductsSection from "@/components/home/FeaturedProductsSection";
import WhyChooseUsSection from "@/components/home/WhyChooseUsSection";
import SocialSection from "@/components/home/SocialSection";
import { ProductGridSkeleton } from "@/components/ui/Skeletons";

export default function HomePage() {
  return (
    <SiteLayout>
      <HeroSection />
      <CategoriesSection />
      <Suspense
        fallback={
          <div className="py-16 md:py-24 bg-secondary">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <ProductGridSkeleton count={3} />
            </div>
          </div>
        }
      >
        <FeaturedProductsSection />
      </Suspense>
      <WhyChooseUsSection />
      <SocialSection />
    </SiteLayout>
  );
}
