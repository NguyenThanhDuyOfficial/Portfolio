import ContactSection from "@/src/components/ContactSection";
import { Button } from "@nguyenthanhduyofficial/ui/components/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@nguyenthanhduyofficial/ui/components/card";
import Link from "next/link";
import { FaCheckCircle } from "react-icons/fa";

export type PricingPlan = {
  tag: string;
  title: string;
  description: string;
  price: string;

  url: string;
  keyFeatures: string[];
  time: string;
  warranty: string;
  highlighted?: boolean;
};

export const pricings = [
  {
    tag: "One-Day",
    title: "Website Tune-Up",
    description:
      "Fix small website issues and updates done – fast, clean, and within a fixed scope.",
    price: "$99",
    priceNote: "fixed price (up to 8 hours of work)",
    time: "1 business day from kickoff",
    url: "/contact?plan=tune-up",
    inlcuded: [
      "Review the existing website and requested changes",
      "Handle small updates, fixes, or improvements within scope",
      "Update content, layout, styling, forms",
      "Fix minor frontend or issues where feasible",
      "Fix deployment issues on Vercel or similar platforms",
      "Confirm completed work and flag out-of-scope items",
      "Provide next-step recommendations if additional work is needed",
    ],
    notIncluded: [
      "Full redesign or rebranding",
      "Building new pages from scratch beyond minor additions",
      "Major architecture changes, migrations, or platform rebuilds",
      "Ongoing support after delivery",
    ],
    deliverables: [
      "Completed updates or fixes within scope",
      "Short summary of what was done",
      "Next-step recommendation (if broader work is needed)",
    ],
  },
  {
    tag: "Standard",
    title: "Small Web",
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
