import { ChevronDown, ChevronUp } from "lucide-react";
import { NavLink } from "react-router-dom";

export default function Navbar({ showMorePanel, setShowMorePanel }) {
  return (
    <div className="ml-9">
      <ul className="flex gap-5 text-white font-bold opacity-70 mr-auto">
        <li>
          <NavLink to="/"  className="nav-item py-5 opacity-50">Home</NavLink>
        </li>
        <li>
          <NavLink to="/sports"  className="nav-item py-5 opacity-50">Sports</NavLink>
        </li>
        <li>
          <NavLink to="/movies" className="nav-item py-5 opacity-50">Movies</NavLink>
        </li>
        <li>
          <NavLink to="/tv-shows"  className="nav-item py-5 opacity-50">TV Shows</NavLink>
        </li>
        <li
          onClick={() => {
            setShowMorePanel((is) => !is);
          }}
          className={`flex items-center opacity-50 hover:opacity-100 cursor-pointer ${showMorePanel?"text-white":""}`}
        >
          More {showMorePanel ? <ChevronUp /> : <ChevronDown />}
        </li>
      </ul>
    </div>
  );
}
