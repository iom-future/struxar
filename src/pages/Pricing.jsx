import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Check } from "lucide-react";
import { pricing } from "../constants/content";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Pricing() {
  return (
    <>
      <Helmet>
        <title>Pricing — Struxar Construction Intelligence</title>
        <meta name="description" content="Transparent pricing for every stage of your construction operation. Start with Starter, scale to Enterprise." />
      </Helmet>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }}>
        {/* Hero */}
        <section className="bg-navy-950 section-padding text-center">
          <div className="max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 bg-blue-600/10 border border-blue-600/30">
              <span className="text-xs font-bold tracking-widest text-blue-400 uppercase">{pricing.eyebrow}</span>
            </div>
            <h1 className="font-display font-extrabold text-white mb-6" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", letterSpacing: "-0.02em" }}>
              {pricing.h2}
            </h1>
            <p className="font-body font-light text-white/60 max-w-2xl mx-auto leading-relaxed">
              {pricing.intro}
            </p>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="bg-slate-50 section-padding">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
            {pricing.tiers.map((tier, i) => (
              <motion.div
                key={tier.name}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                transition={{ delay: i * 0.12 }}
                className={`rounded-2xl p-8 border relative ${
                  tier.highlighted
                    ? "bg-navy-950 text-white border-blue-600 shadow-[0_8px_40px_rgba(37,99,235,0.25)]"
                    : "bg-white text-[#0F172A] border-slate-200"
                }`}
              >
                {tier.highlighted && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-blue-600 text-white text-xs font-body font-medium rounded-full" role="status">
                    Most Popular
                  </div>
                )}
                <h3 className="font-display font-bold text-xl mb-2">{tier.name}</h3>
                <div className="mb-2">
                  <span className="font-display font-extrabold text-4xl">
                    {tier.price}
                  </span>
                  {tier.period && (
                    <span className={`font-body text-sm ${tier.highlighted ? "text-white/50" : "text-[#64748B]"}`}>
                      {tier.period}
                    </span>
                  )}
                </div>
                <p className={`font-body text-sm mb-8 ${tier.highlighted ? "text-white/60" : "text-[#64748B]"}`}>
                  {tier.description}
                </p>
                <ul className="space-y-3 mb-8" aria-label={`${tier.name} tier features`}>
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <Check size={16} aria-hidden="true" className={`mt-0.5 flex-shrink-0 ${tier.highlighted ? "text-blue-400" : "text-blue-600"}`} />
                      <span className={`font-body text-sm ${tier.highlighted ? "text-white/80" : "text-[#0F172A]"}`}>{f}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to={tier.name === "Enterprise" ? "/demo" : "/demo"}
                  className={`block text-center font-body font-medium py-3 rounded-[10px] transition-all ${
                    tier.highlighted
                      ? "bg-blue-600 text-white hover:bg-[#1d4ed8]"
                      : "bg-[#0F172A] text-white hover:bg-[#1e293b]"
                  }`}
                  style={tier.highlighted ? { boxShadow: "0 0 30px rgba(37,99,235,0.35)" } : {}}
                >
                  {tier.cta}
                </Link>
              </motion.div>
            ))}
          </div>
        </section>

        {/* FAQ-style bottom */}
        <section className="bg-white section-padding text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="font-display font-bold text-[#0F172A] text-2xl mb-4" style={{ letterSpacing: "-0.02em" }}>
              Need a Custom Solution?
            </h2>
            <p className="font-body font-light text-[#64748B] mb-8">
              Every construction operation is different. Contact our solutions team for a tailored deployment plan that fits your project scale and compliance requirements.
            </p>
            <Link
              to="/demo"
              className="inline-block font-body bg-blue-600 text-white px-8 py-3.5 rounded-[10px] font-medium hover:bg-[#1d4ed8] transition-all"
              style={{ boxShadow: "0 0 30px rgba(37,99,235,0.35)" }}
            >
              Talk to Sales →
            </Link>
          </div>
        </section>
      </motion.div>
    </>
  );
}
