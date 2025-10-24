'use client';

import { NAVLINKS } from '@/lib/constans';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { buttonVariants } from './button';

export default function Navbar() {
  const navRef = React.useRef(0);
  const [navbarVisible, setNavbarVisible] = React.useState(true);
  const [hamburger, setHamburger] = React.useState(false);
  const pathname = usePathname();

  React.useEffect(() => {
    const handleScroll = () => {
      const { scrollY } = window;
      const isScrollingDown = scrollY > navRef.current;
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
    handleScroll(); // sync state awal

    return () => {
      window.removeEventListener('scroll', handleScrollDebounced);
    };
  }, []);

  React.useEffect(() => {
    setHamburger(false); // tutup hamburger saat ganti route
  }, [pathname]);

  return (
    <nav
      className={cn(
        'border-light-gray fixed top-0 right-0 left-0 z-50 mx-auto flex h-[80px] w-full -translate-y-[90px] flex-col overflow-hidden border-b bg-white/50 backdrop-blur-3xl transition-all duration-[350ms] md:h-[90px]',
        { 'translate-y-0': navbarVisible, 'h-[470px]': hamburger }
      )}
    >
      <div className="mx-auto flex h-[470px] w-full max-w-[1600px] shrink-0 flex-col items-center px-[20px] md:px-[40px] lg:px-[50px]">
        <div className="flex h-[80px] w-full shrink-0 items-center justify-between md:h-[90px]">
          {/* Logo */}
          <Link href="/" className="nav-home">
            Joko Santoso
          </Link>

          {/* Navlinks */}
          <div className="hidden items-center gap-8 md:flex">
            {NAVLINKS.map((link, i) => (
              <Link
                key={i}
                href={link.path}
                className={cn('nav-links', {
                  'line-through': pathname === link.path,
                })}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="https://github.com/jokoo7"
              target="_blank"
              className={cn(
                buttonVariants({ variant: 'default' }),
                'no-underline'
              )}
            >
              <FaGithub />
              Source
            </Link>
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
                  { 'translate-y-[5px] rotate-45': hamburger }
                )}
                style={{
                  transformOrigin: '50% 50% 0px',
                }}
              ></div>
              <div
                className={cn(
                  'h-[2px] w-[20px] rounded-full bg-black transition-all duration-[400ms]',
                  { 'w-full -translate-y-[5px] -rotate-45': hamburger }
                )}
                style={{
                  transformOrigin: '50% 50% 0px',
                }}
              ></div>
            </div>
          </button>
        </div>

        {/* Nav Mobile */}
        <div className="flex h-full w-full flex-col items-center justify-between py-16 md:hidden">
          {NAVLINKS.map((link, i) => (
            <Link
              key={i}
              href={link.path}
              className={cn(
                'nav-links text-[20px] leading-[28px] font-medium',
                { 'line-through': pathname === link.path }
              )}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="https://github.com/jokoo7"
            target="_blank"
            className={cn(
              buttonVariants({ variant: 'dark', size: 'big' }),
              'w-full no-underline'
            )}
          >
            <FaGithub />
            Source
          </Link>
        </div>
      </div>
    </nav>
  );
}
