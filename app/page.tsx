"use client";

import React, { useState } from "react";
import Navbar from "./ui/shared/navbar/navbar";
import Hero from "./ui/home/hero";
import About from "./ui/home/about";
import Footer from "./ui/home/footer";
import Contact from "./ui/home/contact";

const heroProps = {
  title: "Transforme Seu Corpo Com Pilates",
  description: "Fortaleça, alongue e tonifique em um ambiente acolhedor",
  buttonText: "Faça Uma Aula Experimental",
  ContactMessage: "Olá, eu gostaria de realizar uma aula experimental...",
};

const aboutProps = {
  title: "Conheça Os Nossos Treinos",
  description:
    "Escolha o treino ideal para você e alcance seus objetivos com a ajuda de nossos instrutores certificados.",
};

const footerProps = {
  rights: "2025 Pilates Studio. Todos os direitos reservados.",
};

// { name: "Sobre", href: "#", current: false },
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
};

const contactProps = {
  title: "Entre em Contato",
  button: "Enviar mensagem",
};

export default function App() {
  const [textArea, setTextArea] = useState("");

  const handleChangeTextArea = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setTextArea(event.target.value);
  };

  return (
    <div>
      <Navbar {...navbarProps} />
      <Hero
        buttonText={heroProps.buttonText}
        description={heroProps.description}
        title={heroProps.title}
        onClick={setTextArea}
        onClickMsg={heroProps.ContactMessage}
      />
      <About {...aboutProps} />
      <Contact
        button={contactProps.button}
        title={contactProps.title}
        onChange={handleChangeTextArea}
        value={textArea}
      />
      <Footer {...footerProps} />
    </div>
  );
}
