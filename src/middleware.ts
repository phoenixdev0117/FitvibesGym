import NextAuth from "next-auth"

import authConfig from "@/auth.config"
import { apiAuthPrefix, DEFAULT_LOGIN_REDIRECT, authRoutes, publicRoutes, othersPrefix } from '@/routes'


const { auth } = NextAuth(authConfig)

export default auth((req): any => {
  const { nextUrl } = req;
  const isLoggedIn = !!req.auth;

  const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix);
  const isOthersRoute = othersPrefix.some((prefix) => {
    return nextUrl.pathname.startsWith(prefix)
  });
  const isPublicRoute = publicRoutes.includes(nextUrl.pathname) || nextUrl.pathname.includes("reservar/tobank");

  const isAuthRoute = authRoutes.includes(nextUrl.pathname);



  if (isOthersRoute) {
    return null;
  }
  if (isApiAuthRoute) {
    return null;
  }

  if (isAuthRoute) {
    if (isLoggedIn) {
      return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl))
    }
    return null;
  }

  if (!isLoggedIn && !isPublicRoute) {
    let callbackUrl = nextUrl.pathname;
    if (nextUrl.search) {
      callbackUrl += nextUrl.search;
    }

    const encodedCallbackUrl = encodeURIComponent(callbackUrl);

    return Response.redirect(new URL(
      `/auth/login?callbackUrl=${encodedCallbackUrl}`,
      nextUrl
    ));
  }

  return null;
})

// Optionally, don't invoke Middleware on some paths
export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
}