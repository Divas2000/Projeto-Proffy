/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextResponse } from "next/server";

/**
 * A helper function using the NextResponse.json() method
 * with body, status and header with the `application/json`
 * as Content-Type
 * @param status HTTP status code
 * @param body data to be send
 * @returns NextResponse
 *
 * @see [NextResponse.json()](https://nextjs.org/docs/app/api-reference/functions/next-response#json)
 */
export function sendResponse(status: number, body: any) {
  return NextResponse.json(body, {
    status,
    headers: { "Content-Type": "application/json" },
  });
}
