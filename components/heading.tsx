type IProps = {
  title: string;
  description: string;
};

const Heading = ({ title, description }: IProps) => {
  return (
    <>
      <h4 className="font-inter text-4xl lg:text-5xl lg:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium text-black dark:text-white">
        {title}
      </h4>

      <p className="text-base max-w-2xl my-4 mx-auto text-neutral-600 text-center font-normal dark:text-neutral-400">
        {description}
      </p>
    </>
  );
};

export default Heading;
