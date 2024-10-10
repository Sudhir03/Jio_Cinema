// import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="ml-9">
      <ul className="flex gap-5 text-white font-bold opacity-70 mr-auto">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/sports">Sports</a>
        </li>
        <li>
          <a href="/movies">Movies</a>
        </li>
        <li>
          <a href="/tv-shows">TV Shows</a>
        </li>
        <li>More</li>
      </ul>
    </div>
  );
}
