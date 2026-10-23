import { Button } from "@nguyenthanhduyofficial/ui/components/button";
import Image from "next/image";
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";
import { SiGmail, SiGithub } from "react-icons/si";
import { GoArrowUpRight } from "react-icons/go";
import ProductCard, { Product } from "../components/ProductCard";

const products: Product[] = [
  {
    slug: "joli",
    title: "Joli - Home Fragrance & Personal Care",
    description: "",
    price: "3tr",
    demoUrl: "",
    githubUrl: "",
    timeline: "01/2024 - 03/2024",
    tags: ["Ecommerce"],
    techs: ["Next.js", "TailwindCSS"],
    images: ["/products/joli.png"],
  },
  {
    slug: "car",
    title: "Car - Car Rental Platform",
    description: "",
    price: "7tr",
    demoUrl: "",
    githubUrl: "",
    timeline: "01/2024 - 03/2024",
    tags: ["Booking"],
    techs: ["Next.js", "TailwindCSS"],
    images: ["/products/car.png"],
  },
  {
    slug: "dotfile",
    title: "Dotfile - Arch/Hypr Linux Custom Desktop Environment",
    description: "",
    tags: ["Dotfile"],
    demoUrl: "",
    githubUrl: "",
    timeline: "01/2024 - 03/2024",
    techs: ["Next.js", "TailwindCSS"],
    images: ["/products/dotfile.png"],
  },
  {
    slug: "odyssey",
    title: "Odyssey - Learn Community Website",
    description: "",
    price: "3tr",
    demoUrl: "",
    githubUrl: "",
    timeline: "01/2024 - 03/2024",
    tags: ["Blog", "Landing Page"],
    techs: ["Next.js", "TailwindCSS"],
    images: ["/products/odyssey.png"],
  },
];

export default function Home() {
  return (
    <main className="w-full max-w-7xl mx-auto">
      <section
        id="hero"
        className="relative h-screen max-h-200 flex flex-col justify-center gap-16 md:gap-0"
      >
        <div className="relative flex flex-col md:flex-row items-center justify-center gap-0 md:gap-8 text-[140px] md:text-[280px] leading-none md:leading-normal">
          <p className="font-londrina-outline ">THÀNH</p>
          <p className="font-londrina-solid">DUY</p>
        </div>
        <div className="hidden md:block absolute bottom-0 left-1/2 -translate-x-1/2 w-140 aspect-square">
          <Image
            src="/profile1.png"
            alt=""
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="px-8 md:pl-20 md:pt-8 md:pr-40 flex flex-col md:flex-row justify-between gap-8 md:gap-0">
          <div className="space-y-4">
            <div>
              <h2>Fullstack Developer</h2>
              <p>Turning problems into software.</p>
            </div>
            <Button size="lg" className="px-4 rounded-xl shadow-xl">
              Let's collaborate <GoArrowUpRight />
            </Button>
          </div>
          <div className="flex md:flex-col gap-4">
            <Button
              variant="outline"
              size="lg"
              nativeButton={false}
              render={
                <Link href="">
                  <SiGithub /> Github
                </Link>
              }
            ></Button>
            <Button
              variant="outline"
              size="lg"
              nativeButton={false}
              render={
                <Link href="">
                  <FaLinkedin /> LinkedIn
                </Link>
              }
            ></Button>
            <Button
              variant="outline"
              size="lg"
              nativeButton={false}
              render={
                <Link href="">
                  <SiGmail /> Gmail
                </Link>
              }
            ></Button>
          </div>
        </div>
      </section>
      <section id="work" className="px-4 md:px-16">
        <div className="relative pb-8 flex flex-col items-center">
          <p className="text-4xl md:text-[120px] text-foreground/10">
            SELECTED WORK
          </p>
          <div className="absolute top-4 md:bottom-8 left-0 w-full flex justify-between items-end">
            <p className="text-xl md:text-5xl font-medium">/SELECTED WORK</p>
            <p className="md:text-2xl">4+ complete projects</p>
          </div>
        </div>
        <div className="flex flex-col items-center gap-8">
          <div className="w-full flex justify-between">
            <Button variant="ghost">All</Button>
            <Button variant="outline">
              View All Work <GoArrowUpRight />
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 gap-x-24">
            {products.map((product, index) => (
              <ProductCard key={index} product={product} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
