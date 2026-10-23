import z from "zod";

export const contactSchema = z
  .object({
    name: z.string().min(2).max(100),
    email: z.email().optional().or(z.literal("")),
    phone: z
      .string()
      .regex(/^[0-9+\s\-()]{8,20}$/)
      .optional()
      .or(z.literal("")),
    message: z.string().min(10).max(5000),
  })
  .refine((data) => data.email || data.phone, {
    message: "Pleave provice either email or phone",
    path: ["email"],
  });

export type ContactRequest = z.infer<typeof contactSchema>;
