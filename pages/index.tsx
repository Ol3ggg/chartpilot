import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen p-10 bg-gradient-to-b from-white to-gray-100 text-gray-900">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-2">ChartPilot</h1>
        <p className="mb-6 text-lg text-gray-600">Dein Einstieg in die technische Analyse</p>
        <div className="rounded-xl shadow bg-white p-6">
          <h2 className="text-2xl font-semibold mb-4">📘 Modul 1: Was ist Technische Analyse?</h2>
          <p className="text-gray-700 mb-4">
            Technische Analyse ist die Auswertung vergangener Kursbewegungen, um zukünftige Preisentwicklungen vorherzusagen.
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-4">
            <li>Ziel: bessere Einstiege & Ausstiege finden</li>
            <li>Basis: Preis, Volumen, Zeit</li>
            <li>Verwendete Tools: Charts, Indikatoren</li>
          </ul>
          <div className="text-right">
            <Link href="/modul1" className="text-blue-600 hover:underline">
              ➜ Weiter zu Modul 1-Inhalt
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
