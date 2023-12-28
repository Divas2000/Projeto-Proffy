import Image from "next/image";
import proffyLogo from "@/assets/proffy_logo.svg";

export default function Loading() {
  return (
    <div
      role="status"
      className="flex h-screen items-center justify-center bg-purple-500"
    >
      <Image
        src={proffyLogo}
        alt="Proffy"
        width={234}
        role="presentation"
        className="animate-pulse"
      />
      <span className="sr-only">Carregando...</span>
    </div>
  );
}
