import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";

const Headerr = () => {
  return (
    <main className="bg-[#F7F7F7]  h-[54px] mb-3 pl-[62px] pr-[64px]">
      <div className="flex w-[1154px] h-[54px] gap-[32px] pt-[12px] pb-[12px]">
        <div className="flex  w-[386px] h-[30px] gap-4">
          <p className="w-[205px] h-[21px] font-normal text-[14px] leading-[21px]">Phone Number:956 742 455 678</p>
          <span className="items-center border border-[#676767]"></span>
          <span className="w-[149px] h-[21px]  font-normal text-[14px] leading-[21px] ">Email:info@ddsgnr.com</span>
        </div>
        <div className="flex w-[132px] h-[24px] gap-[12px] pl-[600px] ">
            <a href="/"><FaFacebookF className="w-[24px] h-[24px]"/></a>
            <a href="/"><FaInstagram className="w-[24px] h-[24px]"/></a>
            <a href="/"><FaTwitter className="w-[24px] h-[24px]"/></a>
            <a href="/"><FaLinkedin className="w-[24px] h-[24px]"/></a>

        </div>
      </div>
    </main>
  );
};

export default Headerr;
