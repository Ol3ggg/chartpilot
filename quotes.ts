
const facts = [
  { text: "The trend is your friend – until it ends.", source: "Börsenweisheit" },
  { text: "Technische Analyse zeigt dir nicht, was passieren wird – sondern was möglich ist.", source: "ChartPilot" },
  { text: "Charts sind der Herzschlag des Marktes – lerne ihn zu lesen.", source: "ChartPilot" },
  { text: "Märkte sind nie falsch – Meinungen schon.", source: "Jesse Livermore" }
];

export function getRandomFact() {
  return facts[Math.floor(Math.random() * facts.length)];
}
