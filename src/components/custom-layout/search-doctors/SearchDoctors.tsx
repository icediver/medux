"use client";

import { useSearch } from "@/hooks/useSearch";
import { LuSearch } from "react-icons/lu";
import SearchList from "./search-list/SearchList";
export default function SearchDoctors() {
  const { searchTerm, data, isSuccess, setSearchTerm } = useSearch();
  return (
    <div className="relative">
      <input
        typeof="text"
        className="h-11 w-[490px] rounded-lg bg-bg-light text-sm pl-12 text-logo focus:outline-none "
        placeholder="Search patients or doctors"
        value={searchTerm}
        onKeyPress={(key) => {
          if (key.charCode === 13) setSearchTerm("");
        }}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <LuSearch className="absolute text-gray-600/40 left-4 top-2.5 text-xl" />
      {isSuccess && <SearchList users={data?.users || []} />}
    </div>
  );
}
