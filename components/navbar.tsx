'use client';

import Link from 'next/link';
import React from 'react';
import { Button } from './button';
import { FaGithub } from 'react-icons/fa';
import { cn } from '@/lib/utils';

const NAVLINKS = [
  { path: '/projects', label: 'Projects' },
  { path: '/about-me', label: 'About me' },
];

function Logo() {
  return (
    <Link href="/" className="nav-home">
      Joko Santoso
    </Link>
  );
}

export default function Navbar() {
  const navRef = React.useRef<number | null>(null);
  const [navbarVisible, setNavbarVisible] = React.useState(true);
  const [hamburger, setHamburger] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      const { scrollY } = window;
      const isScrollingDown = scrollY > (navRef.current || 0);
      navRef.current = scrollY;

      setNavbarVisible((prev) => {
        const newNavbarState = !isScrollingDown || scrollY === 0;
        return prev !== newNavbarState ? newNavbarState : prev;
      });
    };

    const handleScrollDebounced = () => {
      window.requestAnimationFrame(handleScroll);
    };

    window.addEventListener('scroll', handleScrollDebounced, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScrollDebounced);
    };
  }, []);

  return (
    <nav
      className={cn(
        'border-light-grey fixed top-0 right-0 left-0 z-50 mx-auto flex h-[80px] w-full -translate-y-[90px] flex-col border-b bg-transparent backdrop-blur-2xl transition-all duration-[350ms] md:h-[90px]',
        { 'translate-y-0': navbarVisible, 'h-[65vh]': hamburger }
      )}
    >
      <div className="mx-auto flex h-[80px] w-full max-w-[1600px] shrink-0 items-center justify-between px-[20px] md:h-[90px] md:px-[40px] lg:px-[50px]">
        <Logo />

        {/* Navlinks */}
        <div className="hidden items-center gap-8 md:flex">
          {NAVLINKS.map((link, i) => (
            <Link key={i} href={link.path} className="nav-links">
              {link.label}
            </Link>
          ))}
          <Button>
            <FaGithub />
            Source
          </Button>
        </div>

        {/* Hamburger Menu */}
        <button
          onClick={() => setHamburger((prev) => !prev)}
          className="flex aspect-square w-[32px] cursor-pointer flex-col items-end justify-center gap-2 md:hidden"
        >
          <div className="flex h-[18px] w-[24px] shrink-0 flex-col items-end justify-between py-[3px]">
            <div
              className={cn(
                'h-[2px] w-full rounded-full bg-black transition-all duration-[400ms]',
                {
                  'translate-y-[5px] rotate-45': hamburger,
                }
              )}
              style={{
                transformOrigin: '50% 50% 0px',
              }}
            ></div>
            <div
              className={cn(
                'h-[2px] w-[20px] rounded-full bg-black transition-all duration-[400ms]',
                {
                  'w-full -translate-y-[5px] -rotate-45': hamburger,
                }
              )}
              style={{
                transformOrigin: '50% 50% 0px',
              }}
            ></div>
          </div>
        </button>
      </div>

      {/* Nav Mobile */}
      <div
        className={cn(
          'wrapper-content flex h-0 w-full items-center justify-center overflow-hidden transition-all duration-200',
          {
            'h-full': hamburger,
          }
        )}
      >
        <div className="flex w-full flex-col items-center gap-12 md:hidden">
          {NAVLINKS.map((link, i) => (
            <Link
              key={i}
              href={link.path}
              className="nav-links text-[20px] leading-[28px] font-medium"
            >
              {link.label}
            </Link>
          ))}
          <Button className="w-full" variant="dark" size="big">
            <FaGithub />
            Source
          </Button>
        </div>
      </div>
    </nav>
  );
}
