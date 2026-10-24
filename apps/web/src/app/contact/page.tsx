"use client";

import Image from "next/image";
import { sendContactEmail } from "@/src/actions/email.action";
import { useActionState } from "react";
import {
  FieldGroup,
  Field,
  FieldLabel,
  FieldError,
} from "@nguyenthanhduyofficial/ui/components/field";
import { Input } from "@nguyenthanhduyofficial/ui/components/input";
import { Textarea } from "@nguyenthanhduyofficial/ui/components/textarea";
import { Button } from "@nguyenthanhduyofficial/ui/components/button";
import { useSearchParams } from "next/navigation";
import { useTranslations } from "next-intl";

export default function Contact() {
  const t = useTranslations("Contact");
  const [state, formAction, isPending] = useActionState(sendContactEmail, null);
  const searchParams = useSearchParams();
  const plan = searchParams.get("plan") ?? "";
  return (
    <main className="relative w-full min-h-screen px-4 flex items-center justify-center">
      <Image
        src="/cloud.jpg"
        alt="background"
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className="relative w-full max-w-2xl mx-auto px-8 py-8 bg-background rounded-2xl">
        <form action={formAction}>
          <input type="hidden" name="plan" value={plan} />
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="name">Name</FieldLabel>
              <Input
                id="name"
                name="name"
                placeholder="Your name"
                required
                defaultValue={state?.values?.name ?? ""}
              />
              {state?.formErrors?.fieldErrors?.name?.[0] && (
                <FieldError>
                  {t(state?.formErrors?.fieldErrors?.name?.[0])}
                </FieldError>
              )}
            </Field>
            <Field>
              <FieldLabel htmlFor="contact">Contact Info</FieldLabel>
              <Input
                id="contact"
                name="contact"
                placeholder="Phone, Email or Link"
                required
                defaultValue={state?.values?.contact ?? ""}
              />
              {state?.formErrors?.fieldErrors?.contact?.[0] && (
                <FieldError>
                  {t(state?.formErrors?.fieldErrors?.contact?.[0])}
                </FieldError>
              )}
            </Field>
            <Field>
              <FieldLabel htmlFor="message">Message</FieldLabel>
              <Textarea
                id="message"
                name="message"
                rows={5}
                placeholder="Tell me about your project...."
                required
                defaultValue={state?.values?.message ?? ""}
              />
              {state?.formErrors?.fieldErrors?.message?.[0] && (
                <FieldError>
                  {t(state?.formErrors?.fieldErrors?.message?.[0])}
                </FieldError>
              )}
            </Field>
            {state?.message && !state.success && (
              <FieldError>{state.message}</FieldError>
            )}
            <Button type="submit" disabled={isPending}>
              {isPending ? "Sending..." : "Send message"}
            </Button>
          </FieldGroup>
        </form>
      </div>
    </main>
  );
}
