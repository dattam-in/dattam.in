import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { GridBackdrop, GlowOrb } from "@/components/visuals/backgrounds";

export default function NotFound() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      <GridBackdrop />
      <GlowOrb className="left-1/2 top-1/3 h-72 w-[36rem] -translate-x-1/2" />
      <Container className="relative">
        <div className="mx-auto flex max-w-xl flex-col items-center text-center">
          <span className="text-gradient-accent font-mono text-7xl font-semibold sm:text-8xl">
            404
          </span>
          <h1 className="mt-6 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            This page didn&apos;t deploy
          </h1>
          <p className="mt-3 text-pretty text-muted-foreground">
            The page you&apos;re looking for doesn&apos;t exist or has been
            moved.
          </p>
          <Button asChild className="mt-8">
            <Link href="/">
              <ArrowLeft />
              Back home
            </Link>
          </Button>
        </div>
      </Container>
    </section>
  );
}
