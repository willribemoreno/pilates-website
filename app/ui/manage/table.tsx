'use client';

import { useState } from 'react';
import {
  useReactTable,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  getFilteredRowModel,
  flexRender,
} from '@tanstack/react-table';
import Image from 'next/image';
import { SortingState } from '@tanstack/react-table';
import Link from 'next/link';

const columns = [
  { accessorKey: 'name', header: 'Nome', sortable: true },
  { accessorKey: 'dateOfBirth', header: 'Data de Nascimento', sortable: true },
  { accessorKey: 'age', header: 'Idade', sortable: true },
  { accessorKey: 'phone', header: 'Telefone', sortable: false },
  { accessorKey: 'email', header: 'E-mail', sortable: false },
  { accessorKey: 'exams', header: 'Exames', sortable: false },
  { accessorKey: 'initialWeight', header: 'Peso Inicial', sortable: true },
  { accessorKey: 'currentWeight', header: 'Peso Atual', sortable: true },
  { accessorKey: 'enrollmentDate', header: 'Data de Inscrição', sortable: true },
  { accessorKey: 'relationshipDuration', header: 'Tempo de Relacionamento', sortable: true },
  { accessorKey: 'treatmentType', header: 'Tipo de Tratamento', sortable: true },
  { accessorKey: 'restrictions', header: 'Restrições' },
  {
    accessorKey: 'actions',
    header: 'Ações',
    cell: ({ row }) => <button className="text-blue-500">Ver</button>,
  },
];

