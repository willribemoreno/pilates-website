import Card from "@/app/ui/card";

const cards = [
  {
    title: "Treinamento para Força e Resistência",
    description:
      "Aprimore sua força, flexibilidade e resistência com exercícios dinâmicos e eficazes.",
  },
  {
    title: "Fisioterapia com Pilates",
    description:
      "Recupere-se com movimentos precisos e terapêuticos, reduzindo dores e restaurando a mobilidade.",
  },
  {
    title: "Emagrecimento e Definição",
    description:
      "Queime calorias, reduza medidas e tonifique seu corpo com treinos direcionados.",
  },
  {
    title: "Treinamento Personalizado",
    description:
      "Desenvolva um plano exclusivo, adaptado às suas necessidades e objetivos individuais.",
  },
];

export default function About(props: { title: string; description: string }) {
  return (
    <section className="py-20 px-8 max-w-5xl mx-auto text-center">
      <h2 className="text-3xl font-bold text-blue-600">{props.title}</h2>
      <p className="mt-4 text-gray-600">{props.description}</p>
      <div className="grid md:grid-cols-4 gap-8 mt-10">
        {cards.map((item, index) => (
          <Card key={index} title={item.title} description={item.description} />
        ))}
      </div>
    </section>
  );
}
