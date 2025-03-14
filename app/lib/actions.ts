'use server';

import { OWNER_INFOS } from './constants';
import { redirect } from 'next/navigation'
import { signIn } from '@/auth';
import { AuthError } from 'next-auth';

export async function createWhatsAppLink(phoneNumber: string, message: string) {
    const baseUrl = 'https://whatsa.me/';
    const encodedMessage = encodeURIComponent(message);
    const finalUrl = `${baseUrl}${phoneNumber}/?t=${encodedMessage}`;
    return finalUrl;
}

export type State = string | null;

export async function createCustomWhatsAppLink(data: FormData) {

    const name = data.get('name');
    const phone = data.get('phone');
    const message = data.get('message');
    const number = OWNER_INFOS.phoneNumber;

    const finalMessage = `Nome: ${name}.\nMensagem: ${message}\nWhatsApp: ${phone}`;
    const finalUrl = createWhatsAppLink(number, finalMessage);

    return finalUrl;
}

export async function redirectToWhatsApp(prevState: State, data: FormData): Promise<string | null> {
    console.log(prevState);
    const url = await createCustomWhatsAppLink(data);

    if (url) {
        window.open(url, "_blank"); // Open the URL in a new tab
    }
    redirect('#contact');

    return url;
}

export async function authenticate(
    prevState: string | undefined,
    formData: FormData,
) {
    try {
        await signIn('credentials', formData);
    } catch (error) {
        if (error instanceof AuthError) {
            switch (error.type) {
                case 'CredentialsSignin':
                    return 'Invalid credentials.';
                default:
                    return 'Something went wrong.';
            }
        }
        throw error;
    }
}

