import { UserRole } from '@/interfaces/user.interfaces';
import * as z from 'zod';
export const SettingsSchema = z.object({
    name: z.optional(z.string()),
    isTwoFactorEnabled: z.optional(z.boolean()),
    role: z.enum([UserRole[0], UserRole[1]]),
    email: z.optional(z.string().email()),
    password: z.string().optional(),
    newPassword: z.string().min(8, { message: "La nueva contraseña debe tener al menos 8 caracteres" }).optional(),
})
.refine((data) => {
    if (data.password && !data.newPassword) {
      return false;
    }

    return true;
  }, {
    message: "Nueva contraseña es requerida!",
    path: ["newPassword"]
  })
  .refine((data) => {
    if (data.newPassword && !data.password) {
      return false;
    }

    return true;
  }, {
    message: "Contraseña actual es requerida!",
    path: ["password"]
  })