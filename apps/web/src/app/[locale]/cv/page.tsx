import { getTranslations } from "next-intl/server";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { FaEarthAsia } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import { FaUser } from "react-icons/fa";
import "../../../styles/cv.css";
import { roboto } from "@/src/fonts/fonts";

const skills = ["frontend", "backend", "others"] as const;
const projects = [
  { key: "joli", bulletPoints: [1, 2], links: ["live", "github"] },
  { key: "odyssey", bulletPoints: [1, 2], links: ["live", "github"] },
  { key: "car", bulletPoints: [1, 2], links: ["github"] },
];
const guideVisible = false;
const guides = [
  {
    key: "book",
    items: [
      "Fundamentals of Software Architecture",
      "Software Requirements",
      "The Design of Everyday Things",
      "The Pragmatic Programmer",
      "Introduction to Algorithms",
      "Designing Data Intensive Applications",
      "Practical Vim",
      "The Software Architect Elevator",
    ],
  },
  {
    key: "youtube",
    items: [
      { title: "FreeCodeCamp", link: "https://www.youtube.com/@freecodecamp" },
      { title: "Bro Code", link: "https://www.youtube.com/@BroCodez" },
      {
        title: "JavaScript Mastery",
        link: "https://www.youtube.com/@javascriptmastery",
      },
      { title: "Fireship", link: "https://www.youtube.com/@Fireship" },
      {
        title: "The PrimeTime",
        link: "https://www.youtube.com/@ThePrimeTimeagen",
      },
    ],
  },
  {
    key: "document",
    items: [
      { title: "Next.js", link: "https://nextjs.org/" },
      { title: "NestJS", link: "https://nestjs.com/" },
      { title: "MDN Web Docs", link: "https://developer.mozilla.org/en-US/" },
      { title: "TypeScript", link: "https://www.typescriptlang.org/" },
      { title: "TailwindCSS", link: "https://tailwindcss.com/" },
      { title: "Prisma", link: "https://www.prisma.io/" },
      { title: "Shadcn UI", link: "https://ui.shadcn.com/" },
    ],
  },
];
export default async function CV({
  searchParams,
}: {
  searchParams: Promise<{
    role: string | undefined;
    frontend: string | undefined;
    backend: string | undefined;
    others: string | undefined;
  }>;
}) {
  const {
    role = "Full-stack Developer",
    frontend,
    backend,
    others,
  } = await searchParams;
  const skillsParams = { frontend, backend, others };
  const t = await getTranslations("CV");
  return (
    <main className={`${roboto.className} space-y-4`}>
      <section id="header" className="flex justify-between items-center">
        <div>
          <h1>NGUYỄN THÀNH DUY</h1>
          <div>
            <div className="flex items-center gap-1">
              <FaUser /> <p>Contact:</p>
              <a href="https://zalo.me/0823564241">0823 564 241</a> | HCM | 2004
            </div>
            <div className="flex items-center gap-1">
              <SiGmail /> <p>Gmail:</p>
              <a href="mailto:nguyenthanhduyofficial@gmail.com">
                nguyenthanhduyofficial@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-1">
              <FaEarthAsia /> <p>Portfolio:</p>
              <a href="https://nguyenthanhduyofficial.vercel.app">
                nguyenthanhduyofficial.vercel.app
              </a>
            </div>
            <div className="flex items-center gap-1">
              <FaGithub /> <p>Github:</p>
              <a href="https://github.com/NguyenThanhDuyOfficial">
                github.com/NguyenThanhDuyOfficial
              </a>
            </div>
          </div>
        </div>
        <div className="relative w-[40mm] h-[40mm]">
          <Image
            src="/QR.png"
            alt="avatar"
            fill
            sizes="100vw, 100vh"
            className="object-cover"
          />
        </div>
      </section>
      <section>
        <h2 className="">{t("summary.title")}</h2>
        <p className="">
          {t.rich("summary.description", {
            role: role,
            b: (chunks) => <b>{chunks}</b>,
          })}
        </p>
      </section>
      <section>
        <h2>{t("skills.title")}</h2>
        {skills.map((skill) => {
          const value = skillsParams[skill];
          return (
            <p key={skill}>
              <b>{t(`skills.${skill}.title`)}:</b>{" "}
              {t(`skills.${skill}.description`)}
              {value}
            </p>
          );
        })}
      </section>
      <section>
        <h2>{t("projects.title")}</h2>
        <div className="space-y-2">
          {projects.map((project) => (
            <div key={project.key} className="space-y-2">
              <div className="flex items-center gap-2">
                <h3>{t(`projects.${project.key}.title`)}</h3>
                {project.links.map((link) => (
                  <div key={link} className="flex gap-1">
                    <span>|</span>
                    <div className="flex items-center gap-1 text-sm">
                      {link === "github" ? (
                        <>
                          <FaGithub />
                          <p>Github:</p>
                        </>
                      ) : (
                        <>
                          <FaEarthAsia />
                          <p>Live:</p>
                        </>
                      )}
                      <a
                        href={
                          "https://" +
                          t(`projects.${project.key}.links.${link}`)
                        }
                      >
                        {t(`projects.${project.key}.links.${link}`)}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
              <ul>
                {project.bulletPoints.map((key) => (
                  <li key={key}>
                    {t.rich(`projects.${project.key}.bulletPoints.${key}`, {
                      b: (chunks) => <b>{chunks}</b>,
                    })}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
      {guideVisible && (
        <section>
          <h2>{t("guide.title")}</h2>
          <div className="space-y-2">
            {guides.map((guide) => (
              <div key={guide.key} className="space-y-1">
                <h3>{t(`guide.${guide.key}`)}</h3>
                <ul>
                  {guide.items.map((item, index) => (
                    <li key={index}>
                      {typeof item === "string" ? (
                        item
                      ) : (
                        <a href={item.link}>{item.title}</a>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div className="space-y-1">
              <h3>{t("guide.learn")}</h3>
              <p>
                Khi mà em cần phải học về công nghệ mới, thì em sẽ học thông qua
                các bước sau:
              </p>
              <ul className="list-decimal">
                <li>
                  Đọc tài liệu chính thức của công nghệ đó, so sánh trade-off và
                  khác biệt kiến trúc của công nghệ mới so với cái cũ đã học. Từ
                  đó hiểu về điểm mạnh và yếu của nó để sử dụng trong thực tế.
                </li>
                <li>
                  Xem sản phẩm của các senior, học theo mẫu của họ, hiểu lý do
                  vì sao họ code như thế, đồng thời tham gia đóng góp vào sản
                  phẩm của họ.
                </li>
                <li>
                  Khi có đủ kiến thức cơ bản, bắt đầu làm sản phẩm MVP để học.
                </li>
                <li>
                  Khi mà hoàn thành từ 2-3 sản phẩm khác nhau, em bắt đầu tham
                  gia đóng góp cho cộng đồng công nghệ đó, đồng thời xử lý vấn
                  đề, xây dựng sản phẩm cho khách hàng thật.
                </li>
              </ul>
            </div>
          </div>
          <p className="pt-2">
            Ngoài ra, sau này em có dùng AI để phân tích, tìm kiếm và đọc tài
            liệu.
          </p>
        </section>
      )}
    </main>
  );
}
