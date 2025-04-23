import Link from 'next/link'

export default function Modul1() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-blue-50 text-gray-900 p-6">
      <div className="max-w-4xl mx-auto space-y-8">
        <header className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">📘 Modul 1: Technische Analyse</h1>
          <Link href="/" className="text-blue-600 hover:underline">🏠 Zur Startseite</Link>
        </header>

        <section className="space-y-4 bg-white rounded-xl shadow p-6">
          <h2 className="text-2xl font-semibold">🔍 Was ist technische Analyse?</h2>
          <p>Technische Analyse ist die Auswertung vergangener Kursbewegungen, um zukünftige Trends zu erkennen. Sie nutzt ausschließlich Marktdaten wie Preise und Volumen. Anders als die Fundamentalanalyse ignoriert sie wirtschaftliche Kennzahlen und konzentriert sich auf das Marktverhalten selbst.</p>
          <p>Trader verwenden technische Analyse, um präzise Einstiegs- und Ausstiegspunkte zu bestimmen. Dabei helfen ihnen Tools wie gleitende Durchschnitte, Trendlinien, Oszillatoren und Candlestick-Formationen.</p>
          <p>Ein wichtiger Grundsatz: Alle bekannten Informationen sind bereits im Preis enthalten („Der Markt diskontiert alles“). Das macht technische Analyse besonders wertvoll in dynamischen Märkten.</p>
        </section>

        <section className="space-y-4 bg-white rounded-xl shadow p-6">
          <h2 className="text-2xl font-semibold">📌 Grundannahmen & Methodik</h2>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Preise bewegen sich in Trends:</strong> Trends bestehen bis sie brechen. Der Trend ist dein Freund.</li>
            <li><strong>Geschichte wiederholt sich:</strong> Emotionen (Angst, Gier) erzeugen wiederkehrende Muster.</li>
            <li><strong>Marktteilnehmer handeln oft irrational:</strong> TA hilft, objektiv zu bleiben.</li>
          </ul>
          <p>Wichtige Analyseformen sind die Trendanalyse, die Unterstützung/Widerstandsanalyse und Indikatoren wie RSI, MACD oder Bollinger Bänder.</p>
        </section>

        <section className="space-y-4 bg-white rounded-xl shadow p-6">
          <h2 className="text-2xl font-semibold">📊 Vergleich: Technisch vs. Fundamentalanalyse</h2>
          <table className="w-full border border-gray-200 text-left">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-2 border">Technische Analyse</th>
                <th className="p-2 border">Fundamentalanalyse</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-2 border">Preis, Volumen, Muster</td>
                <td className="p-2 border">Bilanz, Gewinn, Marktposition</td>
              </tr>
              <tr>
                <td className="p-2 border">Kurz-/mittelfristige Signale</td>
                <td className="p-2 border">Langfristige Bewertung</td>
              </tr>
              <tr>
                <td className="p-2 border">Psychologie & Verhalten im Fokus</td>
                <td className="p-2 border">Unternehmensdaten im Fokus</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section className="bg-white rounded-xl shadow p-6">
          <h2 className="text-2xl font-semibold">📘 Nächster Schritt</h2>
          <p className="mb-4">Teste dein Wissen über technische Analyse. Der Test besteht aus drei zufälligen Fragen und wird bei jedem Öffnen neu generiert.</p>
          <Link href="/modul1/test" className="text-blue-600 hover:underline font-medium">➜ Zum Abschlusstest</Link>
        </section>
      </div>
    </main>
  )
}
