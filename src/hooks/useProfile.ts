import { useQuery } from "@tanstack/react-query";

import { useAuth } from "./useAuth";
import { UserService } from "@/services/user.service";

export const useProfile = () => {
    const { user } = useAuth();
    const { data } = useQuery({
        queryKey: ["get profile"],
        queryFn: async () => UserService.getProfile(),
        select: ({ data }) => data,

        enabled: !!user,
    });
    return { profile: data };
};
