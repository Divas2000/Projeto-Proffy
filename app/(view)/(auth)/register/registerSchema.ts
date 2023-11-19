import { z } from "zod";

export const registerSchema = z.object({
  name: z.string().nonempty("Nome é obrigatório").min(3, "Nome inválido"),

  lastName: z
    .string()
    .nonempty("Sobrenome é obrigatório")
    .min(3, "Sobrenome inválido"),

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

export type RegisterData = z.infer<typeof registerSchema>;
