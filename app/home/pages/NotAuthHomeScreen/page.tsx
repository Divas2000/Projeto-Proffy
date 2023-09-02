"use client";

import Image from "next/image";
import HomeLogo from "@/app/utils/shared/assets/home_logo.svg";
import HomeImage from "@/app/utils/shared/assets/home_image.svg";
import { Airplay } from "lucide-react";
import { BookOpen } from "lucide-react";
import { HomeButton } from "@/app/components";
import { useRouter } from "next/navigation";

export const NotAuthHomeScreen = () => {
  const router = useRouter();

  const onClickButton = () => {
    //TODO futura rota de login aqui
    router.push("/login");
  };
  return (
    <div className="mx-32 flex h-screen flex-col justify-center">
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
          <span className="text-sm/[12px] text-purple-100">
            Total de 285 conexões já realizadas 💜
          </span>
        </div>
      </footer>
    </div>
  );
};

export default NotAuthHomeScreen;
