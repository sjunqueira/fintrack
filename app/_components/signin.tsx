"use client";
import { signIn } from "next-auth/react";

export function SignIn() {
  return signIn("github", { redirectTo: "/admin" });
}
