import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

const Header = () => {
  return (
    <div>
      <div className="m-5 mr-10 ml-10 flex h-8 justify-between">
        <Image src="logo.svg" alt="financeai" width={174} height={39}></Image>
        <div className="flex gap-3">
          <Button variant={"ghost"}>
            <Link href={"/"}>Home</Link>
          </Button>
          <Button variant={"ghost"}>
            <Link href={"/login"}>Login</Link>
          </Button>
          <Button variant={"ghost"}>
            <Link href={"/admin"}>Painel</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Header;
