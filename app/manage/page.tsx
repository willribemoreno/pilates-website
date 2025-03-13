import Navbar from "@/app/ui/shared/navbar/navbar";
import Footer from "@/app/ui/home/footer";

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

export default function Manage() {
  return (
    <div className="flex flex-col h-screen">
      <Navbar {...navbarProps} />
      <h1 className="flex flex-grow items-center justify-center text-2xl">Manage Section</h1>
      <Footer {...footerProps} />
    </div>
  );
}
