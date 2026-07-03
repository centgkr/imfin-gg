import Header from "@/app/components/layout/Header";
import Hero from "@/app/components/layout/Hero";
import QuickMenu from "@/app/components/layout/QuickMenu";
import WeeklyMeta from "@/app/components/layout/WeeklyMeta";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <QuickMenu />
      <WeeklyMeta />
    </main>
  );
}