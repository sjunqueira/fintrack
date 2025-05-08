import { Avatar, AvatarFallback, AvatarImage } from "./_components/ui/avatar";

export default function Home() {
  return (
    <div className="align flex justify-center font-bold text-blue-950">
      <div className="flex flex-row gap-5">
        <Avatar>
          <AvatarImage src="https://github.com/sjunqueira.png" />
          <AvatarFallback>SJ</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
}
