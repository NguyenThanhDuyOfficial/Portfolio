import ContactSection from "@/src/components/ContactSection";
import { pricings } from "@/src/data/pricings";
import { Button } from "@nguyenthanhduyofficial/ui/components/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@nguyenthanhduyofficial/ui/components/card";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { FaCheckCircle } from "react-icons/fa";
import { IoCloseCircle } from "react-icons/io5";
import { GoDotFill } from "react-icons/go";

export default function Service() {
  const t = useTranslations("Service");

  return (
    <main className="pt-20 space-y-8">
      <div className="w-full max-w-7xl mx-auto px-4 lg:px-16">
        <div className="relative pb-8 flex flex-col items-center">
          <p className="text-4xl lg:text-[100px] text-foreground/20">PRICING</p>
          <div className="absolute top-4 lg:bottom-8 left-0 w-full flex justify-between items-end">
            <p className="text-xl lg:text-5xl font-medium">/PRICING</p>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {pricings.map((pricing) => (
            <Card key={pricing.id} className="p-4 text-foreground bg-muted">
              <CardHeader className="bg-white p-4 rounded-lg space-y-2">
                <div>
                  <CardTitle className="text-2xl ">
                    {t(`${pricing.id}.title`)}
                  </CardTitle>
                  <CardDescription>
                    {t(`${pricing.id}.description`)}
                  </CardDescription>
                </div>
                <p className="text-3xl text-medium">{pricing.price}</p>
                <p className="text-muted-foreground">
                  {t(`${pricing.id}.priceNote`)}
                </p>
                <Button
                  variant={pricing.highlighted ? "default" : "secondary"}
                  nativeButton={false}
                  render={<Link href={pricing.url}>{t("getStarted")}</Link>}
                />
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-muted-foreground">{t("included")}</p>
                <div>
                  {pricing.includedKeys.map((feature, index) => (
                    <div
                      key={index}
                      className="flex gap-4 items-center font-medium"
                    >
                      <FaCheckCircle className="w-4 h-4 shrink-0" />{" "}
                      <p>{t(`${pricing.id}.included.${feature}`)}</p>
                    </div>
                  ))}
                </div>

                <p className="text-muted-foreground">{t("notIncluded")}</p>
                <div>
                  {pricing.notIncludedKeys.map((feature, index) => (
                    <div
                      key={index}
                      className="flex gap-4 items-center font-medium"
                    >
                      <IoCloseCircle className="w-4 h-4 shrink-0" />{" "}
                      <p>{t(`${pricing.id}.notIncluded.${feature}`)}</p>
                    </div>
                  ))}
                </div>

                <p className="text-muted-foreground">{t("deliverables")}</p>
                <div>
                  {pricing.deliverableKeys.map((feature, index) => (
                    <div
                      key={index}
                      className="flex gap-4 items-center font-medium"
                    >
                      <GoDotFill className="w-4 h-4 shrink-0" />{" "}
                      <p>{t(`${pricing.id}.deliverables.${feature}`)}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      <ContactSection />
    </main>
  );
}
