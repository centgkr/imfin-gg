import Header from "@/app/components/layout/Header";
import Hero from "@/app/components/layout/Hero";
import QuickMenu from "@/app/components/layout/QuickMenu";
import WeeklyMeta from "@/app/components/layout/WeeklyMeta";
import PowerfulChampions from "@/app/components/layout/PowerfulChampions";
import Guides from "@/app/components/layout/Guides";
import Coupons from "@/app/components/layout/Coupons";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <QuickMenu />
      <WeeklyMeta />
      <PowerfulChampions />
      <Guides />
      <Coupons />
    </main>
  );
}