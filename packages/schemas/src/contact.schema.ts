import z from "zod";

const planSchema = z.enum(["landing", "mvp", "custom"]);

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_RE = /^\+?[0-9\s().-]{8,15}$/;
const URL_RE = /^(https?:\/\/)?([\w-]+\.)+[\w-]{2,}(\/\S*)?$/i;

export const contactSchema = z.object({
  name: z.string().min(2, "NAME_MIN").max(100, "NAME_MAX"),
  contact: z
    .string()
    .trim()
    .min(5, "CONTACT_MIN")
    .max(100, "CONTACT_MAX")
    .refine(
      (v) => EMAIL_RE.test(v) || PHONE_RE.test(v) || URL_RE.test(v),
      "CONTACT_INVALID",
    ),
  message: z.string().min(10, "MESSAGE_MIN").max(5000, "MESSAGE_MAX"),
  plan: planSchema.default("custom"),
});
