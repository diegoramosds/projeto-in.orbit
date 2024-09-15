import type { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

export function Label(props: ComponentProps<'label'>) {
  return (
    <label
      {...props}
      className={twMerge(
        'font-medium md:text-sm text-xs tracking-tight leading-normal',
        props.className
      )}
    />
  )
}
