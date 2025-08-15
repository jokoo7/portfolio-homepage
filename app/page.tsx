import { Heading } from '@/components/heading';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <div className="wrapper">
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
          <Heading className="hidden lg:block" variant="h1-l">
            I&apos;m Joko Santoso, a frontend developer web apps with a backend
            foundation based in Riau, Indonesia.
          </Heading>
          <Heading className="hidden md:block lg:hidden" variant="h1-s">
            I&apos;m Joko Santoso, a frontend developer web apps with a backend
            foundation based in Riau, Indonesia.
          </Heading>
          <Heading className="md:hidden" variant="h2-m">
            I&apos;m Joko Santoso, <br />a frontend developer web apps with a
            backend foundation based in Riau, Indonesia.
          </Heading>
          <p>
            Combining frontend expertise with a solid backend foundation, I
            craft sleek, high-performance, and user-friendly web applications,
            ensuring seamless functionality and visual appeal across platforms.
          </p>
        </div>
      </div>
    </>
  );
}
