'use client'

import { HamburgerContextType, useHamburger } from '@/hooks/use-click-hamburger'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import * as React from 'react'
import { FaGithub } from 'react-icons/fa6'
import { Menu, X } from 'lucide-react'
import { buttonVariants } from './button'

const NAVLINKS = [
  { label: 'Projects', path: '/projects' },
  { label: 'Articles', path: '/articles' },
]

function NavbarMobile(props: HamburgerContextType) {
  const { isHamburgerOpen } = props

  return (
    <div
      className={cn(
        'bg-background fixed inset-0 z-40 w-full overflow-hidden transition-all duration-400 dark:bg-[#181818]',
        isHamburgerOpen ? 'h-full w-full' : 'h-0',
      )}
    >
      <div className="flex h-full flex-col items-center justify-center gap-6 text-2xl font-semibold">
        {NAVLINKS.map((link, index) => {
          const delayClass = `animate-delay-${(index + 1) * 100}`

          return (
            <Link
              key={link.path}
              href={link.path}
              className={cn('opacity-100 transition-all hover:underline', {
                [`animate-fade-down ${delayClass}`]: isHamburgerOpen,
                'invisible opacity-0 duration-200': !isHamburgerOpen,
              })}
            >
              {link.label}
            </Link>
          )
        })}

        <Link
          href="https://github.com/username"
          className={cn(
            'relative inline-flex shrink-0 cursor-pointer items-center gap-1.5 text-black opacity-100 transition-colors duration-200 hover:underline [&_svg]:pointer-events-none [&_svg]:size-6 [&_svg]:shrink-0',
            {
              'animate-fade-down animate-delay-300': isHamburgerOpen,
              'invisible opacity-0 duration-200': !isHamburgerOpen,
            },
          )}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
          Github
        </Link>
      </div>
    </div>
  )
}

function NavbarDekstop(
  props: {
    navbarVisible: boolean
    navBackground: boolean
  } & HamburgerContextType,
) {
  const { isHamburgerOpen, setIsHamburgerOpen, navBackground, navbarVisible } =
    props

  return (
    <nav
      className={cn(
        'sticky top-0 right-0 left-0 z-50 w-full -translate-y-[100%] transition-all duration-500',
        navBackground ? 'backdrop-blur-xl' : 'bg-transparent',
        { 'translate-y-0': navbarVisible },
      )}
    >
      <div className="wrapper flex h-16 items-center justify-between">
        <Link
          href="/"
          className={cn(
            'font-source-sans-3 cursor-pointer text-3xl font-bold whitespace-nowrap opacity-100 transition-all',
            { 'invisible opacity-0 duration-200': isHamburgerOpen },
            { 'duration-300': !isHamburgerOpen },
          )}
        >
          Joko Santoso
        </Link>

        <div className="font-segoe hidden space-x-8 sm:block">
          {NAVLINKS.map((link, i) => (
            <Link key={i} href={link.path} className="hover:underline">
              {link.label}
            </Link>
          ))}
          <Link
            href="https://github.com/username"
            className={buttonVariants()}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
            Github
          </Link>
        </div>

        <button
          onClick={() => setIsHamburgerOpen((prev) => !prev)}
          type="button"
          aria-label="Toggle menu"
          className="focus-visible:ring-ring bg-foreground fixed top-3 right-6 inline-flex aspect-square w-10 cursor-pointer items-center justify-center gap-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors focus-visible:ring-1 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 sm:hidden [&_svg]:pointer-events-none [&_svg]:size-6 [&_svg]:shrink-0"
        >
          <Menu
            strokeWidth={1.5}
            className={cn(
              'text-background h-[1.5rem] w-[1.5rem] transition-all',
              isHamburgerOpen ? 'scale-0 rotate-90' : 'scale-100 rotate-0',
            )}
          />
          <X
            strokeWidth={1.5}
            className={cn(
              'text-background absolute h-[1.5rem] w-[1.5rem] transition-all',
              isHamburgerOpen ? 'scale-100 rotate-0' : 'scale-0 rotate-90',
            )}
          />
          <span className="sr-only">Toggle menu</span>
        </button>
      </div>
    </nav>
  )
}

export default function Navbar() {
  const navRef = React.useRef<number | null>(null)
  const { isHamburgerOpen, setIsHamburgerOpen } = useHamburger()
  const pathname = usePathname()
  const [navbarVisible, setNavbarVisible] = React.useState(true)
  const [navBackground, setNavBackground] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      const { scrollY } = window
      const isScrollingDown = scrollY > (navRef.current || 0)
      navRef.current = scrollY

      setNavbarVisible((prev) => {
        const newNavbarState =
          !isScrollingDown || scrollY === 0 || isHamburgerOpen
        return prev !== newNavbarState ? newNavbarState : prev
      })

      setNavBackground(scrollY > 0)
    }

    const handleScrollDebounced = () => {
      window.requestAnimationFrame(handleScroll)
    }

    window.addEventListener('scroll', handleScrollDebounced, { passive: true })
    handleScroll()

    return () => {
      window.removeEventListener('scroll', handleScrollDebounced)
    }
  }, [isHamburgerOpen])

  React.useEffect(() => {
    if (isHamburgerOpen) {
      document.body.classList.add('overflow-hidden')
    } else {
      document.body.classList.remove('overflow-hidden')
    }
  }, [pathname, isHamburgerOpen])

  return (
    <>
      {/* Hamburger Overlay && Navbar Mobile */}
      <NavbarMobile
        isHamburgerOpen={isHamburgerOpen}
        setIsHamburgerOpen={setIsHamburgerOpen}
      />
      {/* Navbar Desktop */}
      <NavbarDekstop
        isHamburgerOpen={isHamburgerOpen}
        setIsHamburgerOpen={setIsHamburgerOpen}
        navBackground={navBackground}
        navbarVisible={navbarVisible}
      />
    </>
  )
}
