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
export interface ProductOutput {
  title: string;
  description: string;
  tags: {
    name: string;
    id: string;
  }[];
  techs: Tech[];
  id: string;
  slug: string;
  price?: string;
  demoUrl?: string;
  githubUrl?: string;
  images?: Image[];
}
export function getProductBySlug(
  slug: string,
  locale: string,
): ProductOutput | null {
  const product = products.find((p) => p.slug === slug);
  if (!product) return null;

  const translation = productTranslations.find(
    (t) => t.productId === product.id && t.locale === locale,
  );
  if (!translation) return null;

  const productTagIds = productTags
    .filter((pt) => pt.productId === product.id)
    .map((pt) => pt.tagId);

  const productTagList = productTagIds
    .map((tagId) => {
      const tag = tags.find((t) => t.id === tagId);
      if (!tag) return null;
      const tagTrans = tagTranslations.find(
        (tt) => tt.tagId === tagId && tt.locale === locale,
      );
      return { ...tag, name: tagTrans?.name ?? tag.name };
    })
    .filter((t): t is NonNullable<typeof t> => t !== null);

  const productTechIds = productTechs
    .filter((pt) => pt.productId === product.id)
    .map((pt) => pt.techId);

  const productTechList = productTechIds
    .map((techId) => techs.find((t) => t.id === techId))
    .filter((t): t is NonNullable<typeof t> => t !== null);

  return {
    ...product,
    title: translation.title,
    description: translation.description,
    tags: productTagList,
    techs: productTechList,
  };
}

export function getAllProducts(locale: string) {
  return products
    .map((p) => getProductBySlug(p.slug, locale))
    .filter((p): p is NonNullable<typeof p> => p !== null);
}
export function getProductsBySlugs(slugs: string[], locale: string) {
  return slugs
    .map((slug) => getProductBySlug(slug, locale))
    .filter((p): p is NonNullable<typeof p> => p !== null);
}

export interface Product {
  id: string;
  slug: string;
  price?: string;
  demoUrl?: string;
  githubUrl?: string;
  images?: Image[];
}

export interface Image {
  imageUrl: string;
  alt?: string;
}

export interface Tag {
  id: string;
  name: string;
}
export interface TagTranslation {
  tagId: string;
  locale: string;
  name: string;
}
export interface ProductTag {
  tagId: string;
  productId: string;
}

export interface Tech {
  id: string;
  name: string;
  icon: IconType;
  url: string;
  color: string;
}
export interface ProductTech {
  productId: string;
  techId: string;
}

export interface ProductTranslation {
  productId: string;
  locale: string;
  title: string;
  description: string;
}

export const products: Product[] = [
  {
    id: "p1",
    slug: "joli",
    price: "3tr",
    demoUrl: "https://joli-nguyenthanhduyofficial.vercel.app",
    githubUrl: "https://github.com/NguyenThanhDuyOfficial/Joli",
    images: [{ imageUrl: "/products/joli.png" }],
  },
  {
    id: "p2",
    slug: "car",
    price: "7tr",
    demoUrl: "",
    githubUrl: "",
    images: [{ imageUrl: "/products/car.png" }],
  },
  {
    id: "p3",
    slug: "odyssey",
    price: "3tr",
    demoUrl: "",
    githubUrl: "",
    images: [{ imageUrl: "/products/odyssey.png" }],
  },
  {
    id: "p4",
    slug: "dotfile",
    demoUrl: "",
    githubUrl: "",
    images: [{ imageUrl: "/products/dotfile.png" }],
  },
];

export const productTranslations: ProductTranslation[] = [
  {
    productId: "p1",
    locale: "vi",
    title: "Joli - Nước hoa và chăm sóc cá nhân",
    description:
      "Joli là nền tảng thương mại điện tử chuyên về nước hoa và sản phẩm chăm sóc cá nhân.",
  },
  {
    productId: "p2",
    locale: "vi",
    title: "Car - Nền tảng cho thuê xe",
    description:
      "Car là nền tảng đặt lịch thuê xe với quản lý xe và đặt chỗ trực tuyến.",
  },
  {
    productId: "p3",
    locale: "vi",
    title: "Odyssey - Website cộng đồng học tập",
    description:
      "Odyssey là website cộng đồng học tập bao gồm blog và các trang landing page.",
  },
  {
    productId: "p4",
    locale: "vi",
    title: "Dotfile - Môi trường desktop tùy biến Arch/Hypr Linux",
    description:
      "Bộ dotfile cá nhân cho Arch Linux + Hyprland của tôi, dùng để tùy biến môi trường desktop.",
  },

  {
    productId: "p1",
    locale: "en",
    title: "Joli - Home Fragrance and Personal Care",
    description:
      "Joli is an e-commerce platform dedicated to home fragrance and personal care.",
  },
  {
    productId: "p2",
    locale: "en",
    title: "Car - Car Rental Platform",
    description:
      "Car is a car rental booking platform with vehicle management and online reservations.",
  },
  {
    productId: "p3",
    locale: "en",
    title: "Odyssey - Learn Community Website",
    description:
      "Odyssey is a learning community website featuring blog and landing pages.",
  },
  {
    productId: "p4",
    locale: "en",
    title: "Dotfile - Arch/Hypr Linux Custom Desktop Environment",
    description:
      "My personal Arch Linux + Hyprland dotfiles for a customized desktop environment.",
  },
];
export const productTags: ProductTag[] = [
  { productId: "p1", tagId: "ecommerce" },
  { productId: "p2", tagId: "booking" },
  { productId: "p3", tagId: "blog" },
  { productId: "p3", tagId: "landingPage" },
  { productId: "p4", tagId: "dotfile" },
];

