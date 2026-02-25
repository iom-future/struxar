import { motion } from "framer-motion";
import { EyeOff, Unlink, AlertTriangle } from "lucide-react";
import AnimatedSection, { fadeUp, stagger } from "../../ui/AnimatedSection";
import { problem } from "../../../constants/content";

const iconMap = { EyeOff, Unlink, AlertTriangle };

export default function Problem() {
  return (
    <AnimatedSection className="bg-slate-50 section-padding">
      <div className="max-w-6xl mx-auto">
        {/* <motion.p variants={fadeUp} className="eyebrow mb-4">{problem.eyebrow}</motion.p> */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 bg-blue-600/10 border border-blue-600/30"
          >
            <span className="text-xs font-bold tracking-widest text-blue-400 uppercase">{problem.eyebrow}</span>
          </motion.div>
        <motion.h2
          variants={fadeUp}
          className="font-display font-bold text-[#0F172A] mb-6"
          style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", letterSpacing: "-0.02em" }}
        >
          {problem.h2}
        </motion.h2>
        <motion.p variants={fadeUp} className="font-body font-light text-[#64748B] max-w-3xl mb-12 text-base sm:text-lg md:text-xl leading-relaxed">
          {problem.intro}
        </motion.p>

        {/* Problem Cards */}
        <motion.div
          variants={stagger}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
          style={{ gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}
        >
          {problem.cards.map((card) => {
            const Icon = iconMap[card.icon];
            return (
              <motion.div
                key={card.title}
                variants={fadeUp}
                whileHover={{
                  y: -4,
                  boxShadow: "0 8px 40px rgba(37,99,235,0.12)",
                }}
                className="bg-white rounded-2xl p-8 border border-slate-200 hover:border-blue-600/30 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-600/10 flex items-center justify-center mb-4">
                  {Icon && <Icon size={24} className="text-blue-600" />}
                </div>
                <h3 className="font-display font-bold text-[#0F172A] text-lg md:text-xl mb-3" style={{ letterSpacing: "-0.02em" }}>
                  {card.title}
                </h3>
                <p className="font-body font-light text-[#64748B] text-base md:text-lg leading-relaxed">
                  {card.body}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Pull Quote */}
        <motion.div
          variants={fadeUp}
          className="bg-navy-800 rounded-2xl p-8 md:p-12 border-l-4 border-blue-600"
        >
          <p className="font-body font-bold text-blue-500 text-lg md:text-xl  leading-relaxed mb-4">
            {problem.pullQuote.highlight}
          </p>
          <p className="font-body font-light text-white/[0.55] text-sm md:text-base">
            {problem.pullQuote.followUp}
          </p>
        </motion.div>
      </div>
    </AnimatedSection>
  );
}