const users = [
  {
    id: 1,
    name: 'Maria Silva',
    dateOfBirth: '15/03/1990',
    age: '33',
    phone: '(19) 99999-9999',
    exams: 'Button',
    initialWeight: '75.5',
    currentWeight: '68.2',
    enrollmentDate: '01/01/2023',
    relationshipDuration: '12 meses',
    treatmentType: 'Emagrecimento',
    restrictions: 'Glúten, Lactose',
    avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026024d',
    email: 'maria.silva@email.com',
  },
  {
    id: 2,
    name: 'João Santos',
    dateOfBirth: '22/07/1985',
    age: '38',
    phone: '(19) 99999-9999',
    exams: 'Button',
    initialWeight: '92.0',
    currentWeight: '85.5',
    enrollmentDate: '15/03/2023',
    relationshipDuration: '9 meses',
    treatmentType: 'Hipertrofia',
    restrictions: 'Nenhuma',
    avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026704d',
    email: 'joao.santos@email.com',
  },
  {
    id: 3,
    name: 'Ana Oliveira',
    dateOfBirth: '10/11/1995',
    age: '28',
    phone: '(19) 99999-9999',
    exams: 'Button',
    initialWeight: '65.0',
    currentWeight: '63.8',
    enrollmentDate: '01/06/2023',
    relationshipDuration: '6 meses',
    treatmentType: 'Manutenção',
    restrictions: 'Frutos do Mar',
    avatar: 'https://i.pravatar.cc/150?u=a04258114e29026702d',
    email: 'ana.oliveira@email.com',
  },
  {
    id: 4,
    name: 'Carlos Ferreira',
    dateOfBirth: '05/09/1988',
    age: '35',
    phone: '(19) 99999-9999',
    exams: 'Button',
    initialWeight: '88.3',
    currentWeight: '82.1',
    enrollmentDate: '01/09/2023',
    relationshipDuration: '3 meses',
    treatmentType: 'Emagrecimento',
    restrictions: 'Amendoim',
    avatar: 'https://i.pravatar.cc/150?u=a048581f4e29026701d',
    email: 'carlos.ferreira@email.com',
  },
  {
    id: 5,
    name: 'Paula Costa',
    dateOfBirth: '30/12/1992',
    age: '31',
    phone: '(19) 99999-9999',
    exams: 'Button',
    initialWeight: '70.2',
    currentWeight: '65.5',
    enrollmentDate: '15/10/2023',
    relationshipDuration: '2 meses',
    treatmentType: 'Reeducação Alimentar',
    restrictions: 'Lactose',
    avatar: 'https://i.pravatar.cc/150?u=a092581d4ef9026700d',
    email: 'paula.costa@email.com',
  },
  {
    id: 6,
    name: 'Paula Costa',
    dateOfBirth: '30/12/1992',
    age: '31',
    phone: '(19) 99999-9999',
    exams: 'Button',
    initialWeight: '70.2',
    currentWeight: '65.5',
    enrollmentDate: '15/10/2023',
    relationshipDuration: '2 meses',
    treatmentType: 'Reeducação Alimentar',
    restrictions: 'Lactose',
    avatar: 'https://i.pravatar.cc/150?u=a092581d4ef9026700d',
    email: 'paula.costa@email.com',
  },
  {
    id: 7,
    name: 'Paula Costa',
    dateOfBirth: '30/12/1992',
    age: '31',
    phone: '(19) 99999-9999',
    exams: 'Button',
    initialWeight: '70.2',
    currentWeight: '65.5',
    enrollmentDate: '15/10/2023',
    relationshipDuration: '2 meses',
    treatmentType: 'Reeducação Alimentar',
    restrictions: 'Lactose',
    avatar: 'https://i.pravatar.cc/150?u=a092581d4ef9026700d',
    email: 'paula.costa@email.com',
  },
  {
    id: 8,
    name: 'Paula Costa',
    dateOfBirth: '30/12/1992',
    age: '31',
    phone: '(19) 99999-9999',
    exams: 'Button',
    initialWeight: '70.2',
    currentWeight: '65.5',
    enrollmentDate: '15/10/2023',
    relationshipDuration: '2 meses',
    treatmentType: 'Reeducação Alimentar',
    restrictions: 'Lactose',
    avatar: 'https://i.pravatar.cc/150?u=a092581d4ef9026700d',
    email: 'paula.costa@email.com',
  },
  {
    id: 9,
    name: 'Paula Costa',
    dateOfBirth: '30/12/1992',
    age: '31',
    phone: '(19) 99999-9999',
    exams: 'Button',
    initialWeight: '70.2',
    currentWeight: '65.5',
    enrollmentDate: '15/10/2023',
    relationshipDuration: '2 meses',
    treatmentType: 'Reeducação Alimentar',
    restrictions: 'Lactose',
    avatar: 'https://i.pravatar.cc/150?u=a092581d4ef9026700d',
    email: 'paula.costa@email.com',
  },
  {
    id: 10,
    name: 'Paula Costa',
    dateOfBirth: '30/12/1992',
    age: '31',
    phone: '(19) 99999-9999',
    exams: 'Button',
    initialWeight: '70.2',
    currentWeight: '65.5',
    enrollmentDate: '15/10/2023',
    relationshipDuration: '2 meses',
    treatmentType: 'Reeducação Alimentar',
    restrictions: 'Lactose',
    avatar: 'https://i.pravatar.cc/150?u=a092581d4ef9026700d',
    email: 'paula.costa@email.com',
  },
  {
    id: 11,
    name: 'Paula Costa',
    dateOfBirth: '30/12/1992',
    age: '31',
    phone: '(19) 99999-9999',
    exams: 'Button',
    initialWeight: '70.2',
    currentWeight: '65.5',
    enrollmentDate: '15/10/2023',
    relationshipDuration: '2 meses',
    treatmentType: 'Reeducação Alimentar',
    restrictions: 'Lactose',
    avatar: 'https://i.pravatar.cc/150?u=a092581d4ef9026700d',
    email: 'paula.costa@email.com',
  },
  {
    id: 12,
    name: 'Paula Costa',
    dateOfBirth: '30/12/1992',
    age: '31',
    phone: '(19) 99999-9999',
    exams: 'Button',
    initialWeight: '70.2',
    currentWeight: '65.5',
    enrollmentDate: '15/10/2023',
    relationshipDuration: '2 meses',
    treatmentType: 'Reeducação Alimentar',
    restrictions: 'Lactose',
    avatar: 'https://i.pravatar.cc/150?u=a092581d4ef9026700d',
    email: 'paula.costa@email.com',
  },
  {
    id: 13,
    name: 'Paula Costa',
    dateOfBirth: '30/12/1992',
    age: '31',
    phone: '(19) 99999-9999',
    exams: 'Button',
    initialWeight: '70.2',
    currentWeight: '65.5',
    enrollmentDate: '15/10/2023',
    relationshipDuration: '2 meses',
    treatmentType: 'Reeducação Alimentar',
    restrictions: 'Lactose',
    avatar: 'https://i.pravatar.cc/150?u=a092581d4ef9026700d',
    email: 'paula.costa@email.com',
  },
  {
    id: 14,
    name: 'Paula Costa',
    dateOfBirth: '30/12/1992',
    age: '31',
    phone: '(19) 99999-9999',
    exams: 'Button',
    initialWeight: '70.2',
    currentWeight: '65.5',
    enrollmentDate: '15/10/2023',
    relationshipDuration: '2 meses',
    treatmentType: 'Reeducação Alimentar',
    restrictions: 'Lactose',
    avatar: 'https://i.pravatar.cc/150?u=a092581d4ef9026700d',
    email: 'paula.costa@email.com',
  },
  {
    id: 15,
    name: 'Paula Costa',
    dateOfBirth: '30/12/1992',
    age: '31',
    phone: '(19) 99999-9999',
    exams: 'Button',
    initialWeight: '70.2',
    currentWeight: '65.5',
    enrollmentDate: '15/10/2023',
    relationshipDuration: '2 meses',
    treatmentType: 'Reeducação Alimentar',
    restrictions: 'Lactose',
    avatar: 'https://i.pravatar.cc/150?u=a092581d4ef9026700d',
    email: 'paula.costa@email.com',
  },
];

