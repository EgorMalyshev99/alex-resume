import { cva, type VariantProps } from 'class-variance-authority'

export { default as Button } from './Button.vue'

export const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2.5 rounded-xl px-4 py-3 font-display text-[17px] font-semibold leading-[22px] transition-colors disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        primary: 'bg-brand text-white hover:bg-brand-hover',
        ghost: 'text-brand hover:bg-brand hover:text-white',
      },
    },
    defaultVariants: {
      variant: 'ghost',
    },
  }
)

export type ButtonVariants = VariantProps<typeof buttonVariants>
