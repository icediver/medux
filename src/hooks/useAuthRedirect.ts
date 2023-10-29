import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useAuth } from "./useAuth";

export const useAuthRedirect = () => {
  const { user } = useAuth();
  const { push, refresh } = useRouter();

  useEffect(() => {
    if (user) {
      push("/");
      refresh();
    }
  }, [user]);
};
