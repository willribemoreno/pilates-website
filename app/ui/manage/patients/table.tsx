import Image from 'next/image';
import { UpdateInvoice, DeleteInvoice } from '@/app/ui/manage/patients/buttons';
import InvoiceStatus from '@/app/ui/manage/patients/status';
import { formatDateToLocal, formatCurrency } from '@/app/lib/utils';
import { fetchCustomers, fetchFilteredCustomers } from '@/app/lib/data';

export default async function InvoicesTable({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) {
  console.log('Query:', query); // Debugging line
  const customers = await fetchFilteredCustomers(query, currentPage);

  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
          <table className="hidden min-w-full text-gray-900 md:table">
            <thead className="rounded-lg text-left text-sm font-normal">
              <tr>
                <th scope="col" className="font-bold px-4 py-5 sm:pl-6">
                  Nome
                </th>
                <th scope="col" className="font-bold px-3 py-5">
                  Data de Nascimento
                </th>
                <th scope="col" className="font-bold px-3 py-5">
                  Idade
                </th>
                <th scope="col" className="font-bold px-3 py-5">
                  Telefone
                </th>
                <th scope="col" className="font-bold px-3 py-5">
                  E-mail
                </th>
                <th scope="col" className="font-bold px-3 py-5">
                  Exames
                </th>
                <th scope="col" className="font-bold px-3 py-5">
                  Peso Inicial
                </th>
                <th scope="col" className="font-bold px-3 py-5">
                  Peso Atual
                </th>
                <th scope="col" className="font-bold px-3 py-5">
                  Data de Inscrição
                </th>
                <th scope="col" className="font-bold px-3 py-5">
                  Tempo de Relacionamento
                </th>
                <th scope="col" className="font-bold px-3 py-5">
                  Tipo de Tratamento
                </th>
                <th scope="col" className="font-bold px-3 py-5">
                  Restrições
                </th>
                <th scope="col" className="font-bold relative py-3 pl-6 pr-3">
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {customers?.map((customer) => (
                <tr
                  key={customer.id}
                  className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                >
                  <td className="whitespace-nowrap py-3 pl-6 pr-12">
                    <div className="flex items-center gap-3">
                      <Image
                        src={customer.image_url}
                        className="rounded-full"
                        width={28}
                        height={28}
                        alt={`${customer.name}'s profile picture`}
                      />
                      <p>{customer.name}</p>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {formatDateToLocal(customer.birthdate)}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">{customer.age}</td>
                  <td className="whitespace-nowrap px-3 py-3">{customer.email}</td>
                  <td className="whitespace-nowrap px-3 py-3">{customer.phone}</td>
                  <td className="whitespace-nowrap px-3 py-3">{customer.exams}</td>
                  <td className="whitespace-nowrap px-3 py-3">{customer.initialweight}</td>
                  <td className="whitespace-nowrap px-3 py-3">{customer.currentweight}</td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {formatDateToLocal(customer.enrollmentdate)}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">{customer.relationshipduration}</td>
                  <td className="whitespace-nowrap px-3 py-3">{customer.treatmenttype}</td>
                  <td className="whitespace-nowrap px-3 py-3">{customer.restrictions}</td>
                  <td className="whitespace-nowrap px-3 py-3">
                    <InvoiceStatus status="Status" />
                  </td>
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex justify-end gap-3">
                      <UpdateInvoice id="Updated" />
                      <DeleteInvoice id="Deleted" />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
