import ArrowSvg from "./svg/arrow";

type IProps = {
  label: string;
  icon: React.ReactNode;
};

const CardContact = ({ label, icon }: IProps) => {
  return (
    <div className="flex h-max w-full items-end justify-between border bg-opacity-40 bg-gradient-to-br p-4  border-slate-300 from-slate-100 to-slate-200 dark:border-slate-600 dark:from-slate-900 dark:to-slate-950 cursor-pointer">
      <div className="flex gap-2">
        {icon}
        {label}
      </div>
      <div className="flex items-center gap-1">
        <span className="block text-sm">Go to {label}</span>{" "}
        <ArrowSvg w="12px" h="12px" className="-rotate-45" />
      </div>
    </div>
  );
};

export default CardContact;
