import Link from "next/link";
import { Button } from "./_components/ui/button";

export default function Home() {
  return (
    <div className="flex justify-center font-bold text-blue-950">
      <div>
        <Button asChild>
          <Link href="/login">Eu sou um botão</Link>
        </Button>
      </div>
    </div>
  );
}
