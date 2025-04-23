import Link from 'next/link'
import { getRandomFact } from '../quotes'
const fact = getRandomFact()

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white text-gray-900 font-sans">
      <header className="relative h-96 overflow-hidden">
        <img src="https://images.unsplash.com/photo-1559526324-593bc073d938?auto=format&fit=crop&w=1600&q=80" alt="Chart Hero" className="w-full h-full object-cover brightness-75" />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-4">
          <h1 className="text-5xl font-bold drop-shadow-md">Willkommen bei ChartPilot</h1>
          <p className="mt-4 text-xl drop-shadow-md">Lerne technische Analyse Schritt für Schritt</p>
        </div>
      </header>

      <nav className="sticky top-0 z-50 bg-white shadow py-4 px-6 flex justify-center space-x-6">
        <Link href="/" className="text-blue-700 hover:underline">Home</Link>
        <Link href="/modul1" className="text-blue-700 hover:underline">Modul 1</Link>
      </nav>

      <section className="max-w-4xl mx-auto px-6 py-12 space-y-8">
        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-2xl font-bold mb-2">📣 ChartPilot Inspiration</h2>
          <blockquote className="italic text-lg text-blue-800 border-l-4 pl-4 border-blue-400">
            “{fact.text}”
            <footer className="mt-2 text-sm text-gray-500">– {fact.source}</footer>
          </blockquote>
        </div>

        <div>
          <h2 className="text-3xl font-semibold mb-6">📚 Module</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
              <h3 className="text-xl font-bold mb-2">Modul 1: Einführung in die Technische Analyse</h3>
              <p className="text-gray-700 mb-4">
                Lerne, wie du mit Charts arbeitest und Marktbewegungen analysierst.
              </p>
              <Link href="/modul1" className="text-blue-600 hover:underline">Modul starten →</Link>
            </div>
            <div className="p-6 bg-gray-100 rounded-xl shadow text-gray-400">
              <h3 className="text-xl font-bold mb-2">Modul 2: Trends & Signale</h3>
              <p className="mb-4">Demnächst verfügbar.</p>
              <span className="italic">Wird bald freigeschaltet</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
