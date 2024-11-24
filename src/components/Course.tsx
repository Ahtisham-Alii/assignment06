import React from 'react'
import Image from 'next/image'

const Course = () => {
  return (
    <main className='w-auto h-[1542px] mt-[-20px] pb-[112px] gap-[60px]'>
        <div className='w-[768px] h-[118px] ml-[20%] gap-[24px]'>
            <h1 className='w-[768px] h-[67px] font-bold text-[56px] leading-[67.2px] text-center'>Courses</h1>
            <p className=' h-[27px] mt-[15px] font-normal text-[18px] leading-[27px] text-center'>Your Ultimate Guide to learning</p>
<nav className='w-auto h-[40px] flex justify-items-center mt-[50px] pl-[230px] items-center'>
  <ul className='flex  gap-[30px] '>
    <li className='font-normal text-[16px] leading-[24px] underline underline-offset-[18px] '>Popular</li>
    <li>Recommended</li>
    <li>Best Price</li>
  </ul>
</nav>
</div>



<div className='flex gap-[20px] mt-[150px]  h-[534px] '>
  <div className='w-[400px]  bg-[#F7F7F7] h-[534px] rounded-[5px]  gap-[24px] '>
    <div>
      <Image
      src={"/c1.jfif"}
      alt="c1"
      width={416}
      height={300}
      />
    </div>
    <div className=' flex w-[416px] h-[210px] pt-[20px] gap-[24px] '>
      <p className='flex w-[326px] h-[21px] font-semibold text-[14px] leading-[21px] pl-4'>Design</p>
      
      <p className='flex mr-4 gap-[8px] font-semibold text-[14px]  leading-[21px] pr-[20px]'> <img src="/star.png" alt="lg" className='w-[24px] h-[24px] '/> 5.0</p>
    </div>
    <div className='ml-4 mt-[-160px]'>
    <h5 className='font-bold pb-[10px] text-[24px] leading-[33.6px]'>UX/UI Design 201</h5>
    <p className='font-normal text-[16px] leading-[24px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
    <button className=' w-[116px] h-[40px] mt-[30px] outline rounded-[2px] font-normal text-[16px] leading-[24px]'>Enroll Now </button>
    <span className='ml-[20px] font-medium text-[16px] leading-[24px]'> $400</span>
    </div>

  </div>
  <div className='w-[400px]  bg-[#F7F7F7] h-[534px] rounded-[5px] '>
    <div>
      <Image
      src={"/c2.jfif"}
      alt="c1"
      width={416}
      height={300}
      />
    </div>
    <div className='flex w-[416px] h-[210px] pt-[20px] gap-[24px] '>
      <p className='flex  w-[326px] h-[21px] font-semibold text-[14px] leading-[21px] pl-4'>Programmimg</p>
      
      <p className='flex mr-3 gap-[8px] font-semibold text-[14px]  leading-[21px] pr-[20px]'> <img src="/star.png" alt="lg" className='w-[24px] h-[24px]  '/> 5.0</p>
    </div>
    <div className='ml-4 mt-[-160px]'>
    <h5 className='font-bold pb-[10px] text-[24px] leading-[33.6px]'>Introduction to Python</h5>
    <p className='font-normal text-[16px] leading-[24px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
    <button className=' w-[116px] h-[40px] mt-[30px] outline rounded-[2px] font-normal text-[16px] leading-[24px]'>Enroll Now </button>
    <span className='ml-[20px] font-medium text-[16px] leading-[24px]'> $400</span>
    </div>

  </div>
  <div className='w-[410px]  bg-[#F7F7F7] h-[534px] rounded-[5px] '>
    <div>
      <Image
      src={"/c3.jfif"}
      alt="c1"
      width={416}
      height={300}
      />
    </div>
    <div className='flex  w-[416px] h-[210px] pt-[20px] gap-[24px] '>
      <p className='flex w-[326px] h-[21px] font-semibold text-[14px] leading-[21px] pl-4'>Business</p>
      
      <p className='flex gap-[8px] font-semibold text-[14px]  leading-[21px] pr-[20px]'> <img src="/star.png" alt="lg" className='w-[24px] h-[24px]  '/> 5.0</p>
    </div>
    <div className='mt-[-160px] ml-4'>
    <h5 className='font-bold pb-[10px] text-[24px] leading-[33.6px]'>Data Analysis for Beginners</h5>
    <p className='font-normal text-[16px] leading-[24px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
    <button className=' w-[116px] h-[40px] mt-[30px] outline rounded-[2px] font-normal text-[16px] leading-[24px]'>Enroll Now </button>
    <span className='ml-[20px] font-medium text-[16px] leading-[24px]'> $400</span>
    </div>

  </div>
  

</div>







<div className='flex gap-[20px] mt-[70px]  h-[534px] '>
  <div className='w-[400px]  bg-[#F7F7F7] h-[534px] rounded-[5px]  gap-[24px] '>
    <div>
      <Image
      src={"/4.jfif"}
      alt="c1"
      width={416}
      height={300}
      />
    </div>
    <div className=' flex w-[416px] h-[210px] pt-[20px] gap-[24px] '>
      <p className='flex w-[326px] h-[21px] font-semibold text-[14px] leading-[21px] pl-4'>Art</p>
      
      <p className='flex mr-4 gap-[8px] font-semibold text-[14px]  leading-[21px] pr-[20px]'> <img src="/star.png" alt="lg" className='w-[24px] h-[24px] '/> 5.0</p>
    </div>
    <div className='ml-4 mt-[-160px]'>
    <h5 className='font-bold pb-[10px] text-[24px] leading-[33.6px]'>Art Specialization</h5>
    <p className='font-normal text-[16px] leading-[24px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
    <button className=' w-[116px] h-[40px] mt-[30px] outline rounded-[2px] font-normal text-[16px] leading-[24px]'>Enroll Now </button>
    <span className='ml-[20px] font-medium text-[16px] leading-[24px]'> $400</span>
    </div>

  </div>
  <div className='w-[400px]  bg-[#F7F7F7] h-[534px] rounded-[5px] '>
    <div>
      <Image
      src={"/5.jfif"}
      alt="c1"
      width={416}
      height={300}
      />
    </div>
    <div className='flex w-[416px] h-[210px] pt-[20px] gap-[24px] '>
      <p className='flex  w-[326px] h-[21px] font-semibold text-[14px] leading-[21px] pl-4'>Law</p>
      
      <p className='flex mr-3 gap-[8px] font-semibold text-[14px]  leading-[21px] pr-[20px]'> <img src="/star.png" alt="lg" className='w-[24px] h-[24px]  '/> 5.0</p>
    </div>
    <div className='ml-4 mt-[-160px]'>
    <h5 className='font-bold pb-[10px] text-[24px] leading-[33.6px]'>Rule of Law</h5>
    <p className='font-normal text-[16px] leading-[24px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
    <button className=' w-[116px] h-[40px] mt-[30px] outline rounded-[2px] font-normal text-[16px] leading-[24px]'>Enroll Now </button>
    <span className='ml-[20px] font-medium text-[16px] leading-[24px]'> $400</span>
    </div>

  </div>
  <div className='w-[410px]   bg-[#F7F7F7] h-[534px] rounded-[5px] '>
    <div>
      <Image
      src={"/c6.jfif"}
      alt="c1"
      width={416}
      height={300}
      className='h-[265px]'
      />
    </div>
    <div className='flex  w-[416px] h-[210px] pt-[20px] gap-[24px] '>
      <p className='flex w-[326px] h-[21px] font-semibold text-[14px] leading-[21px] pl-4'>Tech</p>
      
      <p className='flex gap-[8px] font-semibold text-[14px]  leading-[21px] pr-[20px]'> <img src="/star.png" alt="lg" className='w-[24px] h-[24px]  '/> 5.0</p>
    </div>
    <div className='mt-[-160px] ml-4'>
    <h5 className='font-bold pb-[10px] text-[24px] leading-[33.6px]'>Introduction to webflow</h5>
    <p className='font-normal text-[16px] leading-[24px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
    <button className=' w-[116px] h-[40px] mt-[30px] outline rounded-[2px] font-normal text-[16px] leading-[24px]'>Enroll Now </button>
    <span className='ml-[20px] font-medium text-[16px] leading-[24px]'> $400</span>
    </div>

  </div>
  

</div>




<div className='px-[550px] py-[100px]'>
<button className=' font-normal text-[16px] leading-[24px] outline px-4 py-2 rounded-[5px]'>View All Courses</button>

</div>






    </main>
  )
}

export default Course