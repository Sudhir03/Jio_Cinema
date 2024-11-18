import { useState } from "react";
import { ChevronRight } from "lucide-react";

function ProfileSetup() {
  const [userName, setUserName] = useState("Set_Your_Name_1668");
  const [userNumber, setUserNumber] = useState("+9150****4964");

  return (
    <div className="">
      <div className="top-0 relative w-[400px] bg-black opacity-90 h-[652px]  mr-0 ml-auto pt-20 px-8  my-auto ">
        <img
          src="/images/avatar_guest.svg"
          alt=""
          className=" absolute top-[40px] left-[40%] cursor-pointer  "
          width={80}
        ></img>
        <div className="z-20 bg-zinc-950 h-[240px] rounded-3xl  flex flex-col pt-14 items-center ">
          <p className=" cursor-pointer text-[24px] font-bold text-white">
            {userName}
          </p>
          <span className="cursor-pointer text-gray-400 font-semibold text-[17px]">
            {userNumber}
          </span>
          <div className="flex justify-center gap-10 my-7">
            <div className="cursor-pointer">
              <img
                src="/images/jio_cinema_kids_profile.avif"
                alt=""
                width={50}
              ></img>
              <p className=" text-sm text-white">For Kids</p>
            </div>

            <div className="cursor-pointer">
              <img src="/images/plus_icon.svg" alt="" width={50}></img>
              <span className="-ml-2 text-sm text-white">Add Profile</span>
            </div>
          </div>
        </div>

        {/* after profile section including setting ,login and more*/}

        <div className="flex flex-col ">
          <div className="  h-[70px] flex items-center justify-between text-white border-b-[1px] border-gray-900 cursor-pointer ">
            <span>Settings</span>
            <ChevronRight></ChevronRight>
          </div>
          <div className="h-[70px] flex items-center justify-between text-white border-b-[1px] border-gray-900 cursor-pointer">
            <span>Subscribe Now</span>
            <ChevronRight></ChevronRight>
          </div>
          <div className=" h-[60px] flex items-center justify-between text-white cursor-pointer">
            <span>Help & Legal</span>
          </div>
          <div className=" h-[50px] flex items-center justify-between text-white cursor-pointer">
            <span>Log Out</span>
            <ChevronRight></ChevronRight>
          </div>
        </div>

        <div className=" absolute bottom-7 text-[12px]  text-white border-b-[1px] border-white cursor-pointer font-bold hover:text-[#D900D8] hover:border-[#D900D8] ">
          Privacy and T&C
        </div>
        <span className="absolute text-gray-600 font-semibold cursor-pointer bottom-2 text-[12px]">
          24.09.23.4-9a52aed-bbfa9709-257a-48cc-b8ee-fe2895a2e09a
        </span>
      </div>
    </div>
  );
}

export default ProfileSetup;
