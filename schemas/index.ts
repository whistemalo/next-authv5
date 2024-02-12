import * as z from "zod";

export const LoginSchema = z.object({
  email: z.string().email({
    message: "Correo electrónico inválido",
  }),
  password: z.string().min(1, "La contraseña es obligatoria"),
});

export const RegisterSchema = z.object({
  email: z.string().email({
    message: "Correo electrónico inválido",
  }),
  password: z.string().min(6, "La contraseña es obligatoria"),
  name: z.string().min(6, "El nombre de usuario es obligatorio"),
});
