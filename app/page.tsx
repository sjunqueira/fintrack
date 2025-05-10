// import Link from "next/link";
// import { Button } from "./_components/ui/button";

import Link from "next/link";
import { Button } from "./_components/ui/button";

export default function Home() {
  return (
    <div className="flex h-full items-center justify-center font-bold text-white">
      <div>
        <p>Seja bem vindo</p>
        <Button className="m-5">
          <Link href={"/login"}>Login</Link>
        </Button>
      </div>
    </div>
  );
}
