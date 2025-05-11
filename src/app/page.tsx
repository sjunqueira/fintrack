// import Link from "next/link";
// import { Button } from "./_components/ui/button";

import Link from "next/link";
import { Button } from "./_components/ui/button";
import Header from "./_components/header";

export default function Home() {
  return (
    <main className="flex h-full w-full flex-col font-bold text-white">
      <Header />
      <div className="flex h-full w-full items-center justify-center font-bold text-white">
        <div>
          <p>Seja bem vindo</p>
          <Button className="m-5">
            <Link href={"/login"}>Login</Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
