import MotionMain from '@/components/motion-main'
import MotionSection from '@/components/motion-section'

const VARIANTS_CONTAINER = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const VARIANTS_SECTION = {
  hidden: { opacity: 0, y: 20, filter: 'blur(8px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
}

const TRANSITION_SECTION = {
  duration: 0.3,
}

export default function Home() {
  return (
    <MotionMain
      className="mb-20 space-y-20"
      variants={VARIANTS_CONTAINER}
      initial="hidden"
      animate="visible"
    >
      <MotionSection
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <div className="flex-1 space-y-4">
          <h1 className="font-medium text-black dark:text-white">About me</h1>
          <p>
            I specialize in building modern, performant, and user-centric web
            applications using JavaScript, TypeScript, and powerful frontend
            frameworks.
          </p>
          <p>
            With several years of experience in web development, I thrive on
            solving complex problems and turning ideas into intuitive digital
            experiences.
          </p>
          <p>
            I believe that great software is for everyone. I strive to write
            accessible, inclusive code that empowers all users, regardless of
            ability.
          </p>
          <p>
            I'm currently based in Riau, Indonesia. Open to freelance work,
            collaborative projects, and meaningful tech opportunities.
          </p>
        </div>
      </MotionSection>
      <MotionSection
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <div className="flex-1 space-y-4">
          <h1 className="font-medium text-black dark:text-white">Bio</h1>
          <div className="flex flex-col gap-2">
            <div className="flex items-start gap-4">
              <span className="block font-medium text-black dark:text-white">
                2003
              </span>
              <p>Born in Riau, Indonesia.</p>
            </div>
            <div className="flex items-start gap-4">
              <span className="block font-medium text-black dark:text-white">
                2024 to present
              </span>
              <p>Working as a freelancer</p>
            </div>
          </div>
        </div>
      </MotionSection>
    </MotionMain>
  )
}
