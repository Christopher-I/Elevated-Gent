import { cn } from '@/lib/utils'

interface ContainerProps {
  children: React.ReactNode
  className?: string
  size?: 'small' | 'medium' | 'large' | 'xsmall' | 'full'
}

const containerSizes = {
  xsmall: 'max-w-xs',      // 20rem - max-width-small
  small: 'max-w-[30rem]',  // 30rem - max-width-medium
  medium: 'max-w-3xl',     // 48rem - max-width-large
  large: 'max-w-5xl',      // 64rem - max-width-xlarge
  full: 'max-w-[95rem]',   // 95rem - container-large (1520px)
}

export function Container({
  children,
  className,
  size = 'full'
}: ContainerProps) {
  return (
    <div
      className={cn(
        'w-full mx-auto',
        containerSizes[size],
        className
      )}
    >
      {children}
    </div>
  )
}

export function PagePadding({
  children,
  className
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div className={cn('px-6 md:px-8 lg:px-10', className)}>
      {children}
    </div>
  )
}