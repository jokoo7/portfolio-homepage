import MainHero from '@/components/main-hero';
import { Paragraph } from '@/components/paragraph';
import { SKILS, SOFTWARE } from '@/constants/skills-stacks';
import Image from 'next/image';
import { JSX } from 'react';

const BIO = [
  { year: '2003', desc: 'Born in Siak, Indonesia' },
  { year: '2023 - Now', desc: 'Working as a Freelance website develover' },
];

export default function AboutPage() {
  const SKILLSInArray: Array<[string, JSX.Element]> = Object.entries(SKILS);
  const SOFTWAREInArray: Array<[string, JSX.Element]> =
    Object.entries(SOFTWARE);

  return (
    <>
      <MainHero>
        <div className="wrapper-content">
          <h1 className="mb-6 text-[40px] leading-[120%] font-normal tracking-[-0.5px] text-[#201d15] md:mb-12 md:text-[45px] lg:text-[55px]">
            Who I am ?
          </h1>

          <div className="flex flex-col gap-10 md:flex-row">
            <div className="h-[225px] w-full shrink-0 overflow-hidden rounded-xl md:h-[300px] md:w-1/2">
              <Image
                src="/profile.jpg"
                alt="me"
                width={500}
                height={500}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="space-y-7">
              <h4 className="text-[20px] leading-[1.4em] font-medium text-black md:text-[24px]">
                More than a UX/UI designer, I&apos;m a storyteller at heart,
                weaving narratives through my designs.
              </h4>
              <Paragraph>
                My philosophy? Every app tells a story, and every interface is a
                journey. I find joy in simple things — a well-crafted espresso,
                the crisp pages of a new book, and the quiet buzz of a city at
                dawn.
              </Paragraph>
            </div>
          </div>
        </div>
      </MainHero>

      <div className="wrapper space-y-24 pb-0">
        <div className="wrapper-content">
          <h2 className="mb-6 text-[32px] leading-[1.2em] font-medium tracking-[-0.02em] text-black md:text-[45px] lg:text-[50px]">
            My Inspirations and Interests
          </h2>
          <div className="flex flex-col gap-5 md:flex-row md:gap-10">
            <Paragraph>
              Inspiration often comes to me in the simplest moments — brewing a
              fresh cup of coffee, turning the pages of a new book, or watching
              the city slowly wake up in the early morning. These quiet routines
              recharge me and often spark new ideas for my work.
            </Paragraph>
            <Paragraph>
              I enjoy exploring how design and logic connect, and I find joy in
              solving problems with code. Outside of development, I love
              reading, reflecting, and finding little details in everyday life
              that remind me how creativity often hides in simplicity.
            </Paragraph>
          </div>
        </div>
      </div>

      <div className="wrapper space-y-24 pb-0">
        <div className="wrapper-content">
          <h2 className="mb-6 text-[32px] leading-[1.2em] font-medium tracking-[-0.02em] text-black md:text-[45px] lg:text-[50px]">
            Bio
          </h2>
          <div className="space-y-2">
            {BIO.map((v, i) => (
              <div key={i} className="p-reguler flex items-start gap-2">
                <span className="p-semibold inline-block w-28 shrink-0 whitespace-nowrap text-black md:w-24">
                  {v.year}
                </span>
                <span className="text-black">{v.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="wrapper space-y-24">
        <div className="wrapper-content">
          <h2 className="mb-6 text-[32px] leading-[1.2em] font-medium tracking-[-0.02em] text-black md:text-[45px] lg:text-[50px]">
            Skils & Tools
          </h2>
          <div className="space-y-8">
            <div className="flex items-start gap-10">
              <div className="w-10 shrink-0">
                <span className="p-semibold inline-block w-28 whitespace-nowrap text-black md:w-24">
                  Skills
                </span>
              </div>
              <div className="flex flex-wrap gap-8">
                {SKILLSInArray.map(([name, icon], index) => (
                  <div
                    key={index}
                    className="flex h-fit w-fit items-center gap-1"
                  >
                    <div className="flex h-5 w-5 items-center justify-center">
                      {icon}
                    </div>
                    <Paragraph>{name}</Paragraph>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex items-start gap-10">
              <div className="w-10 shrink-0">
                <span className="p-semibold inline-block w-28 whitespace-nowrap text-black md:w-24">
                  Tools
                </span>
              </div>
              <div className="flex flex-wrap gap-8">
                {SOFTWAREInArray.map(([name, icon], index) => (
                  <div
                    key={index}
                    className="flex h-fit w-fit items-center gap-1"
                  >
                    <div className="flex h-5 w-5 items-center justify-center">
                      {icon}
                    </div>
                    <Paragraph>{name}</Paragraph>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
