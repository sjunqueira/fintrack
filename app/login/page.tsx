"use client";
import Image from "next/image";
import { Button } from "../_components/ui/button";
import { Github } from "lucide-react";

import { SignIn } from "../_components/signin";

import React from "react";
import GoogleLogo from "../_components/ui/google-logo";
import { Input } from "../_components/ui/input";
import { Separator } from "../_components/ui/separator";
import Header from "../_components/header";

const LoginPage = () => {
  return (
    <div className="flex flex-col">
      <Header />
      <div className="grid h-full grid-cols-1 lg:grid-cols-2">
        {/*Esquerda*/}
        <div className="flex h-full w-full flex-col justify-center px-6 py-12 md:p-24">
          <div className="mx-auto w-full max-w-md rounded-2xl bg-neutral-900 p-6 md:p-8">
            <Image
              src={"/logo.svg"}
              alt="finance.ai"
              width={173}
              height={39}
              className="mb-8"
            ></Image>
            <h1 className="mb-4 text-3xl font-bold md:text-4xl">
              Bem-vindo(a)
            </h1>
            <p className="text-muted-foreground mb-4 text-sm md:text-base">
              A Finance AI é uma plataforma de gestão financeira que utiliza IA
              para monitorar suas movimentações, e oferecer insights
              personalizados, facilitando o controle do seu orçamento.
            </p>
            <div className="flex w-full flex-col justify-center gap-4">
              <Input type="email" placeholder="Email" />
              <Input type="password" placeholder="Password" />
              <Button onClick={SignIn}>Fazer login</Button>
            </div>
            <Separator className="mt-4 mb-4" />
            <div className="flex w-full flex-col justify-center gap-4">
              <div className="text-muted-foreground text-center text-sm">
                Ou conecte-se usando uma conta já existente (Recomendado)
              </div>
              <Button
                variant={"outline"}
                className="w-50% h-12"
                onClick={SignIn}
              >
                <Github className="mr-2" />
                Fazer login com o Github
              </Button>
              <Button
                variant={"default"}
                className="w-50% h-12"
                onClick={SignIn}
              >
                <GoogleLogo width={20} height={20} />
                Fazer login com o Google
              </Button>
            </div>
          </div>
        </div>
        {/*Direita*/}
        <div className="relative hidden h-full w-full sm:hidden md:hidden lg:block">
          <Image
            src="/login.png"
            alt="Faça login"
            fill
            className="object-cover"
          ></Image>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
