import { Button } from "@/src/app/_components/ui/button";
import Link from "next/link";

const Error401 = () => {
  return (
    <div className="center flex h-full flex-col items-center justify-center align-middle">
      <p>Erro 404, se deu mal mané</p>
      <Button className="m-5">
        <Link href={"/"}>Voltar pra Home</Link>
      </Button>
    </div>
  );
};

export default Error401;
