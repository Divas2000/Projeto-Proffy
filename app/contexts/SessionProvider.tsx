"use client";

import React, { ReactNode } from "react";
import { SessionProvider as NextSessionProvider } from "next-auth/react";

interface SessionProviderProps {
  children: ReactNode;
}

export default function SessionProvider({ children }: SessionProviderProps) {
  return <NextSessionProvider>{children}</NextSessionProvider>;
}
