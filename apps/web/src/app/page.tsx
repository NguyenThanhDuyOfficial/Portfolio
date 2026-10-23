import { Button } from "@nguyenthanhduyofficial/ui/components/button";
import Image from "next/image";
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";
import { GoArrowUpRight } from "react-icons/go";
import ProductCard from "../components/ProductCard";
import { SiGmail, SiGithub } from "react-icons/si";
import { products } from "../data/products";
import ContactSection from "../components/ContactSection";

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
        className="relative h-screen max-h-200 flex flex-col justify-center gap-16 lg:gap-0 max-w-7xl mx-auto"
      >
        <div className="relative flex flex-col md:flex-row items-center justify-center gap-0 md:gap-8 text-[120px] md:text-[160px] lg:text-[240px] leading-none lg:leading-normal">
          <p className="font-londrina-outline ">THÀNH</p>
          <p className="font-londrina-solid">DUY</p>
        </div>
        <div className="hidden lg:block absolute bottom-0 left-1/2 -translate-x-1/2 w-140 aspect-square">
          <Image
            src="/profile1.png"
            alt=""
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="px-8 lg:pl-20 lg:pt-8 lg:pr-40 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-0">
          <div className="flex flex-col items-center gap-4 text-center lg:items-start lg:text-start">
            <div>
              <h2>Fullstack Developer</h2>
              <p>Turning problems into software.</p>
            </div>
            <Button
              size="lg"
              className="px-4 rounded-xl shadow-xl"
              nativeButton={false}
              render={
                <Link href="/contact">
                  {" "}
                  Let's collaborate <GoArrowUpRight />
                </Link>
              }
            />
          </div>
          <div className="flex lg:flex-col gap-4">
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
      <section id="work" className="px-4 py-16 lg:px-16 max-w-7xl mx-auto">
        <div className="relative pb-8 flex flex-col items-center">
          <p className="text-4xl lg:text-[100px] text-foreground/10">
            SELECTED WORK
          </p>
          <div className="absolute top-4 lg:bottom-8 left-0 w-full flex justify-between items-end">
            <p className="text-xl lg:text-5xl font-medium">/SELECTED WORK</p>
            <p className="lg:text-2xl">4+ complete projects</p>
          </div>
        </div>
        <div className="flex flex-col items-center gap-8">
          <div className="w-full flex justify-between">
            <Button variant="ghost">All</Button>
            <Button variant="outline">
              View All Work <GoArrowUpRight />
            </Button>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 gap-x-24">
            {products.map((product, index) => (
              <ProductCard key={index} product={product} />
            ))}
          </div>
        </div>
      </section>
      <section
        id="service"
        className="relative w-full min-h-screen flex items-center justify-center"
      >
        <Image
          src="/cloud.jpg"
          alt="background"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="max-w-7xl mx-auto px-4 py-20 lg:px-16">
          <div className="relative pb-8 flex flex-col items-center">
            <p className="text-4xl lg:text-[100px] text-foreground/20">
              SERVICE
            </p>
            <div className="absolute top-4 lg:bottom-8 left-0 w-full flex justify-between items-end">
              <p className="text-xl lg:text-5xl font-medium">/SERVICE</p>
            </div>
          </div>
          <div className="relative flex flex-col border-y border-foreground/50 divide-y divide-foreground/50">
            {services.map((service, index) => (
              <Link key={index} href={service.url}>
                <div className="px-4 py-8 flex justify-between items-center gap-8 hover:bg-card hover:text-card-foreground rounded-sm hover:shadow-2xl">
                  <div>
                    <p className="text-lg lg:text-3xl font-medium">
                      {service.title}
                    </p>
                    <p>{service.description}</p>
                  </div>
                  <GoArrowUpRight className="w-8 lg:w-12 h-8 lg:h-12 shrink-0" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <ContactSection />
    </main>
  );
}
