export default function Card(props: { title: string; description: string }) {
  return (
    <div className="p-6 shadow-md rounded-lg">
      <h3 className="text-xl font-semibold text-blue-600">{props.title}</h3>
      <p className="mt-2 text-gray-600">{props.description}</p>
    </div>
  );
}
