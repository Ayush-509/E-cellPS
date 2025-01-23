import React from 'react'

const Intro = () => {
  return (
    <div className='bg-black flex gap-[5vh] justify-center items-center h-[90vh] mt-[1vh]'>
        <div className='h-[60vh] w-[60vh] circle relative myborder rounded-full squid'>
            <div className="me h-[60vh] w-[60vh] rounded-full"></div>
        </div>
        <div className='h-0 w-0 triangle relative myborder flex justify-center'>
            <div className="striangle h-0 w-0 absolute top-[2vh]"></div>
            <div className="intro absolute top-[25vh] text-center ">

                <div className="name text-white font-bold text-6xl">Ayush Pandey</div>
                <div className="number text-white font-medium text-2xl mt-[2vh]">20231136</div>
            </div>
        </div>
        <div className='h-[50vh] w-[50vh] square relative myborder squid'>
            <a href="https://www.instagram.com/ayush_pandey1603/igsh=Nm55a2swaGxnanRw"><div className="insta h-[50vh] w-[50vh]"></div></a>
        </div>
    </div>
  )
}

export default Intro
