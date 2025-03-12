'use client';

import { redirectToWhatsApp } from '@/app/lib/actions';
import { useActionState, useState } from 'react';

export default function Contact(props: {
  title: string;
  button: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  value: string;
}) {
  const [, formAction] = useActionState(redirectToWhatsApp, '');
  const [isExpanded, setIsExpanded] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    // event.preventDefault(); // Prevent the default form submission
    const formData = new FormData(event.currentTarget); // Get the form data
    formAction(formData); // Call formAction with the form data
  };

  return (
    <section id="contact" className="py-20 px-8 max-w-5xl mx-auto text-center">
      <h2 className="text-3xl font-bold text-secondary">{props.title}</h2>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col items-center">
          <input
            name="name" // Use name attribute for FormData
            className="py-5 pl-5 mt-5 border rounded-xl w-1/2 text-gray-600"
            placeholder="Seu Nome"
            required
          />
          <input
            name="phone" // Use name attribute for FormData
            className="py-5 pl-5 my-5 border rounded-xl w-1/2 text-gray-600"
            placeholder="Seu Telefone(WhatsApp)"
          />
          <textarea
            name="message" // Use name attribute for FormData
            className="py-5 pl-5 mb-5 border rounded-xl w-1/2 text-gray-600"
            placeholder="Sua Mensagem"
            onClick={() => setIsExpanded(true)}
            rows={isExpanded ? 5 : 1}
            required
            onChange={(event) => props.onChange(event)}
            value={props.value}
          />
        </div>
        <div className="flex justify-center items-center w-full">
          <button
            type="submit" // Button type set to submit
            className="flex items-center bg-secondary text-primary font-bold rounded-full shadow-lg hover:bg-button-hover transition-all px-7 py-3"
          >
            {props.button}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 ml-2"
            >
              <path
                fillRule="evenodd"
                d="M12 2C6.48 2 2 6.48 2 12c0 1.89.52 3.66 1.42 5.19L2 22l4.81-1.42C8.34 21.48 10.11 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2m0 18c-1.61 0-3.14-.44-4.49-1.27l-.32-.19-2.85.85.85-2.85-.19-.32A8.376 8.376 0 0 1 4 12c0-4.41 3.59-8 8-8s8 3.59 8 8-3.59 8-8 8m3.47-5.62c-.19-.1-1.12-.55-1.3-.61-.18-.07-.31-.1-.44.1-.13.19-.5.61-.61.73-.11.13-.23.15-.43.05-.19-.1-.8-.29-1.52-.91-.56-.49-.94-1.09-1.05-1.28-.11-.19-.01-.3.09-.4.09-.09.19-.23.29-.34.1-.12.13-.19.19-.31.06-.12.03-.23-.01-.32-.04-.09-.44-1.06-.61-1.46-.16-.39-.33-.34-.44-.35-.11 0-.24-.01-.36-.01s-.32.05-.48.23c-.16.18-.63.61-.63 1.48s.64 1.72.73 1.84c.09.12 1.27 1.93 3.07 2.71.43.18.76.29 1.02.37.43.14.81.12 1.12.07.34-.05 1.12-.46 1.28-.91.16-.44.16-.81.11-.91s-.17-.13-.36-.23"
              />
            </svg>
          </button>
        </div>
      </form>
    </section>
  );
}
