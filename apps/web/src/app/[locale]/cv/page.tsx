import { getTranslations } from "next-intl/server";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { FaEarthAsia } from "react-icons/fa6";
import "../../../styles/cv.css";
import { roboto } from "@/src/fonts/fonts";

const skills = ["frontend", "backend", "others"];
const projects = [
  { key: "joli", bulletPoints: [1, 2, 3] },
  { key: "odyssey", bulletPoints: [1, 2] },
  { key: "car", bulletPoints: [1, 2] },
];

export default async function CV({
  params,
}: {
  params: Promise<{
    role: string | undefined;
    techStacks: string | string[] | undefined;
  }>;
}) {
  const { role = "Full-stack Developer", techStacks = ["Next.js"] } =
    await params;
  const t = await getTranslations("CV");
  return (
    <main className={`${roboto.className} space-y-2`}>
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
        <p className="">{t("summary.description", { role: role })}</p>
      </section>
      <section>
        <h2>{t("skills.title")}</h2>
        {skills.map((skill) => (
          <p key={skill}>
            {t(`skills.${skill}.title`)}: {t(`skills.${skill}.description`)}
          </p>
        ))}
      </section>
      <section>
        <h2>{t("projects.title")}</h2>
        {projects.map((project) => (
          <div key={project.key}>
            <div className="flex items-center gap-2">
              <h3>{t(`projects.${project.key}.title`)}</h3>
              {t(`projects.${project.key}.links.live`) && (
                <>
                  <span>|</span>
                  <div className="flex items-center gap-1">
                    <FaGithub className="w-4 h-4 inline" />
                    <a href={t(`projects.${project.key}.links.live`)}>Github</a>
                  </div>
                </>
              )}
              {t(`projects.${project.key}.links.github`) && (
                <>
                  <span>|</span>
                  <div className="flex items-center gap-1">
                    <FaEarthAsia className="w-4 h-4 inline" />
                    <a href={t(`projects.${project.key}.links.github`)}>Live</a>
                  </div>
                </>
              )}
            </div>
            <ul>
              {project.bulletPoints.map((key) => (
                <li key={key}>
                  {t(`projects.${project.key}.bulletPoints.${key}`)}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>
    </main>
  );
}
