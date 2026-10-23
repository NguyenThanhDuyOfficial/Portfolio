import { Badge } from "@nguyenthanhduyofficial/ui/components/badge";
import Image from "next/image";
import Link from "next/link";
import { IoIosPricetags } from "react-icons/io";

export interface Product {
  slug: string;
  title: string;
  description?: string;
  price?: string;
  demoUrl?: string;
  githubUrl?: string;
  timeline?: string;
  tags?: string[];
  techs: string[];
  images: string[];
}

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="max-w-120 shadow-2xl rounded-xl">
      <div className="relative w-full aspect-video">
        <Link href={product.slug}>
          <Image
            src={product.images[0]!}
            alt="Product's Image"
            fill
            sizes="(max-width: 480px) 100vw, 480px"
            className="object-cover"
          />
        </Link>
        {product.tags && (
          <div className="absolute top-4 left-4 flex gap-2">
            {product.tags.map((tag, index) => (
              <Badge
                key={index}
                variant="secondary"
                className="md:p-4 md:text-lg"
              >
                {tag}
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
        <h4 className="line-clamp-2 md:text-2xl">{product.title}</h4>
      </div>
    </div>
  );
}
