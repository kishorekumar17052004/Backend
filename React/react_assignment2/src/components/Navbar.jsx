import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <header className="sticky top-0 z-30 border-b border-slate-800 bg-slate-950/95 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 sm:px-8">
        <div className="text-lg font-semibold text-white">Assignment Portal</div>

        <nav className="flex flex-wrap items-center gap-3 text-sm text-slate-300">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "rounded-full bg-cyan-500/15 px-4 py-2 text-cyan-300"
                : "rounded-full px-4 py-2 transition hover:bg-slate-800 hover:text-white"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "rounded-full bg-cyan-500/15 px-4 py-2 text-cyan-300"
                : "rounded-full px-4 py-2 transition hover:bg-slate-800 hover:text-white"
            }
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "rounded-full bg-cyan-500/15 px-4 py-2 text-cyan-300"
                : "rounded-full px-4 py-2 transition hover:bg-slate-800 hover:text-white"
            }
          >
            Contact
          </NavLink>
          <NavLink
            to="/login"
            className={({ isActive }) =>
              isActive
                ? "rounded-full bg-cyan-500/15 px-4 py-2 text-cyan-300"
                : "rounded-full px-4 py-2 transition hover:bg-slate-800 hover:text-white"
            }
          >
            Login
          </NavLink>
          <NavLink
            to="/register"
            className={({ isActive }) =>
              isActive
                ? "rounded-full bg-cyan-500/15 px-4 py-2 text-cyan-300"
                : "rounded-full px-4 py-2 transition hover:bg-slate-800 hover:text-white"
            }
          >
            Register
          </NavLink>
        </nav>
      </div>
    </header>
  )
}

export default Navbar