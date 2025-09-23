import { Github, Linkedin, Mail, Unplug } from 'lucide-react';
import { Button } from './button';
import { Heading } from './heading';
import { Paragraph } from './paragraph';
import { Wrapper, WrapperContent } from './wrapper';

// const NAVLINKS = [
//   { path: '/projects', label: 'Projects' },
//   { path: '/articles', label: 'Articles' },
//   { path: '/about-me', label: 'About me' },
// ];

export default function Footer() {
  return (
    <>
      <section className="bg-dark-grey w-full">
        <Wrapper className="py-20">
          <WrapperContent>
            <Heading as="h2" className="h2-responsive text-white">
              Interested in connecting?
            </Heading>
            <Paragraph className="text-background mt-2">
              Let’s talk projects, collaborations, or anything else!
            </Paragraph>
            <Button
              variant="dark"
              size="big"
              className="mt-8 w-full md:mt-6 md:w-fit"
            >
              <Unplug /> Let’s connect
            </Button>
          </WrapperContent>
        </Wrapper>
      </section>

      <footer className="w-full bg-black py-8">
        <Wrapper className="pt-0 pb-0 md:pt-0 md:pb-0 lg:pt-0 lg:pb-0">
          <WrapperContent className="flex flex-col items-center justify-between gap-4 md:flex-row">
            {/* <p className="text-muted-foreground text-sm">
              © 2className="border-grey flex flex-col items-center justify-between gap-20 border-b py-12 md:flex-row"024 Portfolio. Dibuat dengan Next.js dan TailwindCSS.
            </p> */}
            <p className="text-grey text-[14px] leading-[1.2em]">
              © {new Date().getFullYear()} Portfolio Joko Santoso, Build with
              ❤️
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://github.com"
                className="text-grey transition-colors"
                aria-label="GitHub"
              >
                <Github size={16} />
              </a>
              <a
                href="https://linkedin.com"
                className="text-grey transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={16} />
              </a>
              <a
                href="mailto:hello@example.com"
                className="text-grey transition-colors"
                aria-label="Email"
              >
                <Mail size={16} />
              </a>
            </div>
          </WrapperContent>
        </Wrapper>
      </footer>
    </>
  );
}
