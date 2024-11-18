import Logo from "./Logo";
import GoPremium from "./GoPremium";
import Navbar from "./Navbar";
import Avatar from "./Avatar";
import Search from "./Search";

export default function Header() {
  return (
    <header className="bg-black w-full flex items-center px-12 py-[18px] border-b-[1px] border-white border-opacity-25 ">
      <Logo />
      <GoPremium />
      <Navbar />
      <Search />
      <Avatar />
    </header>
  );
}

//
