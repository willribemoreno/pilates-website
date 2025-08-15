// app/api/patients/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { fetchNewCustomer } from '@/app/lib/data'; // ajuste o caminho conforme necessário

export async function POST(req: NextRequest) {
    try {
        const data = await req.json();

        const newCustomer = await fetchNewCustomer(data);

        return NextResponse.json({ success: true, customer: newCustomer }, { status: 201 });
    } catch (error) {
        console.error('Erro ao cadastrar paciente:', error);
        return NextResponse.json(
            { success: false, message: 'Erro ao cadastrar paciente.' },
            { status: 500 }
        );
    }
}
