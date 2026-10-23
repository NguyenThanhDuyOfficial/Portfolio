import { Button } from "@nguyenthanhduyofficial/ui/components/button";
import Image from "next/image";
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";
import { SiGmail, SiGithub } from "react-icons/si";
import { GoArrowUpRight } from "react-icons/go";
import ProductCard, { Product } from "../components/ProductCard";
import { Separator } from "@nguyenthanhduyofficial/ui/components/separator";
import { Badge } from "@nguyenthanhduyofficial/ui/components/badge";

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

const services = [
  {
    title: "Landing Page",
    description:
      "Design and Code modern, performance, SEO and responsive landing page.",
    url: "",
  },
  {
    title: "MVP Web/App",
    description:
      "Business Analysis, Design, Code MVP product that solves your problems.",
    url: "",
  },
  {
    title: "Fix / Update / Upgrade",
    description: "Fix bugs and upgrade your website to meet your needs.",
    url: "",
  },
  {
    title: "UI/UX Design & Implementation",
    description: "UI/UX Design on Penpot/Figma, or Design to code.",
    url: "",
  },
];

export default function Home() {
  return (
    <main className="w-full">
      <section
        id="hero"
        className="relative h-screen max-h-200 flex flex-col justify-center gap-16 md:gap-0 max-w-7xl mx-auto"
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
      <section id="work" className="px-4 pb-16 md:px-16 max-w-7xl mx-auto">
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
      <section id="service" className="relative w-full h-screen">
        <Image
          src="/cloud.jpg"
          alt="background"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="max-w-7xl mx-auto px-4 pt-20 md:px-16">
          <div className="relative pb-8 flex flex-col items-center">
            <p className="text-4xl md:text-[120px] text-foreground/20">
              SERVICE
            </p>
            <div className="absolute top-4 md:bottom-8 left-0 w-full flex justify-between items-end">
              <p className="text-xl md:text-5xl font-medium">/SERVICE</p>
            </div>
          </div>
          <div className="relative flex flex-col border-y border-foreground/50 divide-y divide-foreground/50">
            {services.map((service, index) => (
              <Link key={index} href={service.url}>
                <div className="px-4 py-8 flex justify-between items-center gap-8 hover:bg-card hover:text-card-foreground rounded-sm hover:shadow-2xl">
                  <div>
                    <p className="text-lg md:text-3xl font-medium">
                      {service.title}
                    </p>
                    <p>{service.description}</p>
                  </div>
                  <GoArrowUpRight className="w-8 md:w-12 h-8 md:h-12 shrink-0" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section id="contact" className="relative w-full h-screen">
        <Image
          src="/cloud.jpg"
          alt="background"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="relative max-w-7xl mx-auto h-screen backdrop-blur-2xl px-4 md:px-16 rounded-2xl flex flex-col gap-16 items-center justify-center">
          <Badge variant="secondary" className="drop-shadow-lg">
            <div className="w-2.5 h-2.5 bg-emerald-500 rounded-full" />{" "}
            Available for New Project
          </Badge>
          <div className="px-4 flex flex-col items-center gap-4 text-center">
            <p className="text-2xl md:text-6xl font-bold md:font-medium">
              HAVE A PROJECT IN MIND?
            </p>
            <p className="max-w-[600px]">
              Together, we can create something clear and impactful. Let's
              collaborate to bring our ideas to life in a way that reasonates
              with everyone.
            </p>
            <Button
              nativeButton={false}
              className="mt-4 px-4 py-4 rounded-2xl shadow-2xl"
              render={
                <Link href="#contact">
                  Contact Me <GoArrowUpRight />
                </Link>
              }
            />
          </div>

          <div className="flex gap-4 md:gap-16">
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
    </main>
  );
}
