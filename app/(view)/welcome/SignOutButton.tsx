"use client";

import { signOut } from "next-auth/react";
import { Power } from "lucide-react";

export function SignOutButton() {
  return (
    <button
      aria-label="Sair"
      onClick={() => signOut()}
      className="rounded-full p-2 transition-colors duration-300 hover:bg-purple-600"
    >
      <Power />
    </button>
  );
}
