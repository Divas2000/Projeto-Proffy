import Image from "next/image";
import logo from "@/assets/proffy_logo.svg";
import bgPattern from "@/assets/bg_pattern.svg";

interface LayoutProps {
  children: React.ReactNode;
}

export default async function Layout({ children }: LayoutProps) {
  return (
    <main className="flex min-h-screen w-full bg-gray-100 md:h-screen md:overflow-hidden">
      <div className="relative hidden h-screen w-1/2 items-center justify-center bg-purple-500 md:flex">
        <Image
          src={bgPattern}
          alt=""
          role="presentation"
          className="h-[90%] w-full"
        />

        <div className="absolute left-1/2 top-1/2 max-w-sm -translate-x-1/2 -translate-y-1/2">
          <Image src={logo} alt="Proffy" className="h-24 w-[334px]" />

          <p className="max-w-xs font-poppins text-xl text-purple-100">
            Sua plataforma de estudos online.
          </p>
        </div>
      </div>

      {children}
    </main>
  );
}
