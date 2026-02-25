import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import CircuitBg from "../components/ui/CircuitBg";
import { cta } from "../constants/content";

export default function Demo() {
  return (
    <>
      <Helmet>
        <title>Request a Demo — Struxar Construction Intelligence</title>
        <meta name="description" content="Schedule a free live demo of Struxar's AR + AI + IoT construction intelligence platform. Setup takes under 48 hours." />
      </Helmet>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }}>
        <section className="bg-navy-950 min-h-screen relative overflow-hidden">
          <CircuitBg opacity={0.1} />
          {/* Radial glows */}
          <div
            className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full"
            style={{ background: "radial-gradient(circle, rgba(37,99,235,0.08) 0%, transparent 70%)" }}
          />
          <div
            className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full"
            style={{ background: "radial-gradient(circle, rgba(37,99,235,0.06) 0%, transparent 70%)" }}
          />

          <div className="relative section-padding flex flex-col items-center justify-center min-h-screen">
            <div className="text-center max-w-xl mx-auto mb-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 bg-blue-600/10 border border-blue-600/30">
                <span className="text-xs font-bold tracking-widest text-blue-400 uppercase">REQUEST A DEMO</span>
              </div>
              <h1
                className="font-display font-extrabold text-white mb-4"
                style={{ fontSize: "clamp(2rem, 5vw, 3rem)", letterSpacing: "-0.02em" }}
              >
                {cta.h2}
              </h1>
              <p className="font-body font-light text-white/60">
                {cta.subheadline}
              </p>
            </div>

            {/* Form Card */}
            <div className="bg-white rounded-2xl p-8 md:p-10 w-full max-w-[560px] shadow-2xl">
              <h2 className="font-display font-bold text-[#0F172A] text-xl mb-6 text-center">
                {cta.formHeadline}
              </h2>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full px-4 py-3 rounded-[10px] border border-slate-200 font-body text-sm focus:border-blue-600 focus:ring-1 focus:ring-blue-600 outline-none transition-all"
                />
                <input
                  type="email"
                  placeholder="Work Email"
                  className="w-full px-4 py-3 rounded-[10px] border border-slate-200 font-body text-sm focus:border-blue-600 focus:ring-1 focus:ring-blue-600 outline-none transition-all"
                />
                <input
                  type="text"
                  placeholder="Company"
                  className="w-full px-4 py-3 rounded-[10px] border border-slate-200 font-body text-sm focus:border-blue-600 focus:ring-1 focus:ring-blue-600 outline-none transition-all"
                />
                <select className="w-full px-4 py-3 rounded-[10px] border border-slate-200 font-body text-sm text-[#64748B] focus:border-blue-600 focus:ring-1 focus:ring-blue-600 outline-none transition-all">
                  <option value="">Project Size</option>
                  {cta.projectSizes.map((size) => (
                    <option key={size} value={size}>{size}</option>
                  ))}
                </select>
                <input
                  type="number"
                  placeholder="No. of Active Sites"
                  className="w-full px-4 py-3 rounded-[10px] border border-slate-200 font-body text-sm focus:border-blue-600 focus:ring-1 focus:ring-blue-600 outline-none transition-all"
                />
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white font-body font-medium py-3.5 rounded-[10px] hover:bg-[#1d4ed8] transition-all"
                  style={{ boxShadow: "0 0 30px rgba(37,99,235,0.35)" }}
                >
                  {cta.submitText}
                </button>
              </form>
              <p className="font-body text-[#64748B] text-xs mt-4 leading-relaxed text-center">
                {cta.privacy}
              </p>
            </div>

            {/* Secondary CTAs */}
            <div className="flex flex-wrap gap-4 justify-center mt-8">
              {cta.secondaryCtas.map((label) => (
                <button
                  key={label}
                  className="font-body text-sm text-white/60 border border-white/20 px-6 py-2.5 rounded-[10px] hover:text-white hover:border-white/40 transition-all"
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        </section>
      </motion.div>
    </>
  );
}
