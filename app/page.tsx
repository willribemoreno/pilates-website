import React from "react";
import Navbar from "./ui/shared/navbar/navbar";
import Hero from "./ui/home/hero";
import About from "./ui/home/about";
import Footer from "./ui/home/footer";
import Contact from "./ui/home/contact";

const heroProps = {
  title: "Transforme Seu Corpo Com Pilates",
  description: "Fortaleça, alongue e tonifique em um ambiente acolhedor",
  buttonText: "Faça Uma Aula Experimental",
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

const App = () => (
  <div>
    <Navbar {...navbarProps} />
    <Hero {...heroProps} />
    <About {...aboutProps} />
    <Contact {...contactProps} />
    <Footer {...footerProps} />
  </div>
);

export default App;
