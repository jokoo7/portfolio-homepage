import { SOCIALLINKS } from '@/app/page';
import Link from 'next/link';
import { TbPlugConnected } from 'react-icons/tb';
import { Button, buttonVariants } from './button';
import { Heading } from './heading';
import { Paragraph } from './paragraph';
import { Wrapper, WrapperContent } from './wrapper';

const NAVLINKS = [
  { path: '/projects', label: 'Projects' },
  { path: '/articles', label: 'Articles' },
  { path: '/about-me', label: 'About me' },
];

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
              <TbPlugConnected /> Let’s connect
            </Button>
          </WrapperContent>
        </Wrapper>
      </section>

      <footer className="w-full bg-black">
        <Wrapper className="pt-0 pb-0 md:pt-0 md:pb-0 lg:pt-0 lg:pb-0">
          <WrapperContent className="border-grey flex flex-col items-center justify-between gap-20 border-b py-12 md:flex-row">
            <div className="flex flex-col items-center gap-10 md:flex-row md:gap-14">
              <Link
                href="/"
                className="text-[18px] leading-[120%] font-bold whitespace-nowrap text-white no-underline md:text-[16px]"
              >
                Joko Santoso
              </Link>

              <div className="flex flex-col items-center gap-8 md:flex-row">
                {NAVLINKS.map((link, i) => (
                  <Link
                    key={i}
                    href={link.path}
                    className="text-grey text-[18px] leading-[1.5em] whitespace-nowrap no-underline hover:text-white md:text-[14px]"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
            <div className="flex w-full max-w-md items-center justify-between gap-10 md:w-fit md:justify-center md:gap-8">
              {SOCIALLINKS.map((link, i) => (
                <Link
                  href={link.path}
                  key={i}
                  className={buttonVariants({ size: 'icon', variant: 'dark' })}
                >
                  {link.icon}
                </Link>
              ))}
            </div>
          </WrapperContent>

          <WrapperContent className="py-8 text-center">
            <p className="text-grey text-[14px] leading-[1.2em]">
              Copyright {new Date().getFullYear()} by Joko Santoso
            </p>
          </WrapperContent>
        </Wrapper>
      </footer>
    </>
  );
}
