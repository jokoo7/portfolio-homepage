import { getTranslations } from "next-intl/server";
import Image from "next/image";

export default async function Home() {
  const t = await getTranslations("Home");

  return (
    <>
      <div className="bg-secondary rounded-md py-6 px-4">
        <h1 className="text-center prose prose-neutral dark:prose-invert text-3xl sm:text-4xl font-bold font-playfair">
          {t("description.intro")}
        </h1>
      </div>

      <div className="flex flex-col gap-4 items-center justify-between my-6">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl font-semibold text-[#404040] font-m-plus-rounded">
            Joko Santoso
          </h1>
          <p className="block font-m-plus-rounded sm:text-lg prose prose-neutral dark:prose-invert">
            {t("description.profesi")}
          </p>
        </div>
        <div className="rounded-full overflow-hidden w-28 aspect-square shrink-0 border-border border-4">
          <Image
            src="/me.jpg"
            alt="me"
            width={100}
            height={100}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <h1 className="prose prose-neutral dark:prose-invert text-2xl underline decoration-inherit underline-offset-4 font-bold font-playfair mb-4">
        About Me
      </h1>

      <div className="prose prose-neutral dark:prose-invert mb-6">
        <p>{t("description.work")}</p>
        <p>{t("description.experience")}</p>
        <p>{t("description.accessibility")}</p>
        <p>{t("description.living")}</p>
      </div>

      <h1 className="prose prose-neutral dark:prose-invert text-2xl underline decoration-inherit underline-offset-4 font-bold font-playfair mb-4">
        Bio
      </h1>

      <div className="flex flex-col gap-2 mb-6">
        <div className="flex gap-6 items-center">
          <span className="font-bold text-[#404040]">2003</span>
          <span className="text-[#404040]">Born in Riau, Indonesia.</span>
        </div>
        <div className="flex gap-6 items-center">
          <span className="font-bold text-[#404040]">2024 to present</span>
          <span className="text-[#404040]">Working as freelancer</span>
        </div>
      </div>

      <h1 className="prose prose-neutral dark:prose-invert text-2xl underline decoration-inherit underline-offset-4 font-bold font-playfair mb-4">
        I 💕
      </h1>

      <p className="prose prose-neutral dark:prose-invert">
        Music, <span className="text-teal-500 dark:text-teal-300">Playing Game</span>, Reading, and{" "}
        <span className="text-teal-500 dark:text-teal-300">Coding</span>.
      </p>
    </>
  );
}
