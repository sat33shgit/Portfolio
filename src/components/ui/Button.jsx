import React from 'react'

function cn(...classes) {
  return classes.filter(Boolean).join(' ')
}

const variants = {
  default: 'bg-[#1e3a5f] text-white hover:bg-[#2d5a87] shadow-sm',
  outline: 'bg-transparent border border-[#1e3a5f] text-[#1e3a5f] hover:bg-[#1e3a5f] hover:text-white',
  ghost: 'bg-transparent hover:bg-gray-100'
}

const sizes = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-4 py-2 text-base',
  lg: 'px-6 py-3 text-lg'
}

const Button = React.forwardRef(({ variant = 'default', size = 'md', className, children, ...props }, ref) => {
  const variantClass = variants[variant] || variants.default
  const sizeClass = sizes[size] || sizes.md

  return (
    <button
      ref={ref}
      className={cn('inline-flex items-center justify-center rounded-xl transition-all duration-200', variantClass, sizeClass, className)}
      {...props}
    >
      {children}
    </button>
  )
})

export default Button
import React from 'react'

const base = 'inline-flex items-center justify-center font-medium rounded-full focus:outline-none focus:ring-4 focus:ring-offset-2 transition-transform transform-gpu'

const variants = {
  default: 'bg-[#1e3a5f] text-white hover:scale-105',
  outline: 'bg-transparent border border-[#1e3a5f] text-[#1e3a5f] hover:bg-[#1e3a5f] hover:text-white hover:scale-105',
  ghost: 'bg-transparent text-[#1e3a5f] hover:bg-gray-100'
}

const sizes = {
  sm: 'px-3 py-1 text-sm',
  md: 'px-4 py-2 text-base',
  lg: 'px-8 py-6 text-lg'
}

export default function Button({ variant = 'default', size = 'md', className = '', children, ...props }) {
  const v = variants[variant] || variants.default
  const s = sizes[size] || sizes.md
  return (
    <button className={`${base} ${v} ${s} ${className}`} {...props}>
      {children}
    </button>
  )
}
import React from 'react'

function cn(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Button({ className = '', variant = 'default', size = 'default', children, ...props }) {
  const base = 'inline-flex items-center justify-center rounded-full font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2'

  const variants = {
    default: 'bg-[#1e3a5f] text-white hover:bg-[#163248] focus:ring-[#1e3a5f]/30',
    outline: 'border border-gray-200 bg-white text-[#1e3a5f] hover:bg-[#1e3a5f] hover:text-white focus:ring-[#1e3a5f]/30',
    ghost: 'bg-transparent text-[#1e3a5f] hover:bg-gray-100',
    link: 'bg-transparent underline text-[#1e3a5f] hover:text-[#163248]'
  }

  const sizes = {
    sm: 'px-3 py-1 text-sm',
    default: 'px-4 py-2 text-sm',
    lg: 'px-6 py-3 text-base'
  }

  return (
    <button
      className={cn(base, variants[variant] || variants.default, sizes[size] || sizes.default, className)}
      {...props}
    >
      {children}
    </button>
  )
}
