export default function Hero(props: {
  title: string;
  description: string;
  buttonText: string;
  onClick: Function;
  onClickMsg: string;
}) {
  return (
    <section
      className="relative flex items-center justify-center h-screen bg-cover bg-center"
      style={{
        backgroundImage: "url('/images/pilates-blue.png')",
      }}
    >
      <div className="absolute inset-0 bg-gray-900 bg-opacity-50"></div>
      <div className="relative text-center text-primary px-6">
        <h1 className="text-4xl md:text-6xl font-bold">{props.title}</h1>
        <p className="mt-4 text-lg md:text-xl">{props.description}</p>
        <a
          href="#contact"
          onClick={() => props.onClick(props.onClickMsg)}
          className="mt-6 inline-block bg-button-primary hover:bg-button-hover text-primary font-bold py-3 px-6 rounded-lg"
        >
          {props.buttonText}
        </a>
      </div>
    </section>
  );
}
