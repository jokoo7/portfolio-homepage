type IProps = {
  title: string;
  description: string;
  children?: React.ReactNode;
};

const Heading = ({ title, description, children }: IProps) => {
  return (
    <div className="relative w-full border-b pb-6">
      <div className="">
        <div className="flex gap-2 items-center mb-3">
          {children}
          <h1 className="text-2xl font-medium font-inter">{title}</h1>
        </div>
        <span className="text-main-gray font-inter text-base block">{description}</span>
      </div>
    </div>
  );
};

export default Heading;
