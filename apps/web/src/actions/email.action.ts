"use server";

import { Resend } from "resend";
import { contactSchema } from "@nguyenthanhduyofficial/schemas";
import z from "zod";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendContactEmail(prevState: any, formData: FormData) {
  const parsed = contactSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email") || undefined,
    phone: formData.get("phone") || undefined,
    message: formData.get("message"),
  });
  if (!parsed.success) {
    return {
      success: false,
      formErrors: z.treeifyError(parsed.error),
    };
  }

  const { name, email, phone, message } = parsed.data;
  const replyTo = email || undefined;
  const contactLine = email ? `Email: ${email}` : `Phone: ${phone}`;
  try {
    await resend.emails.send({
      from: process.env.EMAIL_FROM!,
      to: process.env.EMAIL_TO!,
      ...(replyTo && { replyTo }),
      subject: `New inquiry from ${name}`,
      html: `
<p><strong>Name:</strong> ${name}</p>
<p><strong>${contactLine}</strong></p><hr/> <p style="wiite-space:pre-wrap">${message}</p>`,
    });
    return { success: true };
  } catch (err) {
    console.log(err);
    return { success: false, message: "Failed" };
  }
}