export const productTechs: ProductTech[] = [
  // Joli (p1)
  { productId: "p1", techId: "github" },
  { productId: "p1", techId: "pnpm" },
  { productId: "p1", techId: "turborepo" },
  { productId: "p1", techId: "typescript" },
  { productId: "p1", techId: "eslint" },
  { productId: "p1", techId: "prettier" },
  { productId: "p1", techId: "lint-staged" },
  { productId: "p1", techId: "commitlint" },
  { productId: "p1", techId: "plop" },
  { productId: "p1", techId: "penpot" },
  { productId: "p1", techId: "postgresql" },
  { productId: "p1", techId: "prisma" },
  { productId: "p1", techId: "nextjs" },
  { productId: "p1", techId: "zod" },
  { productId: "p1", techId: "lucide" },
  { productId: "p1", techId: "tailwindcss" },
  { productId: "p1", techId: "shadcn" },
  { productId: "p1", techId: "vitest" },
  { productId: "p1", techId: "docker" },
  { productId: "p1", techId: "github-actions" },
  { productId: "p1", techId: "vercel" },
  { productId: "p1", techId: "supabase" },

  // Car (p2)
  { productId: "p2", techId: "nextjs" },
  { productId: "p2", techId: "typescript" },
  { productId: "p2", techId: "tailwindcss" },
  { productId: "p2", techId: "lucide" },
  { productId: "p2", techId: "nestjs" },
  { productId: "p2", techId: "prisma" },
  { productId: "p2", techId: "postgresql" },
  { productId: "p2", techId: "jwt" },
  { productId: "p2", techId: "zod" },
  { productId: "p2", techId: "vercel" },
  { productId: "p2", techId: "supabase" },
  { productId: "p2", techId: "docker" },

  // Odyssey (p3)
  { productId: "p3", techId: "github" },
  { productId: "p3", techId: "pnpm" },
  { productId: "p3", techId: "turborepo" },
  { productId: "p3", techId: "typescript" },
  { productId: "p3", techId: "eslint" },
  { productId: "p3", techId: "prettier" },
  { productId: "p3", techId: "lint-staged" },
  { productId: "p3", techId: "commitlint" },
  { productId: "p3", techId: "plop" },
  { productId: "p3", techId: "postgresql" },
  { productId: "p3", techId: "drizzle" },
  { productId: "p3", techId: "nextjs" },
  { productId: "p3", techId: "jwt" },
  { productId: "p3", techId: "better-auth" },
  { productId: "p3", techId: "zod" },
  { productId: "p3", techId: "lucide" },
  { productId: "p3", techId: "simple-icons" },
  { productId: "p3", techId: "vitest" },
  { productId: "p3", techId: "docker" },
  { productId: "p3", techId: "github-actions" },

  // Dotfile (p4)
  { productId: "p4", techId: "hyprland" },
  { productId: "p4", techId: "archlinux" },
  { productId: "p4", techId: "bash" },
  { productId: "p4", techId: "alacritty" },
];

export const tags: Tag[] = [
  { id: "ecommerce", name: "ecommerce" },
  { id: "booking", name: "booking" },
  { id: "blog", name: "blog" },
  { id: "landingPage", name: "landingPage" },
  { id: "dotfile", name: "dotfile" },
];

export const tagTranslations: TagTranslation[] = [
  { tagId: "ecommerce", locale: "vi", name: "Thương mại điện tử" },
  { tagId: "ecommerce", locale: "en", name: "E-commerce" },
  { tagId: "booking", locale: "vi", name: "Đặt lịch" },
  { tagId: "booking", locale: "en", name: "Booking" },
  { tagId: "blog", locale: "vi", name: "Blog" },
  { tagId: "blog", locale: "en", name: "Blog" },
  { tagId: "landingPage", locale: "vi", name: "Landing Page" },
  { tagId: "landingPage", locale: "en", name: "Landing Page" },
  { tagId: "dotfile", locale: "vi", name: "Dotfile" },
  { tagId: "dotfile", locale: "en", name: "Dotfile" },
];

