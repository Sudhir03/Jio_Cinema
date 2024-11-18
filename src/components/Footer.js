import { Link, useLocation } from "react-router-dom";

export default function Footer() {
  const location = useLocation();
  const renderFooter = !location.pathname.split("/").includes("premium");

  if (!renderFooter) return null;

  return (
    <footer className="bg-[#1a1a1a] text-white px-8 pt-12 ">
      <div className="flex justify-between">
        <div className="flex gap-20 w-[40%]">
          {/* JioCinema Section */}
          <div className="space-y-4 font-bold">
            <h2 className="text-xl ">JioCinema</h2>
            <nav className="flex flex-col space-y-2">
              <Link to="/" className="hover:text-gray-300">
                For You
              </Link>
              <Link to="/sports" className="hover:text-gray-300">
                Sports
              </Link>
              <Link to="/movies" className="hover:text-gray-300">
                Movies
              </Link>
              <Link to="tv-shows" className="hover:text-gray-300">
                TV Shows
              </Link>
            </nav>
          </div>

          {/* Support Section */}
          <div className="space-y-4 font-bold">
            <h2 className="text-xl ">Support</h2>
            <nav className="flex flex-col space-y-2">
              <Link href="#" className="hover:text-gray-300">
                Help Center
              </Link>
              <Link href="#" className="hover:text-gray-300">
                Terms of Use
              </Link>
              <Link href="#" className="hover:text-gray-300">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-gray-300">
                Content Complaints
              </Link>
            </nav>
          </div>
        </div>

        <div className="flex gap-16 ml-auto ">
          {/* Connect With Us Section */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Connect With Us</h2>
            <div className="flex items-center  gap-2 w-full ">
              <Link
                href="#"
                className="p-4 bg-[#333333] rounded-full hover:bg-[#444444]"
              >
                <img
                  src="/images/facebook.svg"
                  alt="facebook icon"
                  className="w-6 h-6"
                />
              </Link>
              <Link
                href="#"
                className="p-4 bg-[#333333] rounded-full hover:bg-[#444444]"
              >
                <img
                  src="/images/x.svg"
                  alt="twiter icon"
                  className="w-6 h-6"
                />
              </Link>
              <Link
                href="#"
                className="p-4 bg-[#333333] rounded-full hover:bg-[#444444]"
              >
                <img
                  src="/images/instagram.svg"
                  alt="instagram icon"
                  className="w-6 h-6"
                />
              </Link>
              <Link
                href="#"
                className="p-4 bg-[#333333] rounded-full hover:bg-[#444444]"
              >
                <img
                  src="/images/youtube.svg"
                  alt="youtube icon"
                  className="w-6 h-6"
                />
              </Link>
            </div>
          </div>

          {/* Download Section */}
          <div className="space-y-6  flex flex-col ">
            <h2 className="text-2xl  font-bold">Download the App</h2>
            <div className="flex items-center justify-between">
              <Link href="#" className="w-30">
                <img
                  src="/images//googlePlay.svg"
                  alt="Get it on Google Play"
                  width={100}
                  height={42}
                  className="h-auto w-full"
                />
              </Link>
              <Link href="#" className="w-30">
                <img
                  src="/images/appleStore.svg"
                  alt="Download on the App Store"
                  width={100}
                  height={42}
                  className="h-auto w-full"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="mt-6 py-4 border-t border-gray-800 flex items-center justify-between">
        <p className="text-xs font-semibold text-gray-100">
          Copyright © {new Date().getFullYear()} Viacom18 Media PVT LTD. All
          rights reserved.
        </p>
        <img
          src="/images/jio-logo.png"
          alt="jio cinema logo"
          className="w-12 h-12 "
        />
      </div>
    </footer>
  );
}
