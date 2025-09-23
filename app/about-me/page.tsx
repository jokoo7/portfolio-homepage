import { Heading } from '@/components/heading';
import MainHero from '@/components/main-hero';
import { Paragraph } from '@/components/paragraph';
import { Wrapper, WrapperContent } from '@/components/wrapper';
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
        <WrapperContent>
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
                More than a frontend developer, I craft experiences where design
                meets seamless function — supported by a solid touch of backend.
              </h4>
              <Paragraph>
                My philosophy? Every project is a story, and every interface is
                a chapter of that story. I enjoy the little things — clean and
                elegant code, the excitement of solving a challenging problem,
                and the quiet joy when everything clicks into place.
              </Paragraph>
            </div>
          </div>
        </WrapperContent>
      </MainHero>

      <Wrapper className="space-y-24">
        <WrapperContent>
          <h2 className="mb-6 text-[32px] leading-[1.2em] font-medium tracking-[-0.02em] text-black md:text-[45px] lg:text-[50px]">
            My Inspirations and Interests
          </h2>
          <div className="flex flex-col gap-5 md:flex-row md:gap-10">
            <Paragraph>
              Inspiration often comes in the simplest moments — a fresh cup of
              coffee, the first pages of a book, or watching the city wake up at
              dawn. These quiet routines recharge me and spark new ideas for my
              work, reminding me that creativity often begins with simplicity.
            </Paragraph>
            <Paragraph>
              I enjoy exploring how design and logic connect, finding joy in
              turning concepts into code. With frontend as my focus and a touch
              of backend foundation, I love solving problems and creating
              experiences that feel both beautiful and functional — little
              details that transform ideas into meaningful journeys.
            </Paragraph>
          </div>
        </WrapperContent>
      </Wrapper>

      <Wrapper className="space-y-24 pt-0 md:pt-0 lg:pt-0">
        <WrapperContent>
          <div className="grid lg:grid-cols-3">
            <div>
              <Heading as="h3" className="h3-responsive mb-6">
                Bio
              </Heading>
            </div>
            <div className="lg:col-span-2">
              <div className="space-y-2">
                {BIO.map((v, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <Paragraph
                      variant="captionSemibold"
                      className="w-fit shrink-0 font-mono text-black"
                    >
                      {v.year}
                    </Paragraph>
                    <Paragraph>{v.desc}</Paragraph>
                  </div>
                ))}
              </div>
              <div className="mt-12">
                <Paragraph className="leading-relaxed">
                  I am a developer passionate about creating accessible and
                  performant web experiences. My expertise lies at the
                  intersection of design and development, building applications
                  that not only look great but are also optimized for
                  performance and usability.
                </Paragraph>
              </div>
            </div>
          </div>
        </WrapperContent>
      </Wrapper>

      <Wrapper className="space-y-24 pt-0 md:pt-0 lg:pt-0">
        <WrapperContent>
          <div className="grid lg:grid-cols-3">
            <div>
              <Heading as="h3" className="h3-responsive mb-6">
                Skills & Tools
              </Heading>
            </div>
            <div className="lg:col-span-2">
              <div className="space-y-12">
                {/* Skills */}
                <div>
                  <Heading as="h4" className="h4-responsive mb-6">
                    Skills
                  </Heading>
                  {/* <h3 className="mb-6 text-xl font-semibold">Skills</h3> */}
                  <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
                    {SKILLSInArray.map(([name, icon], index) => (
                      <div
                        key={index}
                        className="border-grey flex items-center gap-1 border px-4 py-2"
                      >
                        <div className="flex h-5 w-5 items-center justify-center">
                          {icon}
                        </div>
                        <Paragraph variant="small" className="font-medium">
                          {name}
                        </Paragraph>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tools */}
                <div>
                  <Heading as="h4" className="h4-responsive mb-6">
                    Tools
                  </Heading>
                  <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
                    {SOFTWAREInArray.map(([name, icon], index) => (
                      <div
                        key={index}
                        className="border-grey flex items-center gap-1 border px-4 py-2"
                      >
                        <div className="flex h-5 w-5 items-center justify-center">
                          {icon}
                        </div>
                        <Paragraph variant="small" className="font-medium">
                          {name}
                        </Paragraph>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </WrapperContent>
      </Wrapper>
    </>
  );
}
