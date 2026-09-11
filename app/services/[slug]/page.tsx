import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ServiceDetail from "./service-detail";
import { findService, services } from "../service-data";

type ServicePageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = findService(slug);
  if (!service) return {};

  const copy = service.content.tc;
  const title = `${copy.title} | 鉅瀧集團`;
  const description = copy.short;
  const image = new URL(service.image, "https://winchancegroup.com").toString();

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
      images: [{ url: image, width: service.imageWidth, height: service.imageHeight, alt: copy.title }],
    },
    twitter: { card: "summary_large_image", title, description, images: [image] },
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = findService(slug);
  if (!service) notFound();
  return <ServiceDetail service={service} />;
}
