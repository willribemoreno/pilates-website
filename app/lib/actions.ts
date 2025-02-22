import { OWNER_INFOS } from './constants';
import { redirect } from 'next/navigation'

export function createWhatsAppLink(phoneNumber: string, message: string) {
    const baseUrl = 'https://whatsa.me/';
    const encodedMessage = encodeURIComponent(message);
    const finalUrl = `${baseUrl}${phoneNumber}/?t=${encodedMessage}`;
    return finalUrl;
}

export type State = string | null;

export function createCustomWhatsAppLink(data: FormData) {

    const name = data.get('name');
    const phone = data.get('phone');
    const message = data.get('message');
    const number = OWNER_INFOS.phoneNumber;

    const finalMessage = `Nome: ${name}.\nMensagem: ${message}\nWhatsApp: ${phone}`;
    const finalUrl = createWhatsAppLink(number, finalMessage);

    return finalUrl;
}

export function redirectToWhatsApp(prevState: State, data: FormData): string | null {
    console.log(prevState);
    const url = createCustomWhatsAppLink(data);

    if (url) {
        window.open(url, "_blank"); // Open the URL in a new tab
    }
    redirect('#contact');

    return url;
}