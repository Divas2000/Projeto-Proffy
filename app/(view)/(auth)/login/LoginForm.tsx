"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { useForm } from "react-hook-form";
import { Eye, EyeOff } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, ErrorMessage, VariableBorderInput } from "@/components";
import { LoginData, loginSchema } from "./loginSchema";

export function LoginForm() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [loginApiError, setLoginApiError] = useState<string | null>(null);

  const {
    reset,
    register,
    handleSubmit: hookFormSubmit,
    formState: { errors, isSubmitSuccessful, isSubmitting, isValid },
  } = useForm<LoginData>({
    resolver: zodResolver(loginSchema),
    mode: "onBlur",
  });

  const handleSubmit = hookFormSubmit(async ({ email, password }) => {
    const response = await signIn("credentials", {
      email,
      password,
      redirect: false,
      callbackUrl: "/welcome",
    });

    if (response?.error) {
      setLoginApiError(response.error);
    } else {
      setLoginApiError(null);
    }
  });

  useEffect(() => {
    if (isSubmitSuccessful && !loginApiError) {
      reset();

      router.replace("/welcome");
    }
  });

  return (
    <>
      <h1 className="mb-10 text-2xl font-semibold text-purple-900">
        Fazer Login
      </h1>
      {loginApiError && (
        <ErrorMessage message={loginApiError} className="mb-4 block text-sm" />
      )}

      <form onSubmit={handleSubmit}>
        <VariableBorderInput
          id="email"
          border="top"
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

        <Link
          href="#"
          className="mt-4 block text-right text-sm font-semibold text-purple-400"
        >
          Esqueci minha senha
        </Link>

        <Button
          label="Entrar"
          size="lg"
          disabled={!isValid}
          isLoading={isSubmitting}
          className="my-10"
        />
      </form>
    </>
  );
}
