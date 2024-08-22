import { NextResponse } from "next/server";
import { auth } from "./app/_lib/auth";

// export function middleware(request) {
//   console.log(request);

//   return NextResponse.redirect(new URL("/about", request.url));
// }

// export const config = {
//   matcher: ["/account"],
// };

///////////////////////////////////

// export const middleware = auth;

// export const config = {
//   matcher: ["/account"],
// };

///////////////////////////////////////

export async function middleware(req) {
  const session = await auth();
  const { pathname } = req.nextUrl;

  // Redirect logged-in users trying to access the login page
  if (pathname === "/login" && session?.user) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  // Implement additional logic for other protected routes
  if (pathname.startsWith("/account") && !session?.user) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  // Redirect logged-in users trying to access the login page
  if (pathname === "/cabins/thankyou" && !session?.user) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/login", "/account/:path*", "/cabins/thankyou"], // Add paths you want the middleware to run on
};
