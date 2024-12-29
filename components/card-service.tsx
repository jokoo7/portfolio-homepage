type IProps = {
  children: React.ReactNode;
  title: string;
  description: string;
  label: string;
};

const CardService = ({ children, title, description, label }: IProps) => {
  return (
    <div className="relative p-4 dark:border-neutral-700 md:p-6">
      <div className="mb-5 flex items-center justify-center px-6 py-4">
        <div className="h-36 w-52 overflow-hidden rounded-lg border dark:border-neutral-700">
          <div className="flex items-center justify-start gap-1 border-b bg-neutral-200 px-2 py-1 dark:border-neutral-700 dark:bg-neutral-900">
            <div className="h-2 w-2 rounded-full border border-neutral-400 dark:border-neutral-700"></div>
            <div className="h-2 w-2 rounded-full border border-neutral-400 dark:border-neutral-700"></div>
            <div className="h-2 w-2 rounded-full border border-neutral-400 dark:border-neutral-700"></div>
          </div>
          <div className="flex justify-center gap-2 bg-neutral-100 p-3 pb-0 dark:bg-neutral-950">
            {children}
          </div>
        </div>
      </div>
      <div className="w-full">
        <span className="right-3 top-3 mb-1 flex w-max items-center justify-center rounded-lg border border-neutral-200 bg-neutral-200 bg-opacity-40 px-2 text-xs text-neutral-500 dark:border-foreground  dark:bg-main-blue dark:text-teal-200 md:absolute">
          {label}
        </span>
        <h3 className="text-xl font-medium">{title}</h3>
        <p className="text-sm text-neutral-600 dark:text-neutral-400">{description}</p>
      </div>
      <div className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#80808018_1px,transparent_1px),linear-gradient(to_bottom,#80808018_1px,transparent_1px)] bg-[size:18px_18px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_20%,#000_80%,transparent_100%)]"></div>
    </div>
  );
};

export default CardService;
