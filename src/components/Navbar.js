import { ChevronDown, ChevronUp } from "lucide-react";
import { NavLink } from "react-router-dom";

export default function Navbar({ showMorePanel, setShowMorePanel }) {
  return (
    <div className="ml-9">
      <ul className="flex gap-5 text-white font-bold opacity-70 mr-auto">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/sports">Sports</NavLink>
        </li>
        <li>
          <NavLink to="/movies">Movies</NavLink>
        </li>
        <li>
          <NavLink to="/tv-shows">TV Shows</NavLink>
        </li>
        <li
          onClick={() => {
            setShowMorePanel((is) => !is);
          }}
          className="flex items-center"
        >
          More {showMorePanel ? <ChevronUp /> : <ChevronDown />}
        </li>
      </ul>
    </div>
  );
}
