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

export default function Contact() {
  const [state, formAction, isPending] = useActionState(sendContactEmail, null);
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
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="name">Name</FieldLabel>
              <Input id="name" name="name" placeholder="Your name" required />
            </Field>
            <Field>
              <FieldLabel htmlFor="email">Email</FieldLabel>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
              />
            </Field>
            <Field>
              <FieldLabel htmlFor="phone">Phone</FieldLabel>
              <Input
                id="phone"
                name="phone"
                type="tel"
                placeholder="+84 123 456 789"
              />
            </Field>
            <Field>
              <FieldLabel htmlFor="message">Name</FieldLabel>
              <Textarea
                id="message"
                name="message"
                rows={5}
                placeholder="Tell me about your project...."
                required
              />
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
