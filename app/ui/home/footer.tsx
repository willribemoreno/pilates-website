export default function Footer(props: { rights: string }) {
  return (
    <footer className="bg-gray-900 text-primary text-center py-6">
      <p>&copy; {props.rights} </p>
    </footer>
  );
}
