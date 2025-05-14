"use client";
import { signIn } from "next-auth/react";

export function SignIn(authMethod: string) {
  if (authMethod == "Credentials") {
    return console.log(`Login via ${authMethod}`);
  }
  if (authMethod == "Github") {
    console.log(`Login via ${authMethod}`);
    return signIn("github", { redirectTo: "/dashboard" });
  }
  if (authMethod == "Google") {
    return console.log(`Login via ${authMethod}`);
  }
}
