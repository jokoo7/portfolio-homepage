import { cn } from '@/lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';

const headingVariants = cva('scroll-m-20', {
  variants: {
    variant: {
      'h1-l':
        'text-[55px] leading-[120%] font-normal tracking-[-0.5px] text-[#201d15]',
      'h1-s':
        'text-[45px] leading-[120%] font-normal tracking-[-0.5px] text-[#201d15]',
      'h1-m':
        'text-[40px] leading-[120%] font-normal tracking-[-0.5px] text-[#201d15]',
      'h2-l':
        'text-[50px] leading-[1.2em] font-medium tracking-[-0.02em] text-black',
      'h2-s':
        'text-[45px] leading-[1.2em] font-medium tracking-[-0.02em] text-black',
      'h2-m':
        'text-[32px] leading-[1.2em] font-medium tracking-[-0.02em] text-black',
      'h3-l': 'text-[30px] leading-[1.3em] font-medium text-black',
      'h3-s': 'text-[30px] leading-[1.3em] font-medium text-black',
      'h3-m': 'text-[25px] leading-[1.3em] font-medium text-black',
      'h4-l': 'text-[24px] leading-[1.4em] font-medium text-black',
      'h4-s': 'text-[24px] leading-[1.4em] font-medium text-black',
      'h4-m': 'text-[20px] leading-[1.4em] font-medium text-black',
      h5: 'text-[20px] leading-[1.4em] font-medium text-black',
      h6: 'text-[16px] leading-[1.4em] font-bold text-[#333333]',
    },
  },
  defaultVariants: {
    variant: 'h1-l',
  },
});

type HeadingTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

interface HeadingProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof headingVariants> {
  as?: HeadingTag;
}

const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ as: Tag = 'h1', className, variant, ...props }, ref) => {
    return (
      <Tag
        className={cn(headingVariants({ variant, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);

Heading.displayName = 'Heading';

export { headingVariants, Heading };
