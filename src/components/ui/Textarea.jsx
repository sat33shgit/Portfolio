import React from 'react'

function cn(...classes) { return classes.filter(Boolean).join(' ') }

const Textarea = React.forwardRef(({ className, rows = 6, ...props }, ref) => {
  return (
    <textarea
      ref={ref}
      rows={rows}
      className={cn('rounded-xl border border-gray-200 bg-white px-3 py-2 focus:border-[#1e3a5f] focus:ring-1 focus:ring-[#1e3a5f] resize-none w-full', className)}
      {...props}
    />
  )
})

export default Textarea
