'use client';

import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

/* ————— validation schema ————— */
const schema = z.object({
  name: z.string().min(3, 'O campo nome é obrigatório'),
  birthDate: z.coerce.date({ message: 'Data de nascimento inválida' }),
  age: z.string().min(1, 'Idade inválida'),
  phone: z.string().min(10, 'Telefone inválido').max(11, 'Telefone inválido'),
  mail: z.string().email('E-mail inválido'),
  treatmentType: z.string().nonempty('Por favor, selecione uma opção'),
  initialWeight: z.coerce.number().min(2, 'Peso inicial inválido'),
  enrollmentDate: z.date().optional(), // ou z.coerce.date() se quiser forçar entrada
  restrictions: z.string().optional(),
  notes: z.string().optional(),
});
export type FormData = z.infer<typeof schema>;

export default function NewPatientPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    try {
      const res = await fetch('/api/patients', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error('Erro ao salvar');
      reset();
      alert('Paciente cadastrado com sucesso ✨');
    } catch (err) {
      alert((err as Error).message);
    }
  };

  return (
    <main className="flex flex-col items-center justify-start
                     w-full min-w-full min-h-screen overflow-y-auto
                     bg-white text-gray-900 p-6">

      {/* The card remains visually contained, but page now fills screen */}
      <section className="w-full min-w-full max-w-3xl
                          bg-background/50 backdrop-blur-lg
                          rounded-2xl shadow-xl p-6 sm:p-10">

        <h1 className="text-2xl font-semibold mb-8 text-center text-secondary">
          Adicionar novo paciente
        </h1>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 bg-gray-50">
          <div className="rounded-md bg-gray-50 p-4 md:p-6">
            <div>
              <label className="block text-sm font-semibold text-left mb-1 mt-5 text-blue-600">Nome *</label>
              <input
                placeholder='Digite o nome completo'
                {...register('name')}
                className="peer block w-full rounded-md border text-gray-500 border-gray-200 py-[9px] pl-3 text-sm outline-2 placeholder:text-gray-500"
              />
              {errors.name && (
                <p className="text-sm text-red-600 mt-1">{errors.name.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-semibold text-left mb-1 mt-5 text-blue-600">Data de nascimento *</label>
              <input
                type="date"
                {...register('birthDate')}
                className="peer block w-full rounded-md border text-gray-500 border-gray-200 py-[9px] pl-3 pr-3 text-sm outline-2 placeholder:text-gray-500"
              />
              {errors.birthDate && (
                <p className="text-sm text-red-600 mt-1">{errors.birthDate.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-semibold text-left mb-1 mt-5 text-blue-600">Idade *</label>
              <input
                placeholder='Idade do paciente'
                {...register('age')}
                className="peer block w-full rounded-md border text-gray-500 border-gray-200 py-[9px] pl-3 text-sm outline-2 placeholder:text-gray-500"
              />
              {errors.age && (
                <p className="text-sm text-red-600 mt-1">{errors.age.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-semibold text-left mb-1 mt-5 text-blue-600">Telefone *</label>
              <input
                type="phone"
                placeholder='(XX) XXXXX-XXXX'
                {...register('phone')}
                className="peer block w-full rounded-md border text-gray-500 border-gray-200 py-[9px] pl-3 text-sm outline-2 placeholder:text-gray-500"
              />
              {errors.phone && (
                <p className="text-sm text-red-600 mt-1">{errors.phone.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-semibold text-left mb-1 mt-5 text-blue-600">E-mail *</label>
              <input
                type="mail"
                placeholder='Digite o e-mail'
                {...register('mail')}
                className="peer block w-full rounded-md border text-gray-500 border-gray-200 py-[9px] pl-3 text-sm outline-2 placeholder:text-gray-500"
              />
              {errors.mail && (
                <p className="text-sm text-red-600 mt-1">{errors.mail.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-semibold mb-1 mt-5 text-blue-600">
                Tipo de Tratamento *
              </label>

              <select
                {...register('treatmentType', { required: 'Selecione uma opção' })}
                className="block w-full rounded-md border text-gray-500 border-gray-200
                          py-2 pl-3 text-sm outline-2"
                defaultValue="Pilates"
              >
                <option value="" disabled hidden>Selecione…</option>
                <option value="Pilates">Pilates</option>
                <option value="Fisioterapia">Fisioterapia</option>
                <option value="Alongamento">Alongamento</option>
                <option value="Fortalecimento">Fortalecimento</option>
              </select>

              {errors.treatmentType && (
                <p className="text-sm text-red-600 mt-1">{errors.treatmentType.message}</p>
              )}
          </div>

            <div>
              <label className="block text-sm font-semibold text-left mb-1 mt-5 text-blue-600">Restrições </label>
              <input
                type="text"
                placeholder='Restrições do paciente'
                {...register('restrictions')}
                className="peer block w-full rounded-md border text-gray-500 border-gray-200 py-[9px] pl-3 text-sm outline-2 placeholder:text-gray-500"
              />
              {errors.restrictions && (
                <p className="text-sm text-red-600 mt-1">{errors.restrictions.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-semibold text-left mb-1 mt-5 text-blue-600">Peso Inicial </label>
              <input
                type="text"
                placeholder='Peso atual do paciente'
                {...register('initialWeight')}
                className="peer block w-full rounded-md border text-gray-500 border-gray-200 py-[9px] pl-3 text-sm outline-2 placeholder:text-gray-500"
              />
              {errors.initialWeight && (
                <p className="text-sm text-red-600 mt-1">{errors.initialWeight.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-semibold text-left mb-1 mt-5 text-blue-600">Observações</label>
              <textarea
                placeholder='Observações adicionais sobre o paciente'
                rows={4}
                {...register('notes')}
                className="peer block w-full rounded-md border text-gray-500 border-gray-200 py-[9px] pl-3 text-sm outline-2 placeholder:text-gray-500"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-secondary hover:bg-secondary/90 text-white
                        font-bold py-3 px-6 mt-5 rounded-lg transition disabled:opacity-60 "
            >
              {isSubmitting ? 'Salvando…' : 'Salvar paciente'}
            </button>
          </div>
        </form>
      </section>
    </main>
  );
}
