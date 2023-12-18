import { z } from "zod";

export const loginSchema = z.object({
  email: z
    .string()
    .nonempty("E-mail é obrigatório")
    .email("E-mail inválido")
    .trim()
    .toLowerCase(),

  password: z
    .string()
    .nonempty("Senha é obrigatório")
    .min(8, "Sua senha deve conter pelo menos 8 caracteres")
    .max(32, "Sua senha deve conter até 32 caracteres"),
});

export type LoginData = z.infer<typeof loginSchema>;
