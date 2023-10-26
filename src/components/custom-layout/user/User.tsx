import { GoBell } from "react-icons/go";
import { FiChevronDown } from "react-icons/fi";

export default function User() {
  return (
    <div className="flex justify-center items-center gap-5">
      <div className="h-10 w-10 flex justify-center items-center text-inactive bg-bg-light rounded-lg">
        <GoBell />
      </div>
      <div className="w-10 h-10 bg-avatar rounded-lg"></div>
      <div>
        <div className="text-base">Sallie McBride</div>
        <div className="text-xss">PATIENT</div>
      </div>
      <button>
        <FiChevronDown className="ml-[25px] text-1.5xl text-inactive" />
      </button>
    </div>
  );
}
