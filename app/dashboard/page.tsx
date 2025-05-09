import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/options";
import Image from "next/image";

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    return <p>Você precisa estar logado.</p>;
  }

  return (
    <div>
      <p>Bem-vindo, {session.user?.name}</p>
      <Image
        src={session.user?.image || "/defaultuser.png"}
        alt="user"
        width="50"
        height="50"
        className="rounded-xl"
      ></Image>
    </div>
  );
}
