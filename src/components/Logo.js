import { NavLink } from "react-router-dom";

export default function Logo() {
  return (
    <div className="w-36 h-9">
      <NavLink to="/">
        <img src="/images/jc_logo_v2.svg" alt="jio cinema logo" />
      </NavLink>
    </div>
  );
}
