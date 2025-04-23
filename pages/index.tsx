import Head from 'next/head'
import Link from 'next/link'
import { Card, CardContent } from "@/components/ui/card"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100 p-6">
      <Head>
        <title>ChartPilot – Modul 1</title>
      </Head>

      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-10">
          <h1 className="text-4xl font-bold mb-2">ChartPilot</h1>
          <p className="text-lg text-gray-600">Dein Einstieg in die technische Analyse</p>
        </header>

        <section className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-2">📘 Modul 1: Was ist Technische Analyse?</h2>
              <p className="text-gray-700 mb-4">
                Technische Analyse ist die Auswertung vergangener Kursbewegungen, um zukünftige Preisentwicklungen vorherzusagen. Dabei nutzt man Charts, Trendlinien, Unterstützungen und Widerstände.
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-4">
                <li>Ziel: bessere Einstiege & Ausstiege finden</li>
                <li>Basis: Preis, Volumen, Zeit</li>
                <li>Verwendete Tools: Charts, Indikatoren</li>
              </ul>
              <div className="text-right">
                <Link href="#modul1-inhalt" className="text-blue-600 hover:underline">
                  ➜ Weiter zu Modul 1-Inhalt
                </Link>
              </div>
            </CardContent>
          </Card>
        </section>

        <section id="modul1-inhalt" className="mt-12">
          <h3 className="text-2xl font-semibold mb-4">📊 Kursaufbau Modul 1</h3>
          <p className="mb-2">In Modul 1 lernst du die Grundlagen kennen:</p>
          <ol className="list-decimal list-inside mb-4 text-gray-800">
            <li>Was ist technische Analyse?</li>
            <li>Wie funktionieren Charts?</li>
            <li>Was bedeuten Candlesticks?</li>
          </ol>
          <p className="mb-4">Wenn du bereit bist, kannst du zu den Übungen übergehen.</p>
          <Link href="#" className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            ➜ Zu den Übungen
          </Link>
        </section>
      </div>
    </div>
  )
}