export default function UserTable() {
  const [globalFilter, setGlobalFilter] = useState('');
  const [sorting, setSorting] = useState<SortingState>([]);
  const [pageIndex, setPageIndex] = useState(0);
  const [pageSize, setPageSize] = useState(10);

  const table = useReactTable({
    data: users,
    columns,
    state: {
      globalFilter,
      sorting,
      pagination: { pageIndex, pageSize },
    },
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onSortingChange: setSorting,
    onGlobalFilterChange: setGlobalFilter,
  });

  return (
    <div className="w-full h-min-screen">
      <div className="flex items-center justify-between mt-4">
        <input
          className="w-1/3 p-2 mb-4 border border-gray-300 rounded-md"
          type="text"
          placeholder="Buscar..."
          value={globalFilter}
          onChange={(e) => setGlobalFilter(e.target.value)}
        />
        <Link
          className="flex justify-end px-3 py-1 text-white bg-blue-500 rounded-md disabled:opacity-50"
          href="/manage/patients/add-new-patient"
        >
          Adicionar Paciente
        </Link>
      </div>
      <table className="w-full bg-white border border-gray-200 rounded-md shadow-sm">
        <thead className="bg-gray-200">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  className="p-2 text-left cursor-pointer hover:bg-gray-300"
                  onClick={header.column.getToggleSortingHandler()}
                >
                  {flexRender(header.column.columnDef.header, header.getContext())}
                  {header.column.getIsSorted() === 'asc'
                    ? ' 🔼'
                    : header.column.getIsSorted() === 'desc'
                      ? ' 🔽'
                      : ''}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id} className="border-b hover:bg-gray-100">
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} className="p-2">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex items-center justify-between p-2 mt-4">
        <button
          className="px-3 py-1 text-white bg-blue-500 rounded-md disabled:opacity-50"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          Anterior
        </button>
        <span>
          Página {pageIndex + 1} de {table.getPageCount()}
        </span>
        <button
          className="px-3 py-1 text-white bg-blue-500 rounded-md disabled:opacity-50"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          Próximo
        </button>
      </div>
    </div>
  );
}
