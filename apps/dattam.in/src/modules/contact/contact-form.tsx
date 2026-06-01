"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowRight, CheckCircle2, Loader2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site";

interface FormState {
  name: string;
  email: string;
  company: string;
  message: string;
}

const empty: FormState = { name: "", email: "", company: "", message: "" };

type Status = "idle" | "submitting" | "success";

export function ContactForm() {
  const [form, setForm] = useState<FormState>(empty);
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [status, setStatus] = useState<Status>("idle");

  function update<K extends keyof FormState>(key: K, value: string) {
    setForm((f) => ({ ...f, [key]: value }));
    if (errors[key]) setErrors((e) => ({ ...e, [key]: undefined }));
  }

  function validate(): boolean {
    const next: Partial<FormState> = {};
    if (!form.name.trim()) next.name = "Please enter your name.";
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email))
      next.email = "Enter a valid email address.";
    if (form.message.trim().length < 10)
      next.message = "Tell us a little more (10+ characters).";
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    setStatus("submitting");

    // No backend yet — open the user's mail client with a prefilled message.
    const subject = encodeURIComponent(
      `New project enquiry from ${form.name}`,
    );
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nCompany: ${form.company || "—"}\n\n${form.message}`,
    );

    // Small delay for premium feedback, then hand off to mail client.
    window.setTimeout(() => {
      window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
      setStatus("success");
    }, 700);
  }

  return (
    <div className="relative overflow-hidden rounded-2xl border border-border-strong bg-surface/40 p-6 sm:p-8">
      <div className="pointer-events-none absolute inset-x-0 -top-px h-px bg-linear-to-r from-transparent via-accent/50 to-transparent" />

      <AnimatePresence mode="wait">
        {status === "success" ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center justify-center gap-4 py-16 text-center"
          >
            <CheckCircle2 className="size-12 text-accent" />
            <h3 className="text-xl font-semibold text-foreground">
              Message ready to send
            </h3>
            <p className="max-w-sm text-pretty text-sm text-muted-foreground">
              We&apos;ve opened your email client with the details. Prefer
              another way? Reach us directly at {siteConfig.email}.
            </p>
            <Button variant="outline" size="sm" onClick={() => setStatus("idle")}>
              Send another
            </Button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onSubmit={onSubmit}
            noValidate
            className="flex flex-col gap-5"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <Field
                label="Name"
                error={errors.name}
                htmlFor="name"
              >
                <Input
                  id="name"
                  value={form.name}
                  onChange={(e) => update("name", e.target.value)}
                  placeholder="Jane Doe"
                />
              </Field>
              <Field label="Email" error={errors.email} htmlFor="email">
                <Input
                  id="email"
                  type="email"
                  value={form.email}
                  onChange={(e) => update("email", e.target.value)}
                  placeholder="jane@company.com"
                />
              </Field>
            </div>

            <Field label="Company (optional)" htmlFor="company">
              <Input
                id="company"
                value={form.company}
                onChange={(e) => update("company", e.target.value)}
                placeholder="Acme Inc."
              />
            </Field>

            <Field
              label="What are you building?"
              error={errors.message}
              htmlFor="message"
            >
              <Textarea
                id="message"
                value={form.message}
                onChange={(e) => update("message", e.target.value)}
                placeholder="Tell us about your product, timeline, and what success looks like."
              />
            </Field>

            <Button
              type="submit"
              size="lg"
              disabled={status === "submitting"}
              className="mt-1 w-full"
            >
              {status === "submitting" ? (
                <>
                  <Loader2 className="animate-spin" />
                  Preparing…
                </>
              ) : (
                <>
                  Send message
                  <ArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                </>
              )}
            </Button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}

function Field({
  label,
  htmlFor,
  error,
  children,
}: {
  label: string;
  htmlFor: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-2">
      <Label htmlFor={htmlFor}>{label}</Label>
      {children}
      {error && <span className="text-xs text-red-400">{error}</span>}
    </div>
  );
}
