import { Hero } from "@/modules/home/hero";
import { TrustStrip } from "@/modules/home/trust-strip";
import { Services } from "@/modules/home/services";
import { FeaturedProjects } from "@/modules/home/featured-projects";
import { Process } from "@/modules/home/process";
import { Philosophy } from "@/modules/about/philosophy";
import { Stats } from "@/components/sections/stats";
import { Testimonials } from "@/modules/home/testimonials";
import { Team } from "@/modules/about/team";
import { CTA } from "@/components/sections/cta";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <Services />
      <FeaturedProjects />
      <Process />
      <Philosophy />
      <Stats />
      <Testimonials />
      <Team />
      <CTA />
    </>
  );
}
