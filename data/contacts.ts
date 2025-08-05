type Contact = {
  label: string
  link: string | { href: string; target?: string }
}

const SOCIAL_LINKS = [
  {
    label: 'Github',
    link: 'https://github.com/jokosannn',
  },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/ibelick',
  },
  {
    label: 'Instagram',
    link: 'https://www.instagram.com/jokosantsoo',
  },
  {
    label: 'Tiktok',
    link: 'https://www.instagram.com/jokosantsoo',
  },
]

const EMAIL = 'sannbusiness16@email.com'

export { type Contact, SOCIAL_LINKS, EMAIL }
