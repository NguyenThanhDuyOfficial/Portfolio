import ContactSection from "@/src/components/ContactSection";
import { Button } from "@nguyenthanhduyofficial/ui/components/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@nguyenthanhduyofficial/ui/components/card";
import Link from "next/link";
import { FaCheckCircle } from "react-icons/fa";

export type PricingPlan = {
  title: string;
  description: string;
  price: string;
  url: string;
  keyFeatures: string[];
  time: string;
  warranty: string;
  highlighted?: boolean;
};

export const pricings: PricingPlan[] = [
  {
    title: "Landing Page",
    description:
      "Best for individuals, freelancers, or small shops needing a single page to launch a product or capture leads.",
    price: "2,500,000₫",
    url: "/contact?plan=landing",
    keyFeatures: [
      "One-page site, up to 6 sections",
      "Fully responsive (mobile / tablet / desktop)",
      "Contact form (email or Google Sheets)",
      "CTA buttons + social links (Zalo / Messenger)",
      "Basic SEO (title, meta, alt, Open Graph)",
      "Basic performance optimization + deploy (Vercel / Netlify)",
      "2 revision rounds + source code handoff",
    ],
    time: "5–7 days",
    warranty: "30-day bug fix",
  },
  {
    title: "Small Business Website",
    description:
      "Best for small businesses, studios, or service providers needing a multi-page site they can update themselves.",
    price: "6,000,000₫",
    url: "/contact?plan=web",
    keyFeatures: [
      "3–5 pages (Home, About, Services, Contact, optional Blog)",
      "Fully responsive",
      "Basic CMS (Sanity / Strapi / headless WordPress)",
      "Contact form + thank-you page",
      "Per-page SEO, sitemap, robots.txt, GA4",
      "Deploy + short admin guide",
      "2–3 revision rounds + source code + docs",
    ],
    time: "7–14 days",
    warranty: "30-day bug fix + 1-month support",
    highlighted: true,
  },
  {
    title: "Custom Web App",
    description:
      "Best for projects needing dynamic features: dashboard, order management, auth, CRUD, or API integrations.",
    price: "15,000,000₫",
    url: "/contact?plan=custom",
    keyFeatures: [
      "Scope defined by brief (screens + features)",
      "Basic auth (signup / login, simple roles)",
      "CRUD for 2–3 core entities",
      "Dashboard, lists, filters, pagination",
      "1–2 third-party API integrations (payment, email, maps…)",
      "Database + backend API",
      "Deploy + env vars + basic backup",
      "2–3 revisions per milestone + setup docs",
    ],
    time: "2–6 weeks",
    warranty: "30–60 day bug fix",
  },
];

export default function Service() {
  return (
    <main className="pt-20">
      <div className="w-full max-w-7xl mx-auto px-4 lg:px-16">
        <div className="relative pb-8 flex flex-col items-center">
          <p className="text-4xl lg:text-[100px] text-foreground/20">PRICING</p>
          <div className="absolute top-4 lg:bottom-8 left-0 w-full flex justify-between items-end">
            <p className="text-xl lg:text-5xl font-medium">/PRICING</p>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {pricings.map((pricing) => (
            <Card key={pricing.title} className="p-4 text--foreground bg-muted">
              <CardHeader className="bg-white p-4 rounded-lg space-y-2">
                <div>
                  <CardTitle className="text-2xl ">{pricing.title}</CardTitle>
                  <CardDescription>{pricing.description}</CardDescription>
                </div>
                <p className="text-3xl text-medium">{pricing.price}</p>
                <Button
                  variant={pricing.highlighted ? "default" : "secondary"}
                  nativeButton={false}
                  render={<Link href={pricing.url}>Get Started</Link>}
                />
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-muted-foreground">Key Features:</p>
                <div>
                  {pricing.keyFeatures.map((feature, index) => (
                    <div
                      key={index}
                      className="flex gap-4 items-center font-medium"
                    >
                      <FaCheckCircle className="w-4 h-4 shrink-0" />{" "}
                      <p className="line-clamp-1">{feature}</p>
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
