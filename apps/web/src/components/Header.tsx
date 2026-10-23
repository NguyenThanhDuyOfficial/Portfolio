"use client";

import { Badge } from "@nguyenthanhduyofficial/ui/components/badge";
import { Button } from "@nguyenthanhduyofficial/ui/components/button";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useState } from "react";
import { TfiMenu } from "react-icons/tfi";
import { IoMdClose } from "react-icons/io";

export default function Header() {
  const t = useTranslations("Header");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header className="fixed inset-0 z-50 w-full max-w-7xl mx-auto h-16 px-4 lg:mt-4 lg:px-16 flex justify-between items-center bg-background lg:rounded-2xl">
      <Badge variant="secondary" className="drop-shadow">
        <div className="w-2.5 h-2.5 bg-emerald-500 rounded-full" />{" "}
        {t("availableForNewProject")}
      </Badge>
      <div className="relative lg:hidden">
        <Button
          variant="outline"
          size="icon-lg"
          onClick={() => setIsMenuOpen((v) => !v)}
        >
          {isMenuOpen ? <IoMdClose /> : <TfiMenu />}
        </Button>
        {isMenuOpen && (
          <div className="absolute top-full right-0 z-50 p-4 mt-4 flex flex-col items-center gap-4 bg-background/80 backdrop-blur-xl rounded-3xl border border-gray-200 shadow-2xl">
            <Link href="#work">{t("work")}</Link>
            <Link href="#service">{t("service")}</Link>
            <Button
              nativeButton={false}
              render={<Link href="/contact">{t("let'sTalk")}</Link>}
            />
          </div>
        )}
      </div>

      {/* MD responsive */}
      <Link href="#work" className="hidden lg:block">
        {t("work")}
      </Link>
      <Link href="#service" className="hidden lg:block">
        {t("service")}
      </Link>
      <Button
        nativeButton={false}
        className="hidden lg:flex"
        render={<Link href="/contact">{t("let'sTalk")}</Link>}
      />
    </header>
  );
}
