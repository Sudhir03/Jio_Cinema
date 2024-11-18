import { useCinema } from "../contexts/jioCinemaContext";
export default function Avatar() {
  const { setProfileVisibility } = useCinema();
  return (
    <div
      className="ml-9 h-10 w-10"
      onClick={() => setProfileVisibility((is) => !is)}
    >
      <img src="/images/avatar_guest.svg" alt="avatar" />
    </div>
  );
}
