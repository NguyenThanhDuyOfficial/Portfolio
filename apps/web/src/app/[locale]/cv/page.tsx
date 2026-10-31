import { getTranslations } from "next-intl/server";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { FaEarthAsia } from "react-icons/fa6";
import "../../../styles/cv.css";
import { roboto } from "@/src/fonts/fonts";

const skills = ["frontend", "backend", "others"] as const;
const projects = [
  { key: "joli", bulletPoints: [1, 2], links: ["github", "live"] },
  { key: "odyssey", bulletPoints: [1, 2], links: ["github"] },
  { key: "car", bulletPoints: [1, 2], links: ["github"] },
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
            <p>nguyenthanhduyofficial@gmail.com</p>
            <p>0823 564 241 | HCM | 2004</p>
            <p>
              <FaEarthAsia className="w-4 h-4 inline" />{" "}
              <a href="https://nguyenthanhduyofficial.vercel.app">
                nguyenthanhduyofficial
              </a>
            </p>
          </div>
        </div>
        <div className="relative w-[30mm] h-[40mm]">
          <Image
            src="/avatar.jpeg"
            alt="avatar"
            fill
            sizes="100vw, 100vh"
            className="object-cover  rounded-lg"
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
            <div key={project.key}>
              <div className="flex items-center gap-2">
                <h3>{t(`projects.${project.key}.title`)}</h3>
                {project.links.map((link) => (
                  <div key={link} className="flex gap-1">
                    <span>|</span>
                    <div className="flex items-center gap-1">
                      {link === "github" ? (
                        <FaGithub className="w-4 h-4 inline" />
                      ) : (
                        <FaEarthAsia className="w-4 h-4 inline" />
                      )}
                      <a href={t(`projects.${project.key}.links.${link}`)}>
                        {link === "github" ? "Github" : "Live"}
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
    </main>
  );
}
