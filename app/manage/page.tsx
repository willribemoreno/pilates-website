import Navbar from '@/app/ui/shared/navbar/navbar';
import Footer from '@/app/ui/home/footer';
import { signOut } from '@/auth';

const footerProps = {
  rights: '2025 Pilates Studio. Todos os direitos reservados.',
};

const navbarProps = {
  navigation: [
    { name: 'Início', href: '/' },
    { name: 'Aulas', href: '/#about' },
    { name: 'Contato', href: '/#contact' },
  ],
  menuItems: [
    { name: 'Meu Perfil', href: '#' },
    { name: 'Configurações', href: '#' },
    { name: 'Deslogar', href: '#' },
  ],
};

export default function Manage() {
  return (
    <div className="flex flex-col h-screen">
      <Navbar {...navbarProps} />
      <h1 className="flex flex-grow items-center justify-center text-2xl">Manage Section</h1>
      <button
        onClick={async () => {
          'use server';
          await signOut({ redirectTo: '/' });
        }}
      >
        Log out
      </button>
      <Footer {...footerProps} />
    </div>
  );
}
