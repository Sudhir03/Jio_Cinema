import { BrowserRouter, NavLink } from "react-router-dom";

export default function Navbar() {
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
        <li>More</li>
      </ul>
    </div>
  );
}
