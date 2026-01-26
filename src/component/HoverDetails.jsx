import React from 'react'

function HoverDetails() {
  return (
    <div className="absolute inset-0 bg-black/60 text-white flex items-center justify-center
                    opacity-0 group-hover:opacity-100 transition-opacity rounded">
      <h1 className='text-black'>More details here...</h1>
    </div>
  )
}

export default HoverDetails
