import Header from "@/app/components/layout/Header";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="flex items-center justify-center py-32">
        <h1 className="text-3xl font-semibold" style={{ color: "var(--gold-primary)" }}>
          IMJIN.GG
        </h1>
      </div>
    </main>
  );
}