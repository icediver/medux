import Cookies from "js-cookie";
import { usePathname } from "next/navigation";
import { FC, PropsWithChildren, useEffect } from "react";

import { useActions } from "@/hooks/useActions";
import { useAuth } from "@/hooks/useAuth";

import { protectedRoutes } from "./protected-routes.data";
import { REFRESH_TOKEN, getAccessToken } from "@/services/auth/auth.helper";
import Auth from "@/components/screens/auth/Auth";

const AuthProvider: FC<PropsWithChildren<unknown>> = ({ children }) => {
  const { user } = useAuth();
  const { checkAuth, logout } = useActions();

  const pathname = usePathname();
  useEffect(() => {
    const accessToken = getAccessToken();
    if (accessToken) checkAuth();
  }, []);

  useEffect(() => {
    const refreshToken = Cookies.get(REFRESH_TOKEN);
    if (!refreshToken && user) logout();
  }, [pathname]);

  const isProtectedRoute = protectedRoutes.some(
    (route) => pathname?.startsWith(route),
  );

  if (!isProtectedRoute) return <>{children}</>;

  if (user?.isAdmin) return <>{children}</>;
  if (user && isProtectedRoute) return <>{children}</>;

  if (pathname !== "/auth") return <Auth />;
  // if (pathname !== "/auth") router.push("/auth");
  return null;
};

export default AuthProvider;
