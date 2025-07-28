import { socialLinks } from "@/lib/config";

export default function Home() {
  return (
    <>
      <div className="prose prose-neutral dark:prose-invert">
        <p>
          A clean, fast, and lightweight portfolio template built with Next.js, Vercel, and Tailwind CSS.
        </p>
        <p>
          Nextfolio has everything you need for a portfolio: MDX blog, SEO, RSS, Atom & JSON feeds,
          analytics, Tweet & YouTube embeds, KaTeX and {""}
          <a target="_blank" href="https://github.com/1msirius/Nextfolio?tab=readme-ov-file#features">
            more
          </a>
          .
        </p>
        <p>
          Nextfolio is{" "}
          <a href={socialLinks.github} target="_blank">
            open-source
          </a>{" "}
          and fully customizable, making it easy to add more features.
        </p>
        <p>
          <a
            href="https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2F1msirius%2FNextfolio"
            target="_blank"
          >
            Deploy
          </a>{" "}
          your Nextfolio site with Vercel in minutes and follow the set up instructions in the{" "}
          <a href="/blog/getting-started">Getting Started</a> post.
        </p>
        <p>
          Built and maintained by{" "}
          <a href="https://imsirius.xyz/" target="_blank">
            Sirius
          </a>
          .
        </p>
      </div>
    </>
  );
}
