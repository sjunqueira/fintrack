"use client";
import { useSession } from "next-auth/react";
import { SignOut } from "../_components/signout";
import { Button } from "../_components/ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { LoadingSpinner } from "../_components/ui/loadingspinner";

export default function Dashboard() {
  const { data: session, status } = useSession();
  const router = useRouter();

  if (status === "loading") {
    return <LoadingSpinner />;
  }

  if (session) {
    return (
      <div className="flex h-full flex-col items-center justify-center">
        <p>You are logged, welcome!</p>
        <Button className="m-5" onClick={SignOut}>
          Sair
        </Button>
      </div>
    );
  } else
    setTimeout(() => {
      router.push("/login");
    }, 3000);

  return (
    <div className="flex h-full flex-col items-center justify-center">
      <p>You are not authorized to view this page!</p>
      <h1>Redirecting in 3 seconds to login page...</h1>
      <h1>
        If you were not redirected,{" "}
        <Link href={"/login"} className="text-blue-400">
          click here
        </Link>
      </h1>
    </div>
  );
}
