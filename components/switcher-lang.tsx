"use client";

import { routing } from "@/lib/i18n/routing";
import { usePathname, useRouter } from "next/navigation";

export default function SwitcherLang() {
  const pathname = usePathname();
  const router = useRouter();

  const changeLocale = (locale: string) => {
    // pathname: /id/about  ->  /en/about
    const newPath = pathname.replace(/^\/[a-z]{2}/, `/${locale}`);
    router.push(newPath);
  };

  return (
    <div style={{ marginBottom: 20 }}>
      {routing.locales.map((loc) => (
        <button key={loc} onClick={() => changeLocale(loc)}>
          {loc.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
