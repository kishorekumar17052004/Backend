const Banner = () => {
  return (
    <section className="rounded-[2rem] bg-gradient-to-r from-slate-900 via-slate-800 to-cyan-950/90 p-10 text-white shadow-2xl shadow-slate-950/30 ring-1 ring-white/10">
      <div className="max-w-3xl space-y-6">
        <p className="text-sm uppercase tracking-[0.4em] text-cyan-300">Tailwind powered</p>
        <h1 className="text-4xl font-semibold leading-tight sm:text-5xl">
          Simple routes, clean pages, and reusable Tailwind components.
        </h1>
        <p className="text-slate-300 leading-7">
          A minimal React app structure with Home, About, Contact, Login, and Register pages, all styled using Tailwind utilities.
        </p>
      </div>
    </section>
  )
}

export default Banner