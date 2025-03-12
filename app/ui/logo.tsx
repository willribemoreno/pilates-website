import Image from "next/image";

export default function Logo() {
  return (
    <div className="w-48 h-12">
      <Image
        src="/images/logo-text-blue.svg"
        width={498}
        height={115}
        className="container"
        alt="Screenshots of the dashboard project showing desktop version"
      />
    </div>
  );
}
