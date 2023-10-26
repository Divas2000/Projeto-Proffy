// import { NextRequest } from "next/server";

// export function middleware(request: NextRequest) {
//   if (request.nextUrl.pathname.startsWith("")) {
//     // TODO add file property to the request object
//   }
// }

export { default } from "next-auth/middleware";

export const config = { matcher: ["/welcome"] };
