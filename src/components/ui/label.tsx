import * as React from 'react'
import { cn } from '@/lib/utils'

export interface LabelProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'inverse'
}

const Label = React.forwardRef<HTMLSpanElement, LabelProps>(
  ({ className, variant = 'default', ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={cn(
          // Base label styles matching Webflow design
          'inline-block px-3 py-2 text-xs font-serif uppercase tracking-wider leading-tight border border-black rounded-full whitespace-nowrap relative overflow-hidden transition-all duration-300 ease-in-out cursor-pointer hover:scale-105 active:scale-95',
          {
            'text-black bg-white border-black hover:bg-black hover:text-white': variant === 'default',
            'text-white bg-black border-white hover:bg-white hover:text-black': variant === 'inverse',
          },
          className
        )}
        {...props}
      />
    )
  }
)
Label.displayName = 'Label'

export { Label }