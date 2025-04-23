import { useState } from 'react'
import Link from 'next/link'

const questions = [
  {
    question: "Was bedeutet der Satz: Der Markt diskontiert alles?",
    options: [
      "Nur fundamentale Daten sind wichtig",
      "Alle verfügbaren Informationen spiegeln sich im Preis wider",
      "Technische Analyse ist nutzlos",
      "Der Preis folgt keiner Logik"
    ],
    answer: 1
  },
  {
    question: "Was ist ein typisches Ziel der technischen Analyse?",
    options: [
      "Ein Unternehmen kaufen",
      "Steuerliche Vorteile berechnen",
      "Trendrichtungen erkennen",
      "Dividenden abschätzen"
    ],
    answer: 2
  },
  {
    question: "Was ist ein Widerstand?",
    options: [
      "Ein Bereich, an dem der Kurs oft steigt",
      "Ein Bereich, an dem der Kurs oft fällt",
      "Ein Punkt im Fundamentaldatenbericht",
      "Ein Börsenindikator"
    ],
    answer: 1
  }
]

export default function Modul1Test() {
  const [set] = useState(() => questions.sort(() => 0.5 - Math.random()).slice(0, 3))
  const [answers, setAnswers] = useState(Array(set.length).fill(null))
  const [submitted, setSubmitted] = useState(false)

  const score = answers.reduce((acc, ans, i) => ans === set[i].answer ? acc + 1 : acc, 0)

  return (
    <main className="min-h-screen bg-blue-50 p-6">
      <div className="max-w-4xl mx-auto space-y-8">
        <header className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">🧪 Abschlusstest: Modul 1</h1>
          <Link href="/" className="text-blue-600 hover:underline">🏠 Zur Startseite</Link>
        </header>

        {set.map((q, i) => (
          <div key={i} className="bg-white rounded-xl shadow p-4">
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
                {answers[i] === q.answer ? '✔️ Richtig' : `❌ Falsch – Richtig: "${q.options[q.answer]}"`}
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
            ✅ Du hast {score} von {set.length} richtig beantwortet.
          </p>
        )}
      </div>
    </main>
  )
}
