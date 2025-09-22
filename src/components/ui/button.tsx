import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const buttonVariants = cva(
  // Base styles matching Webflow design
  'inline-flex items-center justify-center text-center font-sans text-sm font-normal uppercase tracking-wide border transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 relative overflow-hidden',
  {
    variants: {
      variant: {
        default: 'bg-black text-white border-black hover:bg-white hover:text-black',
        inverse: 'bg-white text-black border-black hover:bg-black hover:text-white',
        outline: 'border-black bg-transparent text-black hover:bg-black hover:text-white',
        ghost: 'border-transparent bg-transparent text-black hover:bg-black hover:text-white',
      },
      size: {
        default: 'px-8 py-4',
        sm: 'px-5 py-3',
        lg: 'px-10 py-5 text-base',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = 'Button'

export { Button, buttonVariants }