import Image from "next/image";

export default async function DashboardPage() {
  return (
    <div>
      <p>Bem-vindo,</p>
      <Image
        src="/defaultuser.png"
        alt="user"
        width="50"
        height="50"
        className="rounded-xl"
      ></Image>
    </div>
  );
}
