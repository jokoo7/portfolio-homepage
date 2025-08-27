import { cn } from '@/lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';

const paragraphVariants = cva('text-dark-grey leading-[1.6em]', {
  variants: {
    variant: {
      default: 'text-[18px]',
      small: 'text-[16px] leading-[1.5em] text-[#4A4A45]',
      reguler: 'leading-[1.5em]',
      medium: 'leading-[1.5em] font-medium text-black',
      semibold: 'leading-[1.7em] font-semibold text-black',
      card: 'text-[#4A4A45]',
      caption: 'text-[15px] leading-[1.4em] font-medium text-black',
      captionSemibold: 'text-[15px] leading-[1.2em] font-semibold text-black',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

type ParagraphProps = React.PropsWithChildren<
  React.HTMLAttributes<HTMLParagraphElement> &
    VariantProps<typeof paragraphVariants>
>;

const Paragraph = ({
  children,
  variant,
  className,
  ...props
}: ParagraphProps) => {
  return (
    <p className={cn(paragraphVariants({ variant }), className)} {...props}>
      {children}
    </p>
  );
};

export { Paragraph, paragraphVariants };
