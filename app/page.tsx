import { ExploreourApp } from "@/components/Home/exploreourApp";
import { HealthGradingSystem } from "@/components/Home/healthGradingSystem";
import { Hero } from "@/components/Home/hero";
import { HowItWorks } from "@/components/Home/howItWorks";
import { Insights } from "@/components/Home/insights";
import { KeyFeatures } from "@/components/Home/keyFeatures";
import { KnowYourFood } from "@/components/Home/knowYourFood";
import { Testimonials } from "@/components/Home/testimonials";
import { WhyThis } from "@/components/Home/whyThis";

export default function Home() {
  return (
    <div className="flex flex-col gap-50">
      <Hero />
      <HowItWorks />
      <HealthGradingSystem />
      <KeyFeatures />
      <WhyThis />
      <ExploreourApp />
      <Testimonials />
      <Insights />
      <KnowYourFood />
    </div>
  )
}
