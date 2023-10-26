import { LuSearch } from "react-icons/lu";
export default function SeaarchDoctors() {
  return (
    <div className="relative">
      <input
        typeof="text"
        className="h-10 w-[490px] rounded-lg bg-bg-light text-sm pl-12 text-logo"
        placeholder="Search patients or doctors"
      />
      <LuSearch className="absolute text-gray-600/40 left-4 top-2.5 text-xl" />
    </div>
  );
}
