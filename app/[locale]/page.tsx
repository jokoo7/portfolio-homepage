import HeadingSection from "@/components/heading-section";
import { getTranslations } from "next-intl/server";

export default async function Home() {
  const t = await getTranslations("Home");

  return (
    <>
      <div className="flex flex-col gap-4 items-start justify-between my-16">
        <div>
          <h2 className="font-playfair text-primary text-7xl md:text-8xl relative z-20 font-bold tracking-tight">
            Joko santoso
          </h2>
          <p className="font-playfair text-4xl md:text-5xl text-muted-foreground mb-6 font-bold">
            {t("description.profesi")}
          </p>
          <p className="text-lg md:text-xl">{t("description.intro")}</p>
        </div>
      </div>

      <HeadingSection className="mb-2">About Me</HeadingSection>

      <div className="mb-6 text-lg md:text-xl">
        <p className="mb-4">{t("description.work")}</p>
        <p className="mb-4">{t("description.experience")}</p>
        <p className="mb-4">{t("description.accessibility")}</p>
        <p className="mb-4">{t("description.living")}</p>
      </div>

      <HeadingSection className="mb-2">Bio</HeadingSection>

      <div className="flex flex-col gap-2 mb-6 text-lg md:text-xl">
        <div className="flex gap-6 items-start">
          <span className="font-bold">2003</span>
          <span>Born in Riau, Indonesia.</span>
        </div>
        <div className="flex gap-6 items-start">
          <span className="font-bold">2003</span>
          <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum, soluta.</span>
        </div>
        <div className="flex gap-6 items-start">
          <span className="font-bold">2003</span>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse magni quibusdam at pariatur
            temporibus fugit quasi laboriosam eaque voluptate odit!
          </span>
        </div>
        <div className="flex gap-6 items-start">
          <span className="font-bold whitespace-nowrap">2024 to present</span>
          <span>Working as freelancer</span>
        </div>
      </div>

      <HeadingSection className="mb-2">I 💕</HeadingSection>

      <p className="text-lg md:text-xl">
        Music, <span className="text-primary">Playing Game</span>, Reading, and{" "}
        <span className="text-primary">Coding</span>.
      </p>
    </>
  );
}
