"use client";

import Image from "next/image";
import Link from "next/link";
import { redirectToWhatsApp } from "@/app/lib/actions";
import { useActionState, useState } from "react";

export default function Contact(props: { title: string }) {
  const [state, formAction] = useActionState(redirectToWhatsApp, "");
  const [isExpanded, setIsExpanded] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    // event.preventDefault(); // Prevent the default form submission
    const formData = new FormData(event.currentTarget); // Get the form data
    formAction(formData); // Call formAction with the form data
  };

  return (
    <section id="contact" className="py-20 px-8 max-w-5xl mx-auto text-center">
      <h2 className="text-3xl font-bold text-blue-600">{props.title}</h2>
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
          />
        </div>
        <div className="flex justify-center items-center w-full">
          <button
            type="submit" // Button type set to submit
            className="flex items-center bg-blue-600 text-white font-bold rounded-full shadow-lg hover:bg-blue-900 transition-all px-4 py-3 space-x-2"
          >
            Submit
          </button>
        </div>
      </form>
    </section>
  );
}
