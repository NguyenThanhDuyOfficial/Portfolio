import { Button } from "@nguyenthanhduyofficial/ui/components/button";
import Image from "next/image";
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";
import { GoArrowUpRight } from "react-icons/go";
import { Badge } from "@nguyenthanhduyofficial/ui/components/badge";
import { SiGmail, SiGithub } from "react-icons/si";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="relative w-full min-h-screen flex items-center justify-center"
    >
      <Image
        src="/cloud.jpg"
        alt="background"
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className="relative max-w-7xl mx-auto h-full backdrop-blur-2xl px-4 py-16 lg:px-16 rounded-2xl flex flex-col gap-16 items-center justify-center">
        <Badge variant="secondary" className="drop-shadow-lg">
          <div className="w-2.5 h-2.5 bg-emerald-500 rounded-full" /> Available
          for New Project
        </Badge>
        <div className="px-4 flex flex-col items-center gap-4 text-center">
          <p className="text-2xl lg:text-6xl font-bold lg:font-medium">
            HAVE A PROJECT IN MIND?
          </p>
          <p className="max-w-150">
            Together, we can create something clear and impactful. Let's
            collaborate to bring our ideas to life in a way that reasonates with
            everyone.
          </p>
          <Button
            nativeButton={false}
            className="mt-4 px-4 py-4 rounded-2xl shadow-2xl"
            render={
              <Link href="/contact">
                Contact Me <GoArrowUpRight />
              </Link>
            }
          />
        </div>

        <div className="flex gap-4 lg:gap-16">
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
  );
}
