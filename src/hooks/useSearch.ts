import { UserService } from "@/services/user.service";
import { useQuery } from "@tanstack/react-query";
import { useDebounce } from "./useDebounce";
import { useMemo, useState } from "react";
import { useAuth } from "./useAuth";
import { RoleTypeEnum } from "@/types/user.interface";

export const useSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { user } = useAuth();
  let roleFilter: { role: RoleTypeEnum } = {} as { role: RoleTypeEnum };

  if (user?.role === RoleTypeEnum.DOCTOR)
    roleFilter.role = RoleTypeEnum.PATIENT;
  if (user?.role === RoleTypeEnum.PATIENT)
    roleFilter.role = RoleTypeEnum.DOCTOR;

  const searchParams = useMemo(
    () => ({
      searchTerm,
      ...roleFilter,
    }),
    [searchTerm, user?.role],
  );

  const debouncedSearch = useDebounce(searchParams, 500);
  const { data, isLoading, isSuccess } = useQuery({
    enabled: !!debouncedSearch.searchTerm,
    queryKey: ["agents", Object.values(debouncedSearch)],
    queryFn: () => UserService.getAll(debouncedSearch),
  });

  return {
    data,
    isLoading,
    isSuccess,
    searchTerm,
    setSearchTerm,
  };
};
