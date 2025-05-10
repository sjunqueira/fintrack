"use client";
import Image from "next/image";
import { Button } from "../_components/ui/button";
import { Github } from "lucide-react";

import { signIn } from "next-auth/react";

import React from "react";

const LoginPage = () => {
  return (
    <div className="grid h-full grid-cols-2">
      {/*Esquerda*/}
      <div className="flex h-full max-w-[800px] flex-col justify-center p-24">
        <div className="b-32 mx-auto rounded-2xl bg-neutral-900 p-8">
          <Image
            src={"/logo.svg"}
            alt="finance.ai"
            width={173}
            height={39}
            className="mb-8"
          ></Image>
          <h1 className="mb-8 text-4xl font-bold">Bem-vindo(a)</h1>
          <p className="text-muted-foreground mb-3">
            A Finance AI é uma plataforma de gestão financeira que utiliza IA
            para monitorar suas movimentações, e oferecer insights
            personalizados, facilitando o controle do seu orçamento.
          </p>
          <Button
            variant={"outline"}
            className="h-12 w-full"
            onClick={() =>
              signIn("github", {
                callbackUrl: "/dashboard",
              })
            }
          >
            <Github className="mr-2" />
            Fazer login com o Github
          </Button>
        </div>
      </div>
      {/*Direita*/}
      <div className="relative h-full w-full">
        <Image
          src="/login.png"
          alt="Faça login"
          fill
          className="object-cover"
        ></Image>
      </div>
    </div>
  );
};

export default LoginPage;
