import React from "react";

import { ReactComponent as CoupleSvg } from '../assets/couple.svg'

const Hero = () => {
    return (
         <div name='home' className='w-full h-screen flex flex-col justify-between'>
         <div className='grid md:grid-cols-2 max-w-[1240px] my-auto'>
             <div className="">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
                    <CoupleSvg />
                </svg>
             </div>
            <div className='flex flex-col justify-center md:items-start w-full px-2 py-8 mx-0 md:mx-8'>
                 <p className='py-3 text-5xl md:text-8xl font-bold font-amatic'>MY PRECIOUS.SG</p>
                 <h1 className='py-3 text-2xl md:text-2xl font-amatic'>FINDING LOVE IN THIS LITTLE RED DOT</h1>
             </div>
         </div>
     </div>
        
    )
}

export default Hero