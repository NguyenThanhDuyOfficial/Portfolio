"use client";

import { products } from "@/src/data/products";
import { Badge } from "@nguyenthanhduyofficial/ui/components/badge";
import { Button } from "@nguyenthanhduyofficial/ui/components/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@nguyenthanhduyofficial/ui/components/carousel";
import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";
import Autoplay from "embla-carousel-autoplay";
import { useParams } from "next/navigation";
import Image from "next/image";
import ProductCard from "@/src/components/ProductCard";
import ContactSection from "@/src/components/ContactSection";

export default function Product() {
  const params = useParams<{ slug: string }>();
  const slug = params.slug;
  const product = products.find((i) => i.slug === slug);
  const otherProducts = products.filter((i) => i.slug !== slug);
  return (
    <main className="w-full min-h-screen pt-24 lg:pb-8 lg:pt-28 flex flex-col items-center justify-center gap-8">
      <div className="w-full max-w-5xl mx-auto px-4 lg:px-16 flex flex-col gap-4 lg:flex-row justify-between lg:items-end">
        <div className="space-y-8">
          <div className="flex gap-4">
            {product?.tags &&
              product.tags.map((tag) => (
                <Badge variant="secondary" key={tag}>
                  {tag}
                </Badge>
              ))}
          </div>
          <div className="space-y-2 max-w-[300px]">
            <p className="text-4xl font-bold">{product?.title}</p>
            <p>{product?.description}</p>
          </div>
          <div className="space-y-4">
            <div className="flex gap-4">
              <Button
                nativeButton={false}
                render={
                  <Link href={product?.demoUrl ?? ""}>
                    Live Preview <GoArrowUpRight />
                  </Link>
                }
              />
              <Button
                nativeButton={false}
                variant="secondary"
                render={<Link href="/contact">Contact Me</Link>}
              />
            </div>
            {product?.githubUrl && (
              <Button
                nativeButton={false}
                variant="outline"
                render={<Link href={product.githubUrl}>Github</Link>}
              />
            )}
          </div>
        </div>
        <div className="flex flex-row justify-between lg:flex-col items-end gap-8">
          <div className="flex flex-col lg:items-end gap-1">
            <p className="text-foreground/80">Price</p>
            <Badge className="lg:text-lg lg:p-4">
              {product?.price ?? "FREE"}
            </Badge>
          </div>
          <div className="text-right gap-4">
            <p className="text-foreground/80">Timeline</p>
            <p>{product?.timeline ?? "Unknown"}</p>
          </div>
        </div>
      </div>
      <Carousel
        className="w-full max-w-5xl flex gap-2 px-4 lg:px-16 py-8"
        plugins={[
          Autoplay({
            delay: 1000,
            stopOnMouseEnter: true,
            stopOnInteraction: false,
          }),
        ]}
        opts={{
          align: "start",
          loop: true,
          duration: 40,
          dragFree: true,
        }}
      >
        <CarouselContent>
          {product?.techs.map(({ title, url, color, icon: Icon }) => (
            <CarouselItem
              key={title}
              className="basis-1/4 sm:basis-1/6 md:basis-[8%]"
            >
              <Link href={url}>
                <Icon className="w-8 h-8 rounded-full" style={{ color }} />
              </Link>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <div className="w-full max-w-5xl mx-auto px-4 lg:px-16">
        {product?.images.map((image) => (
          <div key={image} className="relative w-full aspect-video">
            <Image
              src={image}
              alt="Producct's Image"
              fill
              className="object-cover"
              sizes="100vw"
            />
          </div>
        ))}
      </div>
      <div className="w-full max-w-5xl mx-auto px-4 py-8 lg:px-16">
        <div className="relative pb-8 flex flex-col items-center">
          <p className="text-4xl lg:text-[100px] text-foreground/20">
            MORE PRODUCT
          </p>
          <div className="absolute top-4 lg:bottom-8 left-0 w-full flex justify-between items-end">
            <p className="text-xl lg:text-5xl font-medium">/MORE PRODUCT</p>
          </div>
        </div>
        <Carousel
          className="w-full"
          plugins={[
            Autoplay({
              delay: 3000,
              stopOnMouseEnter: true,
              stopOnInteraction: false,
            }),
          ]}
          opts={{
            align: "start",
            loop: true,
            duration: 40,
            dragFree: true,
          }}
        >
          <CarouselContent>
            {otherProducts.map((product) => (
              <CarouselItem
                key={product.slug}
                className="basis-full lg:basis-1/2"
              >
                <ProductCard product={product} className="shadow-none" />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
      <ContactSection />
    </main>
  );
}
