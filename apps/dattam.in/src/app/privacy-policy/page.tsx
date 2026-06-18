import type { Metadata } from "next";
import { Container } from "@/components/layout/container";
import { PageHeader } from "@/components/layout/page-header";
import { Reveal } from "@/components/motion/reveal";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Learn how Dattam collects, uses, and protects your personal information.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHeader
        eyebrow="Legal"
        title="Privacy Policy"
        description="How we collect, use, and protect your personal information."
      />

      <section className="py-16">
        <Container>
          <Reveal>
            <div className="mx-auto max-w-2xl space-y-10 text-pretty leading-relaxed text-muted-foreground">
              <div className="space-y-4">
                <p>
                  This Privacy Policy describes how your personal information is
                  collected, used, and shared when you visit Dattam (the
                  &ldquo;Site&rdquo;).
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-xl font-semibold tracking-tight text-foreground">
                  Personal Information We Collect
                </h2>
                <p>
                  When you visit the Site, we automatically receive information
                  about your device from your browser, such as your IP address.
                  As you browse the Site, we also collect information about how
                  you interact with the Site. We refer to this
                  automatically-collected information as &ldquo;Device
                  Information&rdquo;.
                </p>
                <p>
                  We collect Device Information using cookies. &ldquo;Cookies&rdquo; are
                  data files that are placed on your device. For more
                  information about cookies and how to disable them, visit{" "}
                  <a
                    href="http://www.allaboutcookies.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground underline underline-offset-4 transition-opacity hover:opacity-70"
                  >
                    allaboutcookies.org
                  </a>
                  .
                </p>
                <p>
                  We do this using Google Analytics:{" "}
                  <a
                    href="https://www.google.com/intl/en/policies/privacy/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground underline underline-offset-4 transition-opacity hover:opacity-70"
                  >
                    Google Privacy Policy
                  </a>
                  . You can opt out here:{" "}
                  <a
                    href="https://tools.google.com/dlpage/gaoptout"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground underline underline-offset-4 transition-opacity hover:opacity-70"
                  >
                    Google Analytics Opt-out
                  </a>
                  .
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-xl font-semibold tracking-tight text-foreground">
                  Changes
                </h2>
                <p>
                  We may update this privacy policy from time to time for
                  personal, operational, legal, or regulatory reasons.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-xl font-semibold tracking-tight text-foreground">
                  Contact Us
                </h2>
                <p>
                  For more information about our privacy practices or if you
                  have questions, please contact us at{" "}
                  <a
                    href="mailto:contact@dattam.in"
                    className="text-foreground underline underline-offset-4 transition-opacity hover:opacity-70"
                  >
                    contact@dattam.in
                  </a>
                  .
                </p>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
