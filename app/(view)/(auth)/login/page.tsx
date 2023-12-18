import { redirect } from "next/navigation";
import { getUserSession } from "@/helpers/getUserSession";
import { LoginForm } from "./LoginForm";
import Link from "next/link";

export default async function Login() {
  const user = await getUserSession();

  if (user) {
    redirect("/welcome");
  }

  return (
    <section className="flex w-full flex-col items-center justify-center font-poppins md:w-1/2 md:overflow-y-auto">
      <div className="flex h-full flex-col">
        <div className="flex grow flex-col justify-center pt-12">
          <LoginForm />
        </div>
        <div className="pb-10 text-center">
          <span className="mb-2 block text-gray-600">
            Não tem conta?
            <Link
              href="/register"
              className="ml-1 font-semibold text-purple-400"
            >
              Cadastre-se
            </Link>
          </span>
          <span className="text-gray-400">É de graça 💜</span>
        </div>
      </div>
    </section>
  );
}
