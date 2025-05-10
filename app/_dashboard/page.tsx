"use client";
import { SessionProvider, useSession } from "next-auth/react";
import { SignOut } from "../_components/signout";
import { Button } from "../_components/ui/button";
import Link from "next/link";

export default function Dashboard() {
  const { data: session } = useSession();

  if (session) {
    return (
      <SessionProvider>
        <div className="flex h-full flex-col items-center justify-center">
          <p>You are logged, welcome!</p>
          <Button className="m-5" onClick={SignOut}>
            Sair
          </Button>
        </div>
      </SessionProvider>
    );
  }

  return (
    <SessionProvider>
      <div className="flex h-full flex-col items-center justify-center">
        <p>You are not authorized to view this page!</p>
        <Button className="m-5">
          <Link href={"/login"}>Login</Link>
        </Button>
      </div>
    </SessionProvider>
  );
}
