import React from 'react'

const Navbar = () => {
  return (
    <div>
      <ul className='flex gap-8 items-center justify-end pr-8 h-12 myshadow'>
          <li className='hover:text-xl hover:text-[#EC8305]'><a href='http://localhost:5173/home'>Home</a></li>
          <li className='hover:text-xl hover:text-[#EC8305]'><a href='http://localhost:5173/'>Grid</a></li>
          <li className='hover:text-xl hover:text-[#EC8305]'><a href='https://www.linkedin.com/in/ayushp16032006'>LinkedIn</a></li>
        </ul>
    </div>
  )
}

export default Navbar
