"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { Airplay } from "lucide-react";
import { BookOpen } from "lucide-react";
import { HomeButton } from "@/app/components";
import HomeLogo from "@/assets/proffy_logo.svg";
import HomeImage from "@/assets/home_image.svg";

export default function HomeScreen() {
  const router = useRouter();

  const onClickButton = () => router.push("/login");

  return (
    <div className="flex h-screen flex-col justify-center bg-purple-500 px-32">
      <main className="flex gap-20">
        <section>
          <Image src={HomeLogo} alt="logo da home" width={434} height={127} />
          <div className="w-[350px] text-4xl">
            <span className="font-poppins text-purple-100">
              Sua plataforma de estudos online.
            </span>
          </div>
        </section>
        <section>
          <Image
            src={HomeImage}
            alt="principal imagem da home"
            width={599}
            height={350}
          />
        </section>
      </main>
      <footer className="mt-11 flex gap-x-56">
        <div className="flex gap-x-4">
          <HomeButton
            backgroundColor="purple"
            label="Estudar"
            Icon={Airplay}
            onClick={onClickButton}
          />
          <HomeButton
            backgroundColor="pink"
            label="Dar aulas"
            Icon={BookOpen}
            onClick={onClickButton}
          />
        </div>
        <div className="flex w-[350px] items-center justify-end">
          <span className="font-poppins text-sm text-purple-100">
            Total de 285 conexões já realizadas 💜
          </span>
        </div>
      </footer>
    </div>
  );
}
