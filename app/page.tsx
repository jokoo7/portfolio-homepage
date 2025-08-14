import Image from 'next/image';

export default function Home() {
  return (
    <>
      <div className="wrapper">
        <div className="wrapper-content flex flex-col gap-10">
          <div className="aspect-square w-[100px] overflow-hidden rounded-full">
            <Image
              src="/profile.jpg"
              alt="Profile"
              width={100}
              height={100}
              className="object-cover grayscale-100"
            />
          </div>
          <h1 className="hidden md:block">
            I&apos;m Joko Santosos, a frontend developer with a backend
            foundation based in Riau, Indonesia.
          </h1>
          <h2 className="md:hidden">
            I&apos;m Joko Santosos, a frontend developer with a backend
            foundation based in Riau, Indonesia.
          </h2>
          <p>
            Combining frontend expertise with a solid backend foundation, I
            craft sleek, high-performance, and user-friendly web applications,
            ensuring seamless functionality and visual appeal across platforms.
          </p>
          <div></div>
        </div>
      </div>
    </>
  );
}
