import Navbar from "./components/Navbar"
import AppRoutes from "./routes/AppRoutes"

const App = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />
      <main className="mx-auto max-w-6xl px-6 py-10 sm:px-8">
        <AppRoutes />
      </main>
    </div>
  )
}

export default App