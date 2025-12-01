import React from 'react'

function cn(...classes) { return classes.filter(Boolean).join(' ') }

const VARIANTS = {
  default: 'bg-[#1e3a5f] text-white hover:bg-[#163248] focus:ring-[#1e3a5f]/30',
  outline: 'border border-gray-200 bg-white text-[#1e3a5f] hover:bg-[#1e3a5f] hover:text-white focus:ring-[#1e3a5f]/30',
  ghost: 'bg-transparent text-[#1e3a5f] hover:bg-gray-100',
  link: 'bg-transparent underline text-[#1e3a5f] hover:text-[#163248]'
}

const SIZES = {
  sm: 'px-3 py-1 text-sm',
  md: 'px-4 py-2 text-sm',
  lg: 'px-6 py-3 text-base'
}

const base = 'inline-flex items-center justify-center rounded-full font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2'

const Button = React.forwardRef(({ variant = 'default', size = 'md', className = '', children, as, href, ...props }, ref) => {
  const v = VARIANTS[variant] || VARIANTS.default
  const s = SIZES[size] || SIZES.md

  const Component = href ? (as || 'a') : (as || 'button')
  const componentProps = { ref, className: cn(base, v, s, className), ...(href ? { href } : {}), ...props }

  return (
    // render as <a> when href provided, otherwise as <button> (or `as` prop)
    React.createElement(Component, componentProps, children)
  )
})

export default Button
