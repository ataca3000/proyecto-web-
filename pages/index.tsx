import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Lumi⭐Nova</title>
        <meta
          name="description"
          content="Plataforma de ingeniería urbana y catálogos técnicos de hardware recuperado."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="font-sans">
        {/* Hero Section */}
        <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-900 to-black text-white text-center px-6">
          <h1 className="text-5xl font-bold mb-4">Bienvenido a Lumi⭐Nova</h1>
          <p className="text-lg max-w-2xl mb-6">
            Ingeniería urbana, catálogos técnicos y branding auténtico.  
            Documentamos, protegemos y damos vida a hardware recuperado.
          </p>
          <a
            href="#catalogo"
            className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition"
          >
            Ver Catálogo
          </a>
        </section>

        {/* Catálogo Section */}
        <section id="catalogo" className="py-20 bg-gray-100 text-gray-900 px-6">
          <h2 className="text-3xl font-bold text-center mb-10">Catálogo Técnico</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="p-6 bg-white shadow rounded">
              <h3 className="font-semibold text-xl mb-2">Módulo de Control</h3>
              <p className="text-sm">
                Recuperado de grúa industrial. Documentado con pinouts y esquemas.
              </p>
            </div>
            <div className="p-6 bg-white shadow rounded">
              <h3 className="font-semibold text-xl mb-2">Optoacoplador</h3>
