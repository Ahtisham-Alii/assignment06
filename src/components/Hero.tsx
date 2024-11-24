import React from 'react'
import Image from 'next/image'

const Hero = () => {
  return (
    <main className='flex w-auto h-[800px] '>
     

{/* left */}
            <div className=' gap-6 pl-[80px] pr-[60px] pt-[281px]'>
                <h1 className='w-[500px] h-[134px] font-bold text-6xl'>Learn new skills online with ease</h1>
                <p className='w-[500px] h-[54px] font-normal text-[18px] leading-[27px] pt-[10px]'>Discover a wide range of courses covering a variety of subjects, taught by expert instructors.</p>
                <div className='flex gap-4 pt-[36px] mt-[5px] border-blacl'>
                <button className='w-[164px] h-[48px] font-normal text-base bg-black text-white rounded-md'>Start learning now</button>
                <button className='w-[164px] h-[48px] font-normal text-base bg-white rounded-md outline'>Explore Courses</button>
                </div>
            </div>

{/* right */}
            <div >
                <Image 
                src={"/a06.jfif"}
                alt="pic"
                width={640}
                height={900}
                />    
          </div>
         

          
        
    </main>
  )
}

export default Hero