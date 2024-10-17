import { NavLink } from "react-router-dom";

export default function GoPremium() {
  return (
    <NavLink to="/premium">
      <div className="border-[2px] border-yellow-500 rounded-full flex gap-1 py-2 px-4 ml-2">
        <img src="/images/crown.svg" alt="crown" />
        <span className="text-yellow-500 text-xs font-bold">Go Premium</span>
      </div>
    </NavLink>
  );
}
