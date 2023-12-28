import Image from "next/image";
import { cn } from "@/utils";
import { getUserSession } from "@/helpers/getUserSession";
import avatarIcon from "@/assets/avatar.svg";
import heroImg from "@/assets/home_image.svg";
import proffyLogo from "@/assets/proffy_logo.svg";
import { ActionButtons } from "./ActionButtons";
import { SignOutButton } from "./SignOutButton";

export default async function Welcome() {
  const user = await getUserSession();

  return (
    <div className="flex min-h-screen flex-col font-poppins">
      <header className="flex grow-0 items-center bg-purple-500 px-6 text-purple-100">
        <div className="mx-auto flex w-full max-w-[1120px] justify-between py-6">
          <div className="flex items-center space-x-4">
            <Image
              src={user?.image ?? avatarIcon}
              alt="foto do usuário"
              width={40}
              height={40}
              className={cn(
                "rounded-full bg-purple-300",
                !user?.image && "p-3",
              )}
            />
            <span className="cursor-default text-sm font-medium">
              {user?.name} {user?.lastName}
            </span>
          </div>

          <SignOutButton />
        </div>
      </header>

      <main className="flex grow flex-col">
        <section className="flex grow-[2] bg-purple-500 px-6 pb-9">
          <div className="mx-auto flex max-w-[1120px] items-center justify-center gap-20">
            <div className="grow">
              <Image src={proffyLogo} alt="Proffy" width={434} height={127} />

              <span className="block w-[350px] text-4xl text-purple-100">
                Sua plataforma de estudos online.
              </span>
            </div>

            <Image
              src={heroImg}
              alt=""
              width={599}
              height={350}
              className="grow"
            />
          </div>
        </section>
        <section className="grow-0 bg-gray-100 px-6 py-12">
          <div className="mx-auto flex max-w-[1120px] items-center justify-between">
            <div className="flex grow-[2] items-center justify-between">
              <div className="text-lg text-gray-600">
                <span className="block">Boas vindas!</span>
                <span className="font-semibold">O que deseja fazer?</span>
              </div>

              <span className="w-40 text-end text-sm text-gray-400">
                Total de 285 conexões já realizadas 💜
              </span>
            </div>
            <ActionButtons className="grow justify-end" />
          </div>
        </section>
      </main>
    </div>
  );
}
