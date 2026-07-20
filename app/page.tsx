import Navbar from "@/components/layout/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f4f2eb] text-slate-900">
      <Navbar />

      <section id="inicio" className="mx-auto max-w-[1320px] px-5 py-24 lg:px-8">
        <h1 className="text-5xl font-semibold tracking-[-0.05em] text-[#0a2555]">
          Project Atlas
        </h1>
        <p className="mt-6 text-lg text-slate-700">
          Nueva web de PKF Guatemala.
        </p>
      </section>
    </main>
  );
}