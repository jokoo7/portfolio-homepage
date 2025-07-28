import { getTranslations } from "next-intl/server";

export default async function Home() {
  const t = await getTranslations("Home");

  return (
    <>
      <div className="prose prose-neutral dark:prose-invert">
        <h1>{t("description.intro")}</h1>
        <p>{t("description.work")}</p>
        <p>{t("description.experience")}</p>
        <p>{t("description.accessibility")}</p>
        <p>{t("description.living")}</p>
      </div>
    </>
  );
}
