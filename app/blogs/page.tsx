import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/card';
import { Heading } from '@/components/heading';
import MainHero from '@/components/main-hero';
import { Paragraph, paragraphVariants } from '@/components/paragraph';
import { WrapperContent } from '@/components/wrapper';
import { PROJECTS } from '@/lib/constans';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { IoArrowForward } from 'react-icons/io5';

export default function BlogsPage() {
  return (
    <MainHero>
      <WrapperContent className="space-y-10">
        <div className="flex flex-col gap-4">
          <Heading as="h2" className="h2-responsive">
            My Blogs
          </Heading>
          <Paragraph className="max-w-[800px]">
            Discover my collection of blogs, where I share insights,
            experiences, and knowledge about web development, design, and
            technology.
          </Paragraph>
        </div>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          {PROJECTS.map((project) => (
            <Card key={project.id} path={project.link}>
              <CardHeader>
                <Image
                  src={project.image}
                  alt={project.id}
                  width={2000}
                  height={2000}
                  className="h-full w-full object-cover object-center transition-all duration-500 group-hover:scale-110"
                />
              </CardHeader>
              <CardContent>
                <CardTitle>{project.name}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
                <div className="flex items-center gap-1 text-black [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0">
                  <p
                    className={cn(
                      paragraphVariants({
                        variant: 'captionSemibold',
                      }),
                      'leading-0 whitespace-nowrap transition-all duration-500 md:opacity-0 md:group-hover:opacity-100'
                    )}
                  >
                    She the project
                  </p>
                  <IoArrowForward className="transition-all duration-500 group-hover:translate-x-1 md:opacity-0 md:group-hover:opacity-100" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </WrapperContent>
    </MainHero>
  );
}
