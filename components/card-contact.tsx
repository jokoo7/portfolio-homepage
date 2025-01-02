import Link from "next/link";
import ArrowSvg from "./svg/arrow";
import Image from "next/image";

type IProps = {
  label: string;
  href: string;
  icon: string;
};

const CardContact = ({ label, icon, href }: IProps) => {
  return (
    <Link
      target="_blank"
      href={href}
      className="flex h-max w-full items-end justify-between border bg-opacity-40 bg-gradient-to-br p-4  border-slate-300 from-slate-100 to-slate-200 dark:border-slate-600 dark:from-gray-700 dark:to-slate-950 cursor-pointer"
    >
      <div className="flex gap-2 items-center">
        <div className="w-6 aspect-square dark:bg-foreground">
          <Image src={icon as string} alt={label} width={50} height={50} className="text-current" />
        </div>
        {label}
      </div>
      <div className="flex items-center gap-1">
        <span className="block text-sm">Go to {label}</span>{" "}
        <ArrowSvg w="12px" h="12px" className="-rotate-45" />
      </div>
    </Link>
  );
};

export default CardContact;