export const techs: Tech[] = [
  {
    id: "github",
    name: "GitHub",
    icon: SiGithub,
    url: "https://github.com",
    color: "#24292e",
  },
  {
    id: "pnpm",
    name: "pnpm",
    icon: SiPnpm,
    url: "https://pnpm.io",
    color: "#F69220",
  },
  {
    id: "turborepo",
    name: "Turborepo",
    icon: SiTurborepo,
    url: "https://turbo.build",
    color: "#EF4444",
  },
  {
    id: "typescript",
    name: "TypeScript",
    icon: SiTypescript,
    url: "https://www.typescriptlang.org",
    color: "#3178C6",
  },
  {
    id: "eslint",
    name: "ESLint",
    icon: SiEslint,
    url: "https://eslint.org",
    color: "#4B32C3",
  },
  {
    id: "prettier",
    name: "Prettier",
    icon: SiPrettier,
    url: "https://prettier.io",
    color: "#F7B93E",
  },
  {
    id: "lint-staged",
    name: "lint-staged",
    icon: LuListChecks,
    url: "https://github.com/lint-staged/lint-staged",
    color: "#F43F5E",
  },
  {
    id: "commitlint",
    name: "Commitlint",
    icon: SiCommitlint,
    url: "https://commitlint.js.org",
    color: "#E11D48",
  },
  {
    id: "plop",
    name: "Plop",
    icon: LuBox,
    url: "https://plopjs.com",
    color: "#8B5CF6",
  },
  {
    id: "penpot",
    name: "Penpot",
    icon: CiPenpot,
    url: "https://penpot.app",
    color: "#000000",
  },
  {
    id: "postgresql",
    name: "PostgreSQL",
    icon: SiPostgresql,
    url: "https://www.postgresql.org",
    color: "#4169E1",
  },
  {
    id: "prisma",
    name: "Prisma",
    icon: SiPrisma,
    url: "https://www.prisma.io",
    color: "#2D3748",
  },
  {
    id: "nextjs",
    name: "Next.js",
    icon: SiNextdotjs,
    url: "https://nextjs.org",
    color: "#000000",
  },
  {
    id: "zod",
    name: "Zod",
    icon: SiZod,
    url: "https://zod.dev",
    color: "#408AFF",
  },
  {
    id: "lucide",
    name: "Lucide",
    icon: SiLucide,
    url: "https://lucide.dev",
    color: "#F56565",
  },
  {
    id: "tailwindcss",
    name: "TailwindCSS",
    icon: SiTailwindcss,
    url: "https://tailwindcss.com",
    color: "#38BDF8",
  },
  {
    id: "shadcn",
    name: "shadcn/ui",
    icon: SiShadcnui,
    url: "https://ui.shadcn.com",
    color: "#000000",
  },
  {
    id: "vitest",
    name: "Vitest",
    icon: SiVitest,
    url: "https://vitest.dev",
    color: "#FCC72B",
  },
  {
    id: "docker",
    name: "Docker",
    icon: SiDocker,
    url: "https://www.docker.com",
    color: "#2496ED",
  },
  {
    id: "github-actions",
    name: "GitHub Actions",
    icon: SiGithubactions,
    url: "https://github.com/features/actions",
    color: "#2088FF",
  },
  {
    id: "vercel",
    name: "Vercel",
    icon: SiVercel,
    url: "https://vercel.com",
    color: "#000000",
  },
  {
    id: "supabase",
    name: "Supabase",
    icon: SiSupabase,
    url: "https://supabase.com",
    color: "#3ECF8E",
  },
  {
    id: "nestjs",
    name: "NestJS",
    icon: SiNestjs,
    url: "https://nestjs.com",
    color: "#E0234E",
  },
  {
    id: "jwt",
    name: "JWT",
    icon: SiJsonwebtokens,
    url: "https://jwt.io",
    color: "#000000",
  },
  {
    id: "drizzle",
    name: "Drizzle",
    icon: SiDrizzle,
    url: "https://orm.drizzle.team",
    color: "#C5F74F",
  },
  {
    id: "better-auth",
    name: "better-auth",
    icon: SiBetterauth,
    url: "https://better-auth.com",
    color: "#6366F1",
  },
  {
    id: "simple-icons",
    name: "simple-icons",
    icon: SiSimpleicons,
    url: "https://simpleicons.org",
    color: "#111111",
  },
  {
    id: "hyprland",
    name: "Hyprland",
    icon: SiHyprland,
    url: "https://hyprland.org",
    color: "#58E1FF",
  },
  {
    id: "archlinux",
    name: "Arch Linux",
    icon: SiArchlinux,
    url: "https://archlinux.org",
    color: "#1793D1",
  },
  {
    id: "bash",
    name: "Bash",
    icon: SiGnubash,
    url: "https://www.gnu.org/software/bash",
    color: "#4EAA25",
  },
  {
    id: "alacritty",
    name: "Alacritty",
    icon: SiAlacritty,
    url: "https://alacritty.org",
    color: "#F46D01",
  },
];
