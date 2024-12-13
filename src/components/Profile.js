import React, { useRef, useEffect } from "react";
import { ChevronRight } from "lucide-react";
import { useCinema } from "../contexts/jioCinemaContext";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const { profileVisibility, setProfileVisibility } = useCinema();
  const sheetRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sheetRef.current && !sheetRef.current.contains(event.target)) {
        setProfileVisibility(false); // Directly set visibility to false instead of toggling
      }
    };

    if (profileVisibility) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [profileVisibility, setProfileVisibility]);

  if (!profileVisibility) return null;

  return (
    <div className="absolute top-[76.8px] inset-0 bg-gray-800 bg-opacity-50 flex justify-end h-dynamic w-full z-[2]">
      <div
        ref={sheetRef}
        className="top-0 relative w-[400px] bg-black opacity-90 h-[652px] mr-0 ml-auto pt-20 px-8 my-auto"
      >
        <img
          src="/images/avatar_guest.svg"
          className="absolute top-[40px] left-[40%] cursor-pointer"
          width={80}
          alt="user"
        />
        <div className="z-20 bg-zinc-950 h-[160px] rounded-3xl flex flex-col pt-10 items-center gap-4">
          <p className="cursor-pointer text-[25px] font-bold text-white">
            Guest
          </p>
          <button
            className="text-white text-[20px] font-bold w-[85px] bg-[#D9008D] h-[43px] rounded-3xl"
            onClick={() => {
              navigate("/login");
              setProfileVisibility(false);
            }}
          >
            Login
          </button>
        </div>

        <div className="flex flex-col">
          <div className="font-bold h-[70px] flex items-center justify-between text-white border-b-[1px] border-gray-900 cursor-pointer">
            <span>Settings</span>
            <ChevronRight />
          </div>

          <div className="font-bold h-[60px] flex items-center justify-between text-white cursor-pointer">
            <span>Help & Legal</span>
          </div>
        </div>

        <div className="absolute bottom-7 text-[12px] text-white border-b-[1px] border-white cursor-pointer font-bold hover:text-[#D900D8] hover:border-[#D9008D]">
          Privacy and T&C
        </div>
        <span className="absolute text-gray-600 font-semibold cursor-pointer bottom-2 text-[12px]">
          24.09.23.4-9a52aed-bbfa9709-257a-48cc-b8ee-fe2895a2e09a
        </span>
      </div>
    </div>
  );
}
