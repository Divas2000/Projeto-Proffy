"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowLeft, Eye, EyeOff } from "lucide-react";
import { Button, ErrorMessage, VariableBorderInput } from "@/components";
import { RegisterData, registerSchema } from "./registerSchema";
import { toast } from "@/utils";

export default function Register() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [registerApiError, setRegisterApiError] = useState<string | null>(null);

  const {
    reset,
    register,
    handleSubmit: hookFormSubmit,
    formState: { errors, isSubmitSuccessful, isSubmitting, isValid },
  } = useForm<RegisterData>({
    resolver: zodResolver(registerSchema),
    mode: "onBlur",
  });

  const handleSubmit = hookFormSubmit(async (data) => {
    const response = await fetch("/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const responseBody = await response.json();

    if (response.status !== 201) {
      setRegisterApiError(responseBody);
    } else {
      toast({
        title: "Cadastro concluído!",
        description: "Você logo será redirecionado a tela de login.",
      });

      setRegisterApiError(null);
    }
  });

  useEffect(() => {
    if (isSubmitSuccessful && !registerApiError) {
      reset();

      setTimeout(() => {
        router.push("/login");
      }, 3000);
    }
  });

  return (
    <section className="flex w-full flex-col items-center justify-center md:w-1/2 md:overflow-y-auto">
      <div className="h-full w-full max-w-[352px] pt-6 font-poppins">
        <Link href="/login">
          <ArrowLeft className="text-purple-400" />
        </Link>

        <h1 className="mb-4 mt-10 text-2xl font-semibold text-purple-900">
          Cadastro
        </h1>
        <p className="mb-10 max-w-[214px] text-gray-600">
          Preencha os dados abaixo para começar.
        </p>

        {registerApiError && (
          <ErrorMessage
            message={registerApiError}
            className="mb-4 block text-sm"
          />
        )}

        <form onSubmit={handleSubmit}>
          <VariableBorderInput
            id="name"
            border="top"
            placeholder="Nome"
            aria-invalid={errors.name ? "true" : "false"}
            {...register("name")}
          />
          {errors.name?.message && (
            <ErrorMessage message={errors.name?.message} />
          )}

          <VariableBorderInput
            id="lastName"
            border="none"
            placeholder="Sobrenome"
            aria-invalid={errors.lastName ? "true" : "false"}
            {...register("lastName")}
          />
          {errors.lastName?.message && (
            <ErrorMessage message={errors.lastName?.message} />
          )}

          <VariableBorderInput
            id="email"
            border="none"
            placeholder="E-mail"
            aria-invalid={errors.email ? "true" : "false"}
            {...register("email")}
          />
          {errors.email?.message && (
            <ErrorMessage message={errors.email?.message} />
          )}

          <VariableBorderInput
            id="password"
            border="bottom"
            placeholder="Senha"
            Icon={showPassword ? Eye : EyeOff}
            type={showPassword ? "text" : "password"}
            iconOnClick={() => setShowPassword(!showPassword)}
            aria-invalid={errors.password ? "true" : "false"}
            {...register("password")}
          />
          {errors.password?.message && (
            <ErrorMessage message={errors.password?.message} />
          )}

          <Button
            label="Concluir cadastro"
            size="lg"
            disabled={!isValid}
            isLoading={isSubmitting}
            className="mb-6 mt-10"
          />
        </form>
      </div>
    </section>
  );
}
