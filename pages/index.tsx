import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-white text-gray-800 p-10">
      <div className="max-w-3xl mx-auto text-center space-y-6">
        <h1 className="text-5xl font-bold text-blue-800">ChartPilot</h1>
        <p className="text-xl text-gray-600">Dein Einstieg in die technische Analyse</p>
        <Link href="/modul1" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition">
          ➜ Starte Modul 1
        </Link>
      </div>
    </main>
  )
}
