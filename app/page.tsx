import { buttonVariants } from '@/components/button';
import MainHero from '@/components/main-hero';
import Image from 'next/image';
import Link from 'next/link';
import { FaGithub, FaInstagram } from 'react-icons/fa';
import { FaLinkedin, FaTiktok } from 'react-icons/fa6';

const SOCIALLINKS = [
  { path: '', label: 'Instagram', icon: <FaInstagram /> },
  { path: '', label: 'Tiktok', icon: <FaTiktok /> },
  { path: '', label: 'Github', icon: <FaGithub /> },
  { path: '', label: 'Linkedln', icon: <FaLinkedin /> },
];

export default function Home() {
  return (
    <>
      <MainHero>
        <div className="wrapper-content flex flex-col gap-8 md:gap-10">
          <div className="aspect-square w-[100px] overflow-hidden rounded-full">
            <Image
              src="/profile.jpg"
              alt="Profile"
              width={100}
              height={100}
              className="object-cover grayscale-100"
            />
          </div>
          <h1 className="text-[32px] leading-[1.2em] font-medium tracking-[-0.02em] text-black md:text-[45px] md:font-normal md:tracking-[-0.5px] md:text-[#201d15] lg:text-[55px]">
            I&apos;m Joko Santoso, <br className="md:hidden" /> a frontend
            developer web apps with a backend foundation based in Riau,
            Indonesia.
          </h1>
          <p>
            Combining frontend expertise with a solid backend foundation, I
            craft sleek, high-performance, and user-friendly web applications,
            ensuring seamless functionality and visual appeal across platforms.
          </p>
        </div>
        <div className="wrapper-content mt-16 flex justify-center md:mt-10 md:justify-start">
          <div className="flex w-fit items-center gap-16 md:gap-6">
            {SOCIALLINKS.map((link, i) => (
              <Link
                href={link.path}
                key={i}
                className={buttonVariants({ size: 'icon' })}
              >
                {link.icon}
              </Link>
            ))}
          </div>
        </div>
      </MainHero>
      <div className="wrapper">
        <div className="wrapper-content">
          <div className="flex flex-col gap-4">
            <h2 className="text-[32px] leading-[1.2em] font-medium tracking-[-0.02em] text-black md:text-[45px] lg:text-[50px]">
              Selected projects
            </h2>
            <p>
              Explore my selected projects, highlighting my passion for crafting
              sleek, functional, and user-focused web applications.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
