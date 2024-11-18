import { ChevronRight } from "lucide-react";

export default function User() {
  return (
    <>
      <div className="top-0 relative w-[400px] bg-black opacity-90 h-[652px]  mr-0 ml-auto pt-20 px-8  my-auto ">
        <img
          src="/images/avatar_guest.svg"
          className=" absolute top-[40px] left-[40%] cursor-pointer  "
          width={80}
          alt="user"
        ></img>
        <div className="z-20 bg-zinc-950 h-[160px] rounded-3xl  flex flex-col pt-10 items-center  gap-4">
          <p className=" cursor-pointer text-[25px] font-bold text-white">
            Guest
          </p>
          <button className="text-white text-[20px] font-bold w-[85px] bg-[#D9008D] h-[43px] rounded-3xl ">
            Login
          </button>
        </div>

        {/* after profile section including setting ,login and more*/}

        <div className="flex flex-col ">
          <div className="font-bold  h-[70px] flex items-center justify-between text-white border-b-[1px] border-gray-900 cursor-pointer ">
            <span>Settings</span>
            <ChevronRight></ChevronRight>
          </div>

          <div className="font-bold h-[60px] flex items-center justify-between text-white cursor-pointer">
            <span>Help & Legal</span>
          </div>
        </div>

        <div className=" absolute bottom-7 text-[12px]  text-white border-b-[1px] border-white cursor-pointer font-bold hover:text-[#D900D8] hover:border-[#D9008D] ">
          Privacy and T&C
        </div>
        <span className="absolute text-gray-600 font-semibold cursor-pointer bottom-2 text-[12px]">
          24.09.23.4-9a52aed-bbfa9709-257a-48cc-b8ee-fe2895a2e09a
        </span>
      </div>
    </>
  );
}
