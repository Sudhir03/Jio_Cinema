import { NavLink } from "react-router-dom";

function Avatar() {
  return (
    <div className="ml-9 h-10 w-10">
      <NavLink to="/profile">
        <img src="/images/avatar_guest.svg" alt="avatar" />
      </NavLink>
    </div>
  );
}

export default Avatar;
