"use client";
import { signOut } from "next-auth/react";

export function SignOut() {
  return signOut({ redirectTo: "/login" });
}
