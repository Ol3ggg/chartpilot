import { useState } from 'react'
import Link from 'next/link'

const questions = [
  {
    question: "Was ist das Hauptziel der technischen Analyse?",
    options: ["Fundamentaldaten analysieren", "Zukünftige Preisbewegungen anhand vergangener Daten vorhersagen", "Unternehmen bewerten", "Nachrichten interpretieren"],
    answer: 1
  },
  {
    question: "Welche dieser Aussagen gehört NICHT zu den Grundannahmen der technischen Analyse?",
    options: ["Der Markt diskontiert alles", "Preise bewegen sich in Trends", "Die Fundamentaldaten sind wichtiger als der Kurs", "Geschichte wiederholt sich"],
    answer: 2
  },
  {
    question: "Welche Daten nutzt die technische Analyse hauptsächlich?",
    options: ["Bilanzen und Gewinne", "Nachrichtenartikel", "Preise und Volumen", "Dividendenhöhe"],
    answer: 2
  }
]

export default function Modul1() {
  const [currentSet] = useState(() => questions.sort(() => 0.5 - Math.random()).slice(0, 3))
  const [answers, setAnswers] = useState(Array(currentSet.length).fill(null))
  const [submitted, setSubmitted] = useState(false)

  const score = answers.reduce((acc, ans, i) => ans === currentSet[i].answer ? acc + 1 : acc, 0)

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-blue-50 text-gray-900 p-6">
      <div className="max-w-4xl mx-auto space-y-8">
        <header className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">📘 Modul 1: Technische Analyse</h1>
          <Link href="/" className="text-blue-600 hover:underline">🏠 Zur Startseite</Link>
        </header>

        <section className="space-y-4 bg-white rounded-xl shadow p-6">
          <h2 className="text-2xl font-semibold">🔎 Was ist technische Analyse?</h2>
          <p>
            Die technische Analyse ist eine Methode zur Bewertung von Finanzinstrumenten basierend auf vergangenen Marktdaten – vor allem Kursen und Volumen. Sie geht davon aus, dass sich Marktbewegungen in Mustern wiederholen.
          </p>
        </section>

        <section className="space-y-4 bg-white rounded-xl shadow p-6">
          <h2 className="text-2xl font-semibold">📌 Die drei Grundannahmen</h2>
          <ol className="list-decimal list-inside space-y-2">
            <li><strong>Der Markt diskontiert alles:</strong> Alle Informationen sind im Kurs enthalten.</li>
            <li><strong>Preise bewegen sich in Trends:</strong> Bewegungen folgen Mustern (Auf/Ab/Seitwärts).</li>
            <li><strong>Geschichte wiederholt sich:</strong> Marktverhalten zeigt Wiederholungen.</li>
          </ol>
        </section>

        <section className="space-y-4 bg-white rounded-xl shadow p-6">
          <h2 className="text-2xl font-semibold">📊 TA vs. Fundamentalanalyse</h2>
          <table className="w-full text-left border border-gray-200">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-2 border">Technische Analyse</th>
                <th className="p-2 border">Fundamentalanalyse</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-2 border">Preis- & Volumendaten</td>
                <td className="p-2 border">Bilanzen, Geschäftsberichte</td>
              </tr>
              <tr>
                <td className="p-2 border">Kurz- bis mittelfristig</td>
                <td className="p-2 border">Langfristiger Fokus</td>
              </tr>
              <tr>
                <td className="p-2 border">Visuelle Musteranalyse</td>
                <td className="p-2 border">Wirtschaftliche Fundamentaldaten</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section className="space-y-4 bg-white rounded-xl shadow p-6">
          <h2 className="text-2xl font-semibold">🎯 Warum verwenden Trader TA?</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Schnelle Einschätzung des Markts</li>
            <li>Unterstützt Ein-/Ausstiegszeitpunkte</li>
            <li>Diszipliniertes Handeln</li>
            <li>Mit Risiko-Strategien kombinierbar</li>
          </ul>
        </section>

        <section className="space-y-2 bg-white rounded-xl shadow p-6">
          <h2 className="text-2xl font-semibold mb-2">🧪 Abschlusstest</h2>
          {currentSet.map((q, i) => (
            <div key={i} className="mb-4">
              <p className="font-medium">{i + 1}. {q.question}</p>
              {q.options.map((opt, j) => (
                <label key={j} className="block">
                  <input
                    type="radio"
                    name={`q${i}`}
                    disabled={submitted}
                    checked={answers[i] === j}
                    onChange={() => {{
                      const newAns = [...answers]
                      newAns[i] = j
                      setAnswers(newAns)
                    }}}
                    className="mr-2"
                  />
                  {opt}
                </label>
              ))}
              {submitted && (
                <p className={`mt-1 text-sm ${answers[i] === q.answer ? 'text-green-600' : 'text-red-600'}`}>
                  {answers[i] === q.answer ? '✔️ Richtig' : `❌ Falsch – Richtig wäre: "${q.options[q.answer]}"`}
                </p>
              )}
            </div>
          ))}
          {!submitted ? (
            <button
              onClick={() => setSubmitted(true)}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Test auswerten
            </button>
          ) : (
            <p className="font-semibold text-xl mt-4">
              ✅ Du hast {score} von {currentSet.length} richtig beantwortet.
            </p>
          )}
        </section>
      </div>
    </main>
  )
}
