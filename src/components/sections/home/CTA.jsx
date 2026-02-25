import { cta } from "../../../constants/content";

export default function CTA() {
  return (
    <section className="bg-navy-950">
      {/* Urgency Banner */}
      <div
        className="text-center py-3 px-4 font-body text-white text-sm md:text-base"
        style={{ background: "linear-gradient(90deg, #2563EB, #1d4ed8)" }}
      >
        {cta.urgency}
      </div>

      <div className="section-padding">
        <div className="max-w-3xl mx-auto text-center">
          <h2
            className="font-display font-bold text-white mb-4"
            style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", letterSpacing: "-0.02em" }}
          >
            {cta.h2}
          </h2>
          <p className="font-body  text-base sm:text-lg md:text-xl font-light text-white/60 mb-12 max-w-xl mx-auto">
            {cta.subheadline}
          </p>

          {/* Form Card */}
          <div className="bg-white rounded-2xl p-8 md:p-10 max-w-[560px] mx-auto shadow-xl">
            <h3 className="font-display font-bold text-[#0F172A] text-xl md:text-2xl mb-6">
              {cta.formHeadline}
            </h3>
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
            <p className="font-body text-[#64748B] text-xs mt-4 leading-relaxed">
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
      </div>
    </section>
  );
}
