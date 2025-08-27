import { cn } from '@/lib/utils';
import { type VariantProps, cva } from 'class-variance-authority';
import * as React from 'react';

const buttonVariants = cva(
  'relative inline-flex shrink-0 items-center justify-center gap-[10px] rounded-[8px] border border-light-grey text-[14px] leading-[1.2em] font-medium transition-colors duration-200 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 cursor-pointer',
  {
    variants: {
      variant: {
        default: 'text-black bg-white hover:text-white hover:bg-black',
        dark: 'text-[#E8E9EE] bg-black hover:text-black hover:bg-white border-dark-grey',
      },
      size: {
        default: 'px-[20px] py-[10px]',
        big: 'px-[20px] py-[10px] h-[50px] text-[16px] [&_svg]:size-5',
        icon: 'w-[42px] aspect-square rounded-full',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
