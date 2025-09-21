import { cn } from '@/lib/utils';

type WrapperProps = React.PropsWithChildren<
  React.HTMLAttributes<HTMLDivElement>
>;

const Wrapper = ({ className, children, ...rest }: WrapperProps) => {
  return (
    <div
      {...rest}
      className={cn(
        'w-full px-[20px] py-[80px] md:px-[40px] md:py-[80px] lg:px-[100px] lg:py-[100px]',
        className
      )}
    >
      {children}
    </div>
  );
};

const WrapperContent = ({ className, children, ...rest }: WrapperProps) => {
  return (
    <div {...rest} className={cn('mx-auto w-full max-w-[1200px]', className)}>
      {children}
    </div>
  );
};

export { Wrapper, WrapperContent };
