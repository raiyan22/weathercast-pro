import React from 'react'

function Footer() {
  return (
    <div className="flex items-center justify-between my-6">
      
        <a href="https://www.google.com" target='_blank' className="text-white text-sm font-medium transition ease-out"> <i className="pi pi-user
" /> Help </a>
<span className='text-white mx-2'>  </span>
        <a href="https://www.openweatherapi.com" target='_blank' className="text-white text-sm font-medium transition ease-out"> <i className="pi pi-exclamation-circle
" /> About </a>
      
    </div>
  )
}

export default Footer