import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";


const Footer = () => {
  return (
   <footer className='h-[684px] p-[80px] gap-[80px] '>
    <div className='h-[524px]'>
        <div className='flex  h-[82px]justify-between'>
            <div className='h-[51px]'>
                <p className='font-semibold text-[18px] leading-[27px]'>Subscribe to our newsletter</p>
                <span className='font-normal text-[16px] leading-[24px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
            </div>
            <div className='w-[400px] h-[82px] mt-[-20px] ml-[300px] '>
                <input type="text" placeholder='Enter your email' className='text-black outline gap-[8px] bg-transparent font-normal text-[16px] leading-[24px] border p-3  rounded-[5px] ' />
                <button className='outline ml-6 rounded-[5px] mt-[1.5%] mr-[4%] font-normal text-[16px] h-[48px]  leading-[24px] border px-6 py-3 '>Subscribe</button><br />
              <br />
                <p className='font-normal text-[12px] leading-[18px]'>By subscribing you agree to with our Privacy Policy</p>
               
            </div>
        
        </div>


        <div className='flex columns-4 h-[225px] gap-[40px] pt-[100px]'>
          <div className='flex w-[250px] h-[40px] gap-[8.02px]'>
          <img src="/lg.png" alt="logo" className='w-[32.58px] h-[30.38px]' />
            <p className='font-bold text-[25.07px] leading-[30.34px]'>Ddsgnr </p>
          </div>


          <div className='w-[250px] h-[225px] gap-[16px]'>
            <h4 className='font-semibold text-[16px] leading-[24px]'>Courses</h4>
            <ul className='py-2'>
              <li className='font-normal text-[14px] leading-[21px] py-2'>Business</li>
              <li className='font-normal text-[14px] leading-[21px] py-2'>Development</li>
              <li className='font-normal text-[14px] leading-[21px] py-2'>Technology</li>
              <li className='font-normal text-[14px] leading-[21px] py-2'>Design</li>
              <li className='font-normal text-[14px] leading-[21px] py-2'>Programming</li>
            </ul>
          </div>



          <div className='w-[250px] h-[225px] gap-[16px]'>
            <h4 className='font-semibold text-[16px] leading-[24px]'>Resources</h4>
            <ul className='py-2'>
              <li className='font-normal text-[14px] leading-[21px] py-2'>Career</li>
              <li className='font-normal text-[14px] leading-[21px] py-2'>Resume</li>
              <li className='font-normal text-[14px] leading-[21px] py-2'>Learning</li>
              <li className='font-normal text-[14px] leading-[21px] py-2'>Interview Preparation</li>
              <li className='font-normal text-[14px] leading-[21px] py-2'>Jobs</li>
            </ul>
          </div>







          <div className='w-[250px] h-[225px] gap-[16px]'>
            <h4 className='font-semibold text-[16px] leading-[24px]'>About Us</h4>
            <ul className='py-2'>
              <li className='font-normal text-[14px] leading-[21px] py-2'>Contact</li>
              <li className='font-normal text-[14px] leading-[21px] py-2'>Help/Support</li>
              <li className='font-normal text-[14px] leading-[21px] py-2'>FAQ</li>
              <li className='font-normal text-[14px] leading-[21px] py-2'>Terms and Conditions</li>
              <li className='font-normal text-[14px] leading-[21px] py-2'>Partners</li>
            </ul>
          </div>

        </div>




        

    </div>

    <div className='h-[57px] gap-[32px] mt-[-70px]  pt-2'>
      <div className='flex h-[24px] justify-between pt-8 border-black border-t-2  inset-0 bottom-0'>
        <div className='flex w-[564px] h-[21px] gap-[24px]'>
          <p className='font-normal text-[14px] leading-[21px]'>2023 Ddsgnr. All right reserved.</p>
          <p className='font-normal text-[14px] leading-[21px] underline'>Privacy Policy</p>
          <p className='font-normal text-[14px] leading-[21px] underline'>Terms of Service</p>
          <p className='font-normal text-[14px] leading-[21px] underline'>Cookies Settings</p>

          

        </div>

        <div className='flex w-[132px] h-[24px] gap-[12px]'>
        <a href="/"><FaFacebookF className="w-[24px] h-[24px]"/></a>
            <a href="/"><FaInstagram className="w-[24px] h-[24px]"/></a>
            <a href="/"><FaTwitter className="w-[24px] h-[24px]"/></a>
            <a href="/"><FaLinkedin className="w-[24px] h-[24px]"/></a>

        </div>




        

      </div>


        </div>

   </footer>
  )
}

export default Footer