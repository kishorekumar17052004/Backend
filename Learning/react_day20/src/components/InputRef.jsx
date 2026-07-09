import { useRef } from "react"

const InputRef = () => {
    const nameref = useRef("")
    const emailref = useRef("")
    const phoneref = useRef("")
    const projectref = useRef("")
    const pararef1 = useRef("")
    const pararef2 = useRef("")
    const pararef3 = useRef("")
    const pararef4 = useRef("")
    const handleChange = ()=>{
          const data = {
            name: nameref.current.value,
            email: emailref.current.value,
            phone: phoneref.current.value,
            project: projectref.current.value,
          }
          pararef1.current.innerText = data.name
          pararef2.current.innerText = data.email
          pararef3.current.innerText = data.phone
          pararef4.current.innerText = data.project
    }
  return (
  <div className="mx-auto mt-10 grid max-w-6xl gap-8 px-4 md:grid-cols-2 xl:grid-cols-[1.05fr_1.45fr]">
    <section className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_20px_45px_rgba(15,23,42,0.08)]">
      <div className="mb-6 border-b border-slate-200 pb-4">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-700">Resume Builder</p>
        <h2 className="mt-3 text-2xl font-semibold text-slate-900">Edit your profile</h2>
        <p className="mt-2 text-sm text-slate-500">Update the fields to see the resume preview refresh instantly.</p>
      </div>

      <div className="space-y-4">
        <label className="block text-sm font-medium text-slate-700">Full name</label>
        <input
          className="w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-100"
          type="text"
          placeholder="Name"
          ref={nameref}
          onChange={handleChange}
        />
      </div>

      <div className="mt-6 space-y-4">
        <label className="block text-sm font-medium text-slate-700">Contact email</label>
        <input
          className="w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-100"
          type="text"
          placeholder="Email"
          ref={emailref}
          onChange={handleChange}
        />
      </div>

      <div className="mt-6 space-y-4">
        <label className="block text-sm font-medium text-slate-700">Phone</label>
        <input
          className="w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-100"
          type="text"
          placeholder="Phone"
          ref={phoneref}
          onChange={handleChange}
        />
      </div>

      <div className="mt-6 space-y-4">
        <label className="block text-sm font-medium text-slate-700">Project / Summary</label>
        <input
          className="w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-100"
          type="text"
          placeholder="Project"
          ref={projectref}
          onChange={handleChange}
        />
      </div>
    </section>

    <section className="rounded-[28px] border border-slate-200 bg-slate-900 p-6 text-white shadow-[0_20px_45px_rgba(15,23,42,0.14)]">
      <div className="mb-8 rounded-[24px] bg-slate-800 p-6 shadow-[0_12px_30px_rgba(0,0,0,0.18)]">
        <p className="text-xs uppercase tracking-[0.3em] text-sky-400">Professional Resume</p>
        <h1 className="mt-4 text-4xl font-semibold text-white"><span ref={pararef1}></span></h1>
        <div className="mt-4 flex flex-wrap gap-3 text-sm text-slate-300">
          <span className="rounded-full bg-white/10 px-3 py-1">Contact</span>
          <span className="rounded-full bg-white/10 px-3 py-1">Experience</span>
          <span className="rounded-full bg-white/10 px-3 py-1">Projects</span>
        </div>
      </div>

      <div className="space-y-6">
        <div className="rounded-3xl bg-slate-800 p-5 ring-1 ring-white/10">
          <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">Contact</h3>
          <div className="mt-4 space-y-3 text-sm text-slate-200">
            <p className="rounded-2xl bg-slate-900/90 p-4">Email: <span ref={pararef2} className="text-slate-100"></span></p>
            <p className="rounded-2xl bg-slate-900/90 p-4">Phone: <span ref={pararef3} className="text-slate-100"></span></p>
          </div>
        </div>

        <div className="rounded-3xl bg-slate-800 p-5 ring-1 ring-white/10">
          <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">Summary</h3>
          <p ref={pararef4} className="mt-4 rounded-2xl bg-slate-900/90 p-4 text-sm leading-7 text-slate-200 min-h-[96px]"></p>
        </div>
      </div>
    </section>
  </div>
  )
}

export default InputRef