"use client";

import { Input } from "@headlessui/react";
import { Button } from "@headlessui/react";
import Link from "next/link";
import {
  AtSymbolIcon,
  KeyIcon,
} from "@heroicons/react/24/outline";
import { useActionState } from "react";
import { authenticate } from "@/app/lib/actions";
import Navbar from "@/app/ui/shared/navbar/navbar";
import Footer from "@/app/ui/home/footer";

const footerProps = {
  rights: "2025 Pilates Studio. Todos os direitos reservados.",
};

const navbarProps = {
  navigation: [
    { name: "Início", href: "#", current: true },
    { name: "Aulas", href: "#about", current: false },
    { name: "Contato", href: "#contact", current: false },
  ],
  menuItems: [
    { name: "Meu Perfil", href: "#" },
    { name: "Configurações", href: "#" },
    { name: "Deslogar", href: "#" },
  ],
}

export default function Login() {
  const [, formAction,] = useActionState(
    authenticate,
    undefined
  );

  return (
    <div className="flex flex-col h-screen">
      <Navbar {...navbarProps} />
      <form className="flex flex-grow items-center justify-center" action={formAction}>
        <div className="flex flex-col items-center rounded-lg px-6 pb-4 pt-8 w-full">
          <h1 className="text-3xl font-bold text-secondary">Log in</h1>
          <p className="mt-6 text-sm md:text-lg w-1/5">
            Por favor, insira suas credenciais para continuar...
          </p>
          <div className="w-1/5 text-left">
            <label
              className="mb-2 mt-5 block text-xs font-semibold text-left"
              htmlFor="email"
            >
              E-mail
            </label>
            <div className="relative">
              <Input
                className="peer block w-full rounded-md border text-gray-500 border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                name="email"
                type="text"
                placeholder="Insira seu endereço de e-mail"
              />
              <AtSymbolIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>
          <div className="w-1/5 text-left">
            <label
              className="mb-2 mt-5 block text-xs font-semibold text-left"
              htmlFor="password"
            >
              Password
            </label>
            <div className="relative">
              <Input
                className="peer block w-full rounded-md border text-gray-500 border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                name="password"
                type="text"
                placeholder="Insira sua senha"
              />
              <KeyIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>
          <Button
            type="submit"
            className="flex justify-center items-center w-1/5 px-7 py-3 my-3 bg-secondary text-primary font-bold rounded-full shadow-lg hover:bg-button-hover transition-all"
          >
            Log in
          </Button>
          <Link href="/">Esqueceu seu email ou senha?</Link>
        </div>
      </form>
      <Footer {...footerProps} />
    </div>
  );
}
