import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { client } from "@/sanity/lib/client";
import {
  getProductBySlugQuery,
  getAllProductSlugsQuery,
} from "@/sanity/lib/queries";
import SiteLayout from "@/components/layout/SiteLayout";
import ProductGallery from "@/components/product/ProductGallery";
import OrderForm from "@/components/product/OrderForm";
import { urlFor } from "@/sanity/lib/client";
import {
  formatPrice,
  getAvailabilityBadge,
  getCategoryLabel,
  getCategoryPath,
} from "@/lib/utils";
import type { Product } from "@/types";
import Link from "next/link";
import { ChevronRight, Clock, Package, Truck } from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  try {
    const slugs: { slug: string }[] = await client.fetch(getAllProductSlugsQuery);
    return slugs.map(({ slug }) => ({ slug }));
  } catch {
    return [];
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product: Product | null = await client.fetch(getProductBySlugQuery, {
    slug,
  });

  if (!product) return { title: "Product Not Found" };

  const primaryImage = product.images?.[0];
  const imageUrl = primaryImage
    ? urlFor(primaryImage).width(1200).height(630).url()
    : undefined;

  const lowestPrice = product.flavours?.length
    ? Math.min(...product.flavours.map((f) => f.pricePerPound))
    : product.basePrice;

  return {
    title: product.title,
    description: product.shortDescription,
    openGraph: {
      title: `${product.title} | Minimals By Afroja`,
      description: product.shortDescription,
      images: imageUrl ? [{ url: imageUrl, width: 1200, height: 630 }] : [],
    },
    other: {
      "product:price:amount": lowestPrice.toString(),
      "product:price:currency": "BDT",
    },
  };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;

  const product: Product | null = await client.fetch(
    getProductBySlugQuery,
    { slug },
    { next: { revalidate: 60 } }
  );

  if (!product) notFound();

  const badge = getAvailabilityBadge(product.availability);
  const categoryLabel = getCategoryLabel(product.category);
  const categoryPath = getCategoryPath(product.category);
  const lowestPrice = product.flavours?.length
    ? Math.min(...product.flavours.map((f) => f.pricePerPound))
    : product.basePrice;

  return (
    <SiteLayout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-8">
          <ol className="flex items-center gap-1 text-xs font-body text-text-muted">
            <li>
              <Link href="/" className="hover:text-accent transition-colors">
                Home
              </Link>
            </li>
            <li>
              <ChevronRight className="w-3 h-3" />
            </li>
            <li>
              <Link
                href={categoryPath}
                className="hover:text-accent transition-colors"
              >
                {categoryLabel}
              </Link>
            </li>
            <li>
              <ChevronRight className="w-3 h-3" />
            </li>
            <li className="text-text font-medium" aria-current="page">
              {product.title}
            </li>
          </ol>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 xl:gap-16">
          {/* Gallery */}
          <div>
            {product.images && product.images.length > 0 ? (
              <ProductGallery
                images={product.images}
                productTitle={product.title}
              />
            ) : (
              <div className="aspect-square rounded-2xl bg-secondary flex items-center justify-center text-7xl">
                🎂
              </div>
            )}
          </div>

          {/* Details */}
          <div className="space-y-6">
            {/* Header */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Link
                  href={categoryPath}
                  className="font-body text-xs font-semibold text-accent tracking-wider uppercase hover:underline"
                >
                  {categoryLabel}
                </Link>
                <span className="text-gray-300">·</span>
                <span
                  className={`text-xs font-body font-semibold px-2.5 py-0.5 rounded-full ${badge.className}`}
                >
                  {badge.label}
                </span>
              </div>

              <h1 className="font-display text-3xl md:text-4xl font-semibold text-text">
                {product.title}
              </h1>

              <p className="font-body text-text-muted mt-3 leading-relaxed">
                {product.shortDescription}
              </p>
            </div>

            {/* Price */}
            <div className="flex items-end gap-3">
              <div>
                <p className="font-body text-xs text-text-muted mb-1">
                  Starting from
                </p>
                <p className="font-display text-3xl font-semibold text-accent">
                  {formatPrice(lowestPrice)}
                  <span className="text-sm font-body text-text-muted font-normal">
                    /pound
                  </span>
                </p>
              </div>
            </div>

            {/* Flavours list */}
            {product.flavours && product.flavours.length > 0 && (
              <div>
                <h3 className="font-body text-sm font-semibold text-text mb-2">
                  Available Flavours
                </h3>
                <div className="flex flex-wrap gap-2">
                  {product.flavours.map((f) => (
                    <span
                      key={f.flavourName}
                      className="font-body text-xs bg-secondary text-accent px-3 py-1.5 rounded-full border border-primary/30"
                    >
                      {f.flavourName} — {formatPrice(f.pricePerPound)}/lb
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Product meta */}
            <div className="grid grid-cols-2 gap-3">
              {product.deliveryTime && (
                <div className="flex items-start gap-3 bg-secondary rounded-xl p-3">
                  <Truck className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-body text-[10px] text-text-muted font-semibold uppercase tracking-wider">
                      Delivery
                    </p>
                    <p className="font-body text-xs text-text mt-0.5">
                      {product.deliveryTime}
                    </p>
                  </div>
                </div>
              )}
              {product.ingredients && (
                <div className="flex items-start gap-3 bg-secondary rounded-xl p-3">
                  <Package className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-body text-[10px] text-text-muted font-semibold uppercase tracking-wider">
                      Ingredients
                    </p>
                    <p className="font-body text-xs text-text mt-0.5 line-clamp-2">
                      {product.ingredients}
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Description */}
            {product.description && (
              <div>
                <h3 className="font-body text-sm font-semibold text-text mb-2 flex items-center gap-2">
                  <Clock className="w-4 h-4 text-accent" />
                  About this product
                </h3>
                <div className="font-body text-sm text-text-muted leading-relaxed space-y-2">
                  {product.description.map((block, i) => {
                    if (block._type === "block" && block.children) {
                      return (
                        <p key={i}>
                          {block.children
                            .map((child) => child.text)
                            .join("")}
                        </p>
                      );
                    }
                    return null;
                  })}
                </div>
              </div>
            )}

            {/* Order form */}
            <OrderForm product={product} />
          </div>
        </div>
      </div>
    </SiteLayout>
  );
}
