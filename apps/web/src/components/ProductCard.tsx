import { Badge } from "@nguyenthanhduyofficial/ui/components/badge";
import Image from "next/image";
import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";
import { IoIosPricetags } from "react-icons/io";
import { Product } from "../data/products";
import { useTranslations } from "next-intl";

export default function ProductCard({
  product,
  className = "",
}: {
  product: Product;
  className?: string;
}) {
  const t = useTranslations("Product");
  return (
    <div className={`max-w-120 shadow-2xl rounded-xl ${className}`}>
      <div className="relative w-full aspect-video group">
        <Link href={product.slug} className="absolute inset-0">
          <Image
            src={product.images[0]!}
            alt="Product's Image"
            fill
            sizes="(max-width: 480px) 100vw, 480px"
            className="object-cover"
          />
        </Link>
        <div className="absolute inset-0 pointer-events-none bg-foreground/0 group-hover:bg-foreground/30 w-full h-full flex items-center justify-center transition-all duration-300">
          <div className="hidden group-hover:flex w-12 h-12 rounded-full bg-background items-center justify-center transition-all duration-300">
            <GoArrowUpRight size={24} />
          </div>
        </div>
        {product.tags && (
          <div className="absolute top-4 left-4 flex gap-2">
            {product.tags.map((tag, index) => (
              <Badge
                key={index}
                variant="secondary"
                className="md:p-4 md:text-lg"
              >
                {t(`tags.${tag}`)}
              </Badge>
            ))}
          </div>
        )}
        {product.price && (
          <Badge
            className="absolute bottom-4 right-4 md:p-4 font-medium md:text-lg"
            variant="secondary"
          >
            <IoIosPricetags />
            {product.price}
          </Badge>
        )}
      </div>
      <div className="p-4">
        <h4 className="line-clamp-2 md:text-2xl">
          {t(`${product.slug}.title`)}
        </h4>
      </div>
    </div>
  );
}
