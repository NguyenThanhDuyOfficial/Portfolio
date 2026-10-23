import { IconType } from "react-icons/lib";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiGithub,
  SiPnpm,
  SiTurborepo,
  SiTypescript,
  SiEslint,
  SiPrettier,
  SiCommitlint,
  SiPostgresql,
  SiPrisma,
  SiZod,
  SiLucide,
  SiShadcnui,
  SiVitest,
  SiDocker,
  SiGithubactions,
  SiVercel,
  SiSupabase,
  SiNestjs,
  SiJsonwebtokens,
  SiDrizzle,
  SiBetterauth,
  SiSimpleicons,
  SiHyprland,
  SiArchlinux,
  SiGnubash,
  SiAlacritty,
} from "react-icons/si";
import { CiPenpot } from "react-icons/ci";
import { LuListChecks, LuBox } from "react-icons/lu";

export interface Product {
  slug: string;
  title: string;
  description?: string;
  price?: string;
  demoUrl?: string;
  githubUrl?: string;
  timeline?: string;
  tags?: string[];
  techs: { title: string; icon: IconType; url: string; color: string }[];
  images: string[];
}

export const products: Product[] = [
  {
    slug: "joli",
    title: "Joli - Home Fragrance and Personal Care",
    description:
      "Joli is an e-commerce platform dedicated to home fragrance and personal care.",
    price: "3tr",
    demoUrl: "joli-nguyenthanhhduyofficial.vercel.app",
    githubUrl: "https://github.com/NguyenThanhDuyOfficial/Joli",
    timeline: "01/2024 - 03/2024",
    tags: ["Ecommerce"],
    techs: [
      {
        title: "GitHub",
        icon: SiGithub,
        url: "https://github.com",
        color: "#24292e",
      },
      {
        title: "pnpm",
        icon: SiPnpm,
        url: "https://pnpm.io",
        color: "#F69220",
      },
      {
        title: "Turborepo",
        icon: SiTurborepo,
        url: "https://turbo.build",
        color: "#EF4444",
      },
      {
        title: "TypeScript",
        icon: SiTypescript,
        url: "https://www.typescriptlang.org",
        color: "#3178C6",
      },
      {
        title: "ESLint",
        icon: SiEslint,
        url: "https://eslint.org",
        color: "#4B32C3",
      },
      {
        title: "Prettier",
        icon: SiPrettier,
        url: "https://prettier.io",
        color: "#F7B93E",
      },
      {
        title: "lint-staged",
        icon: LuListChecks,
        url: "https://github.com/lint-staged/lint-staged",
        color: "#F43F5E",
      },
      {
        title: "Commitlint",
        icon: SiCommitlint,
        url: "https://commitlint.js.org",
        color: "#E11D48",
      },
      {
        title: "Plop",
        icon: LuBox,
        url: "https://plopjs.com",
        color: "#8B5CF6",
      },
      {
        title: "Penpot",
        icon: CiPenpot,
        url: "https://penpot.app",
        color: "#000000",
      },

      {
        title: "PostgreSQL",
        icon: SiPostgresql,
        url: "https://www.postgresql.org",
        color: "#4169E1",
      },
      {
        title: "Prisma",
        icon: SiPrisma,
        url: "https://www.prisma.io",
        color: "#2D3748",
      },

      {
        title: "Next.js",
        icon: SiNextdotjs,
        url: "https://nextjs.org",
        color: "#000000",
      },
      {
        title: "Zod",
        icon: SiZod,
        url: "https://zod.dev",
        color: "#408AFF",
      },
      {
        title: "Lucide",
        icon: SiLucide,
        url: "https://lucide.dev",
        color: "#F56565",
      },
      {
        title: "TailwindCSS",
        icon: SiTailwindcss,
        url: "https://tailwindcss.com",
        color: "#38BDF8",
      },
      {
        title: "shadcn/ui",
        icon: SiShadcnui,
        url: "https://ui.shadcn.com",
        color: "#000000",
      },

      {
        title: "Vitest",
        icon: SiVitest,
        url: "https://vitest.dev",
        color: "#FCC72B",
      },

      {
        title: "Docker",
        icon: SiDocker,
        url: "https://www.docker.com",
        color: "#2496ED",
      },
      {
        title: "GitHub Actions",
        icon: SiGithubactions,
        url: "https://github.com/features/actions",
        color: "#2088FF",
      },
      {
        title: "Vercel",
        icon: SiVercel,
        url: "https://vercel.com",
        color: "#000000",
      },
      {
        title: "Supabase",
        icon: SiSupabase,
        url: "https://supabase.com",
        color: "#3ECF8E",
      },
    ],
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
    techs: [
      {
        title: "Next.js",
        icon: SiNextdotjs,
        url: "https://nextjs.org",
        color: "#000000",
      },
      {
        title: "TypeScript",
        icon: SiTypescript,
        url: "https://www.typescriptlang.org",
        color: "#3178C6",
      },
      {
        title: "TailwindCSS",
        icon: SiTailwindcss,
        url: "https://tailwindcss.com",
        color: "#38BDF8",
      },
      {
        title: "Lucide",
        icon: SiLucide,
        url: "https://lucide.dev",
        color: "#F56565",
      },
      {
        title: "NestJS",
        icon: SiNestjs,
        url: "https://nestjs.com",
        color: "#E0234E",
      },
      {
        title: "Prisma",
        icon: SiPrisma,
        url: "https://www.prisma.io",
        color: "#2D3748",
      },
      {
        title: "PostgreSQL",
        icon: SiPostgresql,
        url: "https://www.postgresql.org",
        color: "#4169E1",
      },
      {
        title: "JWT",
        icon: SiJsonwebtokens,
        url: "https://jwt.io",
        color: "#000000",
      },
      {
        title: "Zod",
        icon: SiZod,
        url: "https://zod.dev",
        color: "#408AFF",
      },
      {
        title: "Vercel",
        icon: SiVercel,
        url: "https://vercel.com",
        color: "#000000",
      },
      {
        title: "Supabase",
        icon: SiSupabase,
        url: "https://supabase.com",
        color: "#3ECF8E",
      },
      {
        title: "Docker",
        icon: SiDocker,
        url: "https://www.docker.com",
        color: "#2496ED",
      },
    ],
    images: ["/products/car.png"],
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
    techs: [
      {
        title: "GitHub",
        icon: SiGithub,
        url: "https://github.com",
        color: "#24292e",
      },
      {
        title: "pnpm",
        icon: SiPnpm,
        url: "https://pnpm.io",
        color: "#F69220",
      },
      {
        title: "Turborepo",
        icon: SiTurborepo,
        url: "https://turbo.build",
        color: "#EF4444",
      },
      {
        title: "TypeScript",
        icon: SiTypescript,
        url: "https://www.typescriptlang.org",
        color: "#3178C6",
      },
      {
        title: "ESLint",
        icon: SiEslint,
        url: "https://eslint.org",
        color: "#4B32C3",
      },
      {
        title: "Prettier",
        icon: SiPrettier,
        url: "https://prettier.io",
        color: "#F7B93E",
      },
      {
        title: "lint-staged",
        icon: LuListChecks,
        url: "https://github.com/lint-staged/lint-staged",
        color: "#F43F5E",
      },
      {
        title: "Commitlint",
        icon: SiCommitlint,
        url: "https://commitlint.js.org",
        color: "#E11D48",
      },
      {
        title: "Plop",
        icon: LuBox,
        url: "https://plopjs.com",
        color: "#8B5CF6",
      },
      {
        title: "PostgreSQL",
        icon: SiPostgresql,
        url: "https://www.postgresql.org",
        color: "#4169E1",
      },
      {
        title: "Drizzle",
        icon: SiDrizzle,
        url: "https://orm.drizzle.team",
        color: "#C5F74F",
      },
      {
        title: "Next.js",
        icon: SiNextdotjs,
        url: "https://nextjs.org",
        color: "#000000",
      },
      {
        title: "JWT",
        icon: SiJsonwebtokens,
        url: "https://jwt.io",
        color: "#000000",
      },
      {
        title: "better-auth",
        icon: SiBetterauth,
        url: "https://better-auth.com",
        color: "#6366F1",
      },
      {
        title: "Zod",
        icon: SiZod,
        url: "https://zod.dev",
        color: "#408AFF",
      },
      {
        title: "Lucide",
        icon: SiLucide,
        url: "https://lucide.dev",
        color: "#F56565",
      },
      {
        title: "simple-icons",
        icon: SiSimpleicons,
        url: "https://simpleicons.org",
        color: "#111111",
      },
      {
        title: "Vitest",
        icon: SiVitest,
        url: "https://vitest.dev",
        color: "#FCC72B",
      },
      {
        title: "Docker",
        icon: SiDocker,
        url: "https://www.docker.com",
        color: "#2496ED",
      },
      {
        title: "GitHub Actions",
        icon: SiGithubactions,
        url: "https://github.com/features/actions",
        color: "#2088FF",
      },
    ],
    images: ["/products/odyssey.png"],
  },
  {
    slug: "dotfile",
    title: "Dotfile - Arch/Hypr Linux Custom Desktop Environment",
    description: "",
    tags: ["Dotfile"],
    demoUrl: "",
    githubUrl: "",
    timeline: "01/2024 - 03/2024",
    techs: [
      {
        title: "Hyprland",
        icon: SiHyprland,
        url: "https://hyprland.org",
        color: "#58E1FF",
      },
      {
        title: "Arch Linux",
        icon: SiArchlinux,
        url: "https://archlinux.org",
        color: "#1793D1",
      },
      {
        title: "Bash",
        icon: SiGnubash,
        url: "https://www.gnu.org/software/bash",
        color: "#4EAA25",
      },
      {
        title: "Alacritty",
        icon: SiAlacritty,
        url: "https://alacritty.org",
        color: "#F46D01",
      },
    ],
    images: ["/products/dotfile.png"],
  },
];
