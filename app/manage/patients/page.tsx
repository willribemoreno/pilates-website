'use client';

import Navbar from '@/app/ui/shared/navbar/navbar';
import Footer from '@/app/ui/home/footer';
import SideNav from '@/app/ui/manage/sidenav';
import { signOut } from '@/auth';
import Table from '@/app/ui/manage/table';

const footerProps = {
  rights: '2025 Pilates Studio. Todos os direitos reservados.',
};

const rows = [
  {
    key: '1',
    name: 'Tony Reichert',
    dateOfBirth: '26/02/1994',
    age: '31',
    phone: '(19) 99999-9999',
    exams: 'Button',
    initialWeight: '90',
    currentWeight: '88',
    enrollmentDate: '07/03/2024',
    relationshipDuration: '1 ano',
    treatmentType: 'Fisioterapia: Coluna',
    restrictions: 'Coração fraco',
    actions: '',
  },
  {
    key: '2',
    name: 'William',
    dateOfBirth: '26/02/1992',
    age: '33',
    phone: '(19) 99999-9999',
    exams: 'Button',
    initialWeight: '85',
    currentWeight: '80',
    enrollmentDate: '15/09/2024',
    relationshipDuration: '6 meses',
    treatmentType: 'Fisioterapia: Braço',
    restrictions: 'Ligamento parcialmente rompido',
    actions: '',
  },
  {
    key: '3',
    name: 'José Barbosa',
    dateOfBirth: '12/10/1990',
    age: '35',
    phone: '(19) 99999-9999',
    exams: 'Button',
    initialWeight: '95',
    currentWeight: '93',
    enrollmentDate: '25/08/2024',
    relationshipDuration: '7 meses',
    treatmentType: 'Pilates: Fortalecimento',
    restrictions: 'Coração fraco',
    actions: '',
  },
];

const columns = [
  {
    key: 'name',
    label: 'Nome',
  },
  {
    key: 'dateOfBirth',
    label: 'Data de Nascimento',
  },
  {
    key: 'age',
    label: 'Idade',
  },
  {
    key: 'phone',
    label: 'Telefone',
  },
  {
    key: 'initialWeight',
    label: 'Peso Inicial',
  },
  {
    key: 'currentWeight',
    label: 'Peso Atual',
  },
  {
    key: 'enrollmentDate',
    label: 'Data de Inscrição',
  },
  {
    key: 'relationshipDuration',
    label: 'Tempo de Relacionamento',
  },
  {
    key: 'treatmentType',
    label: 'Tipo de Tratamento',
  },
  {
    key: 'restrictions',
    label: 'Restrições',
  },
  {
    key: 'actions',
    label: 'Ações',
  },
];

export default function Patients() {
  return (
    <div className="h-screen flex flex-row">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <div className="w-full flex min-h-screen items-center justify-center p-6 mt-3">
        <div className="w-full min-h-screen flex flex-1 pb-6">
          <Table />
        </div>
      </div>
    </div>
  );
}
