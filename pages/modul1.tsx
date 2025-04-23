import Head from 'next/head'

export default function Modul1() {
  return (
    <main className="min-h-screen p-6 bg-white text-gray-900">
      <Head>
        <title>Modul 1 – Technische Analyse verstehen</title>
      </Head>
      <div className="max-w-3xl mx-auto space-y-10">
        <h1 className="text-4xl font-bold">📘 Modul 1: Was ist Technische Analyse?</h1>

        <section className="fade-in">
          <h2 className="text-2xl font-semibold mb-2">🧠 Grundprinzip</h2>
          <p>
            Die technische Analyse untersucht Charts und Kursverläufe, um Muster zu erkennen und zukünftige Preisentwicklungen
            zu prognostizieren. Sie verlässt sich auf das Marktverhalten und nicht auf Fundamentaldaten.
          </p>
        </section>

        <section className="fade-in delay-1">
          <h2 className="text-2xl font-semibold mb-2">🔑 3 Grundannahmen</h2>
          <ol className="list-decimal list-inside space-y-2">
            <li><strong>Der Markt diskontiert alles:</strong> Alle Informationen sind bereits im Preis enthalten.</li>
            <li><strong>Preise bewegen sich in Trends:</strong> Bewegungen zeigen wiedererkennbare Muster.</li>
            <li><strong>Geschichte wiederholt sich:</strong> Psychologie & Muster kehren regelmäßig zurück.</li>
          </ol>
        </section>

        <section className="fade-in delay-2">
          <h2 className="text-2xl font-semibold mb-2">📊 Technische vs. Fundamentale Analyse</h2>
          <table className="w-full text-left table-auto border border-gray-200">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-2 border border-gray-200">Technische Analyse</th>
                <th className="p-2 border border-gray-200">Fundamentalanalyse</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-2 border border-gray-200">Preis- & Volumendaten</td>
                <td className="p-2 border border-gray-200">Bilanzen, Gewinn, Geschäftsmodell</td>
              </tr>
              <tr>
                <td className="p-2 border border-gray-200">Kurz- bis mittelfristig</td>
                <td className="p-2 border border-gray-200">Langfristige Perspektive</td>
              </tr>
              <tr>
                <td className="p-2 border border-gray-200">Visuelle Mustererkennung</td>
                <td className="p-2 border border-gray-200">Zahlenbasierte Bewertung</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section className="fade-in delay-3">
          <h2 className="text-2xl font-semibold mb-2">🎯 Warum nutzen Trader sie?</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Einfacher visuell verständlich</li>
            <li>Hilft bei Timing von Kauf/Verkauf</li>
            <li>Unterstützt diszipliniertes Handeln</li>
            <li>Flexibel mit Risiko-Strategien kombinierbar</li>
          </ul>
        </section>
      </div>
    </main>
  )
}
