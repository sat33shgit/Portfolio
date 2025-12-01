import React from 'react'

function cn(...classes) { return classes.filter(Boolean).join(' ') }

const Input = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <input
      ref={ref}
      className={cn('h-12 rounded-xl border border-gray-200 px-3 focus:border-[#1e3a5f] focus:ring-1 focus:ring-[#1e3a5f] w-full', className)}
      {...props}
    />
  )
})

export default Input
