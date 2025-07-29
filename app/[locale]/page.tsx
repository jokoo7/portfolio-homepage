import { getTranslations } from "next-intl/server";
import Image from "next/image";

export default async function Home() {
  const t = await getTranslations("Home");

  return (
    <>
      {/* <div
        className="rounded-lg mb-6 p-3 text-center backdrop-blur-[10px] border border-border/30"
        style={{
          backgroundColor: "hsl(var(--card) / 0.8)",
          backdropFilter: "blur(10px) saturate(180%)",
        }}
      >
        <h1 className="text-text text-center text-3xl sm:text-4xl font-bold font-m-plus-rounded">
          {t("description.intro")}
        </h1>
      </div> */}

      <div className="flex flex-col gap-4 items-center justify-between my-6">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl font-semibold font-m-plus-rounded">Joko Santoso</h1>
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

      <h1 className="text-2xl underline decoration-inherit underline-offset-4 font-bold font-m-plus-rounded mb-4">
        About Me
      </h1>

      <div className="mb-6">
        <p className="mb-4">{t("description.work")}</p>
        <p className="mb-4">{t("description.experience")}</p>
        <p className="mb-4">{t("description.accessibility")}</p>
        <p className="mb-4">{t("description.living")}</p>
      </div>

      <h1 className="text-2xl underline decoration-inherit underline-offset-4 font-bold font-m-plus-rounded mb-4">
        Bio
      </h1>

      <div className="flex flex-col gap-2 mb-6">
        <div className="flex gap-6 items-center">
          <span className="font-bold">2003</span>
          <span>Born in Riau, Indonesia.</span>
        </div>
        <div className="flex gap-6 items-center">
          <span className="font-bold">2024 to present</span>
          <span>Working as freelancer</span>
        </div>
      </div>

      <h1 className="text-2xl underline decoration-inherit underline-offset-4 font-bold font-playfair mb-4">
        I 💕
      </h1>

      <p className="prose prose-neutral dark:prose-invert">
        Music, <span className="text-primary">Playing Game</span>, Reading, and{" "}
        <span className="text-primary">Coding</span>.
      </p>
    </>
  );
}
