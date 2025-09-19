import { cva, VariantProps } from 'class-variance-authority';
import React from 'react';

export const headingVariants = cva('', {
  variants: {
    as: {
      h1: 'font-normal tracking-[-0.5px] text-[#201d15] leading-[120%]',
      h2: 'font-medium tracking-[-0.02em] text-black leading-[1.2em]',
      h3: 'font-medium text-black leading-[1.3em]',
      h4: 'font-medium text-black leading-[1.4em]',
      h5: 'font-medium text-black leading-[1.4em]',
      h6: 'font-bold text-[#333333] leading-[1.4em]',
    },
  },
});

type HeadingProps = React.HTMLAttributes<HTMLHeadingElement> &
  Required<Pick<VariantProps<typeof headingVariants>, 'as'>>;

export function Heading({ as, className, children, ...props }: HeadingProps) {
  const Component = as!;

  return (
    <Component className={headingVariants({ as, className })} {...props}>
      {children}
    </Component>
  );
}
