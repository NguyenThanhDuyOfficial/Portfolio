"use server";

import { Resend } from "resend";
import { contactSchema } from "@nguyenthanhduyofficial/schemas";
import z from "zod";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendContactEmail(prevState: any, formData: FormData) {
  const parsed = contactSchema.safeParse({
    name: formData.get("name"),
    contact: formData.get("contact"),
    message: formData.get("message"),
    plan: formData.get("plan") || "custom",
  });
  if (!parsed.success) {
    return {
      success: false,
      formErrors: z.flattenError(parsed.error),
      values: {
        name: formData.get("name") as string,
        contact: formData.get("contact") as string,
        message: formData.get("message") as string,
      },
    };
  }

  const { name, contact, message, plan } = parsed.data;
  try {
    await resend.emails.send({
      from: process.env.EMAIL_FROM!,
      to: process.env.EMAIL_TO!,
      subject: `New inquiry from ${name}`,
      html: `
        <h2>New inquiry — ${plan}</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Contact:</strong> ${contact}</p>
        <p><strong>Plan:</strong> ${plan}</p>
        <hr/>
        <p style="white-space:pre-wrap">${message}</p>
      `,
    });
    return { success: true };
  } catch (err) {
    console.log(err);
    return {
      success: false,
      message: "Failed",
      values: {
        name: formData.get("name") as string,
        contact: formData.get("contact") as string,
        message: formData.get("message") as string,
      },
    };
  }
}
