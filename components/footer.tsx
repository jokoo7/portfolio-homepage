import { SOCIALLINKS } from '@/lib/constans';
import { Unplug } from 'lucide-react';
import Link from 'next/link';
import { Button } from './button';
import { Heading } from './heading';
import { Paragraph } from './paragraph';
import { Wrapper, WrapperContent } from './wrapper';

export default function Footer() {
  return (
    <>
      <section className="bg-dark-gray w-full">
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
            <p className="text-gray text-[14px] leading-[1.2em]">
              © {new Date().getFullYear()} Portfolio Joko Santoso, Build with
              ❤️
            </p>
            <div className="flex items-center gap-4">
              {SOCIALLINKS.map((l, i) => (
                <Link
                  key={i}
                  href={l.path}
                  className="text-gray transition-colors"
                  aria-label="GitHub"
                >
                  <l.icon size={16} />
                </Link>
              ))}
            </div>
          </WrapperContent>
        </Wrapper>
      </footer>
    </>
  );
}
