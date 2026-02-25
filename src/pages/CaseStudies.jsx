import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
import { caseStudies } from "../constants/content";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function CaseStudies() {
  const [selected, setSelected] = useState(null);

  return (
    <>
      <Helmet>
        <title>Case Studies — Struxar Construction Intelligence</title>
        <meta name="description" content="See how leading contractors are using Struxar to prevent costly delays, eliminate errors, and automate compliance." />
      </Helmet>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }}>
        {/* Hero */}
        <section className="bg-navy-950 section-padding text-center">
          <div className="max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 bg-blue-600/10 border border-blue-600/30">
              <span className="text-xs font-bold tracking-widest text-blue-400 uppercase">{caseStudies.eyebrow}</span>
            </div>
            <h1 className="font-display font-extrabold text-white mb-6" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", letterSpacing: "-0.02em" }}>
              {caseStudies.h2}
            </h1>
            <p className="font-body font-light text-white/60 max-w-2xl mx-auto leading-relaxed">
              {caseStudies.intro}
            </p>
          </div>
        </section>

        {/* Case Study Cards / Detail View */}
        <section className="bg-slate-50 section-padding">
          <div className="max-w-6xl mx-auto">
            <AnimatePresence mode="wait">
              {selected !== null ? (
                /* Detail View */
                <motion.div
                  key="detail"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <button
                    onClick={() => setSelected(null)}
                    className="flex items-center gap-2 font-body text-blue-600 text-sm mb-8 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-600 rounded"
                    aria-label="Back to all case studies"
                  >
                    <ArrowLeft size={16} aria-hidden="true" /> Back to All Case Studies
                  </button>

                  {(() => {
                    const study = caseStudies.studies[selected];
                    return (
                      <div>
                        <span className="inline-block px-3 py-1 bg-blue-600/10 text-blue-600 font-body text-xs rounded-full mb-4">
                          {study.category}
                        </span>
                        <h2 className="font-display font-bold text-[#0F172A] text-3xl md:text-4xl mb-2" style={{ letterSpacing: "-0.02em" }}>
                          {study.title}
                        </h2>
                        <p className="font-body text-[#64748B] text-sm mb-8">{study.client}</p>

                        {/* Results grid */}
                        <div className="grid grid-cols-3 gap-4 mb-10" aria-label="Key project results">
                          {study.results.map((r) => (
                            <div key={r.label} className="bg-navy-950 rounded-2xl p-6 text-center shadow-lg border border-blue-900/30">
                              <p className="font-display font-extrabold text-blue-500 text-3xl mb-1">{r.metric}</p>
                              <p className="font-body text-white/50 text-xs uppercase tracking-wider">{r.label}</p>
                            </div>
                          ))}
                        </div>

                        <div className="bg-white rounded-2xl border border-slate-200 p-8 md:p-10 mb-8">
                          <h3 className="font-display font-bold text-[#0F172A] text-lg mb-4">The Challenge & Solution</h3>
                          <p className="font-body font-light text-[#64748B] leading-relaxed">
                            {study.summary}
                          </p>
                        </div>

                        <div className="bg-navy-800 rounded-2xl p-8 border-l-4 border-blue-600">
                          <Quote size={24} aria-hidden="true" className="text-blue-500 mb-3" />
                          <blockquote className="font-body font-light text-white/80 text-lg italic leading-relaxed mb-3">
                            &ldquo;{study.quote}&rdquo;
                          </blockquote>
                          <cite className="font-body text-white/40 text-sm not-italic">— {study.quoteAuthor}</cite>
                        </div>
                      </div>
                    );
                  })()}
                </motion.div>
              ) : (
                /* Card listing */
                <motion.div
                  key="listing"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="grid grid-cols-1 md:grid-cols-3 gap-6"
                  role="list"
                  aria-label="Case studies listing"
                >
                  {caseStudies.studies.map((study, i) => (
                    <motion.div
                      key={study.title}
                      role="listitem"
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      variants={fadeUp}
                      transition={{ delay: i * 0.12 }}
                      whileHover={{ y: -4, boxShadow: "0 8px 40px rgba(37,99,235,0.12)" }}
                      className="bg-white rounded-2xl border border-slate-200 overflow-hidden cursor-pointer group focus-within:ring-2 focus-within:ring-blue-600 focus-within:ring-offset-2 outline-none"
                      tabIndex={0}
                      onClick={() => setSelected(i)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault();
                          setSelected(i);
                        }
                      }}
                      aria-label={`View case study: ${study.title}`}
                    >
                      {/* Color header */}
                      <div className="bg-navy-950 h-40 flex items-center justify-center p-6">
                        <h3 className="font-display font-bold text-white text-center text-lg" style={{ letterSpacing: "-0.02em" }}>
                          {study.title}
                        </h3>
                      </div>
                      <div className="p-6">
                        <span className="inline-block px-3 py-1 bg-blue-600/10 text-blue-600 font-body text-xs rounded-full mb-3">
                          {study.category}
                        </span>
                        <p className="font-body font-light text-[#64748B] text-sm leading-relaxed mb-4 line-clamp-3">
                          {study.summary}
                        </p>
                        <span className="font-body text-blue-600 text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                          Read Case Study <ArrowRight size={14} aria-hidden="true" />
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </section>
      </motion.div>
    </>
  );
}
