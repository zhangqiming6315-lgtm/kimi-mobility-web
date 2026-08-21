import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ProductCategoryTemplate from "@/components/products/ProductCategoryTemplate";
import {
  productCategories,
  productSlugs,
  type ProductSlug,
} from "@/lib/products";

type ProductCategoryPageProps = {
  params: Promise<{ category: string }>;
};

function isProductSlug(value: string): value is ProductSlug {
  return productSlugs.includes(value as ProductSlug);
}

export function generateStaticParams() {
  return productSlugs.map((category) => ({ category }));
}

export async function generateMetadata({
  params,
}: ProductCategoryPageProps): Promise<Metadata> {
  const { category } = await params;

  if (!isProductSlug(category)) {
    return {};
  }

  const product = productCategories[category];

  return {
    title: product.platformName,
    description: `${product.headline} ${product.summary}`,
  };
}

export default async function ProductCategoryPage({
  params,
}: ProductCategoryPageProps) {
  const { category } = await params;

  if (!isProductSlug(category)) {
    notFound();
  }

  return <ProductCategoryTemplate category={productCategories[category]} />;
}
