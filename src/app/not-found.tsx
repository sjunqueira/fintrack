// app/not-found.tsx (ou pages/404.tsx, se estiver usando Pages Router)
import Image from "next/image";
import Link from "next/link";
import Header from "./_components/header";
import { Button } from "./_components/ui/button";

export default function NotFound() {
  return (
    <main>
      <Header />
      <div className="bg-background text-foreground flex h-screen flex-col items-center justify-center px-4 text-center">
        <Image
          src="/404.png" // Substitua pelo caminho da sua imagem
          alt="Página não encontrada"
          width={256}
          height={256}
          className="mb-8"
        />
        <h1 className="text-6xl font-bold">404</h1>
        <p className="text-muted-foreground mt-4 text-lg">
          Oops! A página que você procura não existe.
        </p>
        <Button variant={"default"} className="m-5 p-5">
          <Link href="/">Voltar para a página inicial</Link>
        </Button>
      </div>
    </main>
  );
}
