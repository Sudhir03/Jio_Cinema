import { NavLink } from "react-router-dom";

export default function Search() {
  return (
    <div className="flex items-center ml-auto rounded-full bg-gray-700 px-4 py-2 gap-4">
      <img src="/images/ic_search.svg" alt="search icon" />
      <NavLink to="/search">
        <input
          id="query"
          className="bg-gray-700 outline-none text-white "
          type="text"
          placeholder="Movies, Shows and more"
        />
      </NavLink>
      <img src="/images/voice-search.svg" alt="mic icon" />
    </div>
  );
}
