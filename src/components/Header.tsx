import React from "react";

const Header = () => {
  return (
    <header className="bg-[#F7F7F7]  w-auto h-[72px]">
      <div className="container mx-8 flex justify-between items-center ">
        <div></div>
        <div className=" mt-[14px]">
          <div className="flex ">
            <img className=" w-[32.58px] h-[30.38px] mt-2" src="/lg.png" alt="logo" />
            <h2 className="font-extrabold text-2xl mt-2 h-[30px] w-[90px]">Ddsgnr</h2>
      

          <nav className=" bg-[#FFFFFF] w-[875px] h-[44px] pl-8  ml-40">
            <ul className=" flex pt-3 text-center gap-[32px] ">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/">Courses</a>
              </li>
              <li>
                <a href="/">Services</a>
              </li>
              <li>
                <a href="/">Achievement</a>
              </li>
              <li>
                <a href="/">About Us</a>
              </li>
              <li>
                <a href="/">Testimonal</a>
              </li>
              
             
            </ul>
            <div className="flex gap-7 ml-[600px] mt-[-35.5px] justify-center items-center">
            <button className=" bg-white hover:text-white hover:bg-black  1px w-[95px] h-[40px] rounded-md outline">Login</button>
              <button className=" bg-black text-white w-[95px] h-[40px]  rounded-md ">Sign Up</button>
              </div>
          </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
