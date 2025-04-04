import Footer from '@/app/ui/home/footer';
import SideNav from '@/app/ui/manage/sidenav';

const footerProps = {
  rights: '2025 Pilates Studio. Todos os direitos reservados.',
};

export default function Manage() {
  return (
    <div className="flex flex-col h-screen">
      {/** <Navbar {...navbarProps} /> */}
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <h1 className="flex flex-grow items-center justify-center text-2xl">Manage Section</h1>
      <Footer {...footerProps} />
    </div>
  );
}
