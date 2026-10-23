import { Button } from "@nguyenthanhduyofficial/ui/components/button";
import Image from "next/image";
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";
import { SiGmail, SiGithub } from "react-icons/si";
import { GoArrowUpRight } from "react-icons/go";

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
    </main>
  );
}
