import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>ChartPilot</title>
      </Head>
      <main style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
        <h1>Willkommen bei ChartPilot</h1>
        <p>Dies ist der Start deiner Reise in die technische Analyse.</p>
      </main>
    </>
  );
}
