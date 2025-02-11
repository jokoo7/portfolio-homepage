import { PiInstagramLogoDuotone, PiWhatsappLogoDuotone, PiGithubLogoDuotone } from "react-icons/pi";
import { ImGithub } from "react-icons/im";
import { AiTwotoneMail } from "react-icons/ai";

export const CONTACTS = [
  {
    id: 1,
    label: "Instagram",
    icon: <PiInstagramLogoDuotone size={25} />,
    href: "https://www.instagram.com/jokosannn",
    value: "jokosannn",
  },
  {
    id: 2,
    label: "Whatsapp",
    icon: <PiWhatsappLogoDuotone size={25} />,
    href: `https://wa.me/+6282299841605?text=${encodeURIComponent("Halo abang ganteng...")}`,
    value: "082299841605",
  },
  {
    id: 3,
    label: "Github",
    icon: <PiGithubLogoDuotone size={25} />,
    href: "https://github.com/jokosannn",
    value: "jokosannn",
  },
  // {
  //   id: 3,
  //   label: "Gmail",
  //   icon: <AiTwotoneMail size={25} />,
  //   href: `mailto:sannbusiness16@gmail.com?subject=${encodeURIComponent(
  //     "Permintaan Informasi"
  //   )}&body=${encodeURIComponent("Halo, saya ingin bertanya mengenai...")}`,
  //   value: "sannbusiness16@gmail.com",
  // },
];
