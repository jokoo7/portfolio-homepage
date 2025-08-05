import { BiLogoTypescript } from 'react-icons/bi'
import { FaGitAlt, FaGolang, FaHtml5, FaReact } from 'react-icons/fa6'
import { IoLogoJavascript } from 'react-icons/io5'
import { RiNextjsFill } from 'react-icons/ri'
import { SiExpress, SiPostman, SiTailwindcss } from 'react-icons/si'
import { VscVscode } from 'react-icons/vsc'

type Skill = {
  label: string
  icon: React.ReactNode
}

const SKILLS: Skill[] = [
  {
    label: 'HTML',
    icon: <FaHtml5 />,
  },
  {
    label: 'CSS/Tailwind CSS',
    icon: <SiTailwindcss />,
  },
  {
    label: 'JavaScript',
    icon: <IoLogoJavascript />,
  },
  {
    label: 'TypeScript',
    icon: <BiLogoTypescript />,
  },
  {
    label: 'React',
    icon: <FaReact />,
  },
  {
    label: 'Next.js',
    icon: <RiNextjsFill />,
  },
  {
    label: 'Express.js',
    icon: <SiExpress />,
  },
  {
    label: 'Golang',
    icon: <FaGolang />,
  },
  {
    label: 'VsCode',
    icon: <VscVscode />,
  },
  {
    label: 'Postman',
    icon: <SiPostman />,
  },
  {
    label: 'Git',
    icon: <FaGitAlt />,
  },
]

export { type Skill, SKILLS }
