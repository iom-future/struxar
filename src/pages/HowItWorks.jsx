import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Eye, Brain, Wifi, Monitor, ArrowRight } from "lucide-react";
import { howItWorks } from "../constants/content";

const pillarIcons = [Eye, Brain, Wifi, Monitor];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};
const stagger = { visible: { transition: { staggerChildren: 0.12 } } };

function AnimatedSection({ children, className = "" }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  return (
    <motion.section ref={ref} className={className} initial="hidden" animate={inView ? "visible" : "hidden"} variants={stagger}>
      {children}
    </motion.section>
  );
}

export default function HowItWorks() {
  return (
    <>
      <Helmet>
        <title>How It Works — Struxar Construction Intelligence</title>
        <meta name="description" content="Discover the four pillars of Struxar: AR Vision, AI Predict, Sensor Network, and Command Center — working together for total site intelligence." />
      </Helmet>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }}>
        {/* Hero */}
        <section className="bg-navy-950 section-padding text-center">
          <div className="max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 bg-blue-600/10 border border-blue-600/30">
              <span className="text-xs font-bold tracking-widest text-blue-400 uppercase">{howItWorks.eyebrow}</span>
            </div>
            <h1 className="font-display font-extrabold text-white mb-6" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", letterSpacing: "-0.02em" }}>
              {howItWorks.h2}
            </h1>
            <p className="font-body font-light text-white/60 max-w-2xl mx-auto leading-relaxed">
              {howItWorks.intro}
            </p>
          </div>
        </section>

        {/* Visual Flow (step connector line) */}
        <section className="bg-slate-50 section-padding relative">
          <div className="max-w-5xl mx-auto relative">
            {/* Connector line (desktop only) */}
            <div className="hidden md:block absolute left-[39px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-blue-600/40 via-blue-600/20 to-transparent" />

            <div className="space-y-16">
              {howItWorks.pillars.map((pillar, i) => {
                const Icon = pillarIcons[i];
                return (
                  <AnimatedSection key={pillar.step}>
                    <div className="flex gap-8 md:gap-12 items-start relative">
                      {/* Step number + icon */}
                      <motion.div variants={fadeUp} className="flex-shrink-0 relative">
                        <div className="w-20 h-20 rounded-2xl bg-blue-600/10 border border-blue-600/20 flex items-center justify-center">
                          <Icon size={32} className="text-blue-600" />
                        </div>
                        <span className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-blue-600 text-white text-xs font-display font-bold flex items-center justify-center">
                          {pillar.step}
                        </span>
                      </motion.div>

                      {/* Content */}
                      <motion.div variants={fadeUp} className="flex-1">
                        <p className="font-body text-blue-600 text-xs uppercase tracking-wider mb-1">{pillar.subtitle}</p>
                        <h2 className="font-display font-bold text-[#0F172A] text-2xl md:text-3xl mb-3" style={{ letterSpacing: "-0.02em" }}>
                          {pillar.title}
                        </h2>
                        <p className="font-body font-light text-[#64748B] leading-relaxed mb-6 max-w-2xl">
                          {pillar.description}
                        </p>
                        <div className="bg-white rounded-2xl border border-slate-200 p-6">
                          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {pillar.details.map((detail) => (
                              <li key={detail} className="flex items-start gap-3">
                                <ArrowRight size={14} className="text-blue-600 mt-1 flex-shrink-0" />
                                <span className="font-body text-[#0F172A] text-sm">{detail}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    </div>
                  </AnimatedSection>
                );
              })}
            </div>
          </div>
        </section>

        {/* Convergence */}
        <section className="bg-navy-900 section-padding text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display font-bold text-white text-2xl mb-4" style={{ letterSpacing: "-0.02em" }}>
              All Four Pillars. One Platform.
            </h2>
            <p className="font-body font-light text-white/60 leading-relaxed">
              Each pillar is powerful on its own. Together, they create a construction intelligence engine that sees everything, predicts everything, and never lets your team operate blind.
            </p>
          </div>
        </section>
      </motion.div>
    </>
  );
}
