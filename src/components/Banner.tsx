import React from 'react'
import Image from 'next/image'

const Banner = () => {
  return (
   <main  className='flex w-auto h-[228px] mt-[125px] gap-[64px] pt-[80px] pb-[80px] bg-[#F7F7F7]'>
        <div className=' gap-[64px] '>
            <h5 className=' font-bold text-[24px] leading-[33.6px]'>Trusted by 2000+ companies worldwide.</h5>
              
        </div>
<div className='flex w-auto h-[56px] gap-[19.12px]'>

    <Image
    src={"/p1.png"}
    alt="pic"
    width={123.8}
    height={38.52}
    />

<Image
    src={"/p2.png"}
    alt="pic"
    width={123.8}
    height={38.52}
    />

<Image
    src={"/p3.png"}
    alt="pic"
    width={123.8}
    height={38.52}
    />

<Image
    src={"/p4.png"}
    alt="pic"
    width={123.8}
    height={38.52}
    />

<Image
    src={"/p5.png"}
    alt="pic"
    width={123.8}
    height={38.52}
    />

<Image
    src={"/p6.png"}
    alt="pic"
    width={123.8}
    height={38.52}
    />

</div>


   </main>
  )
}

export default Banner