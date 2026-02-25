import { motion } from "framer-motion";
import BentoCard from "../../ui/BentoCard";
import AnimatedSection, { fadeUp, stagger } from "../../ui/AnimatedSection";
import { features } from "../../../constants/content";

export default function Features() {
  return (
    <AnimatedSection className="bg-slate-50 section-padding">
      <div className="max-w-6xl mx-auto">
      <motion.div
                   initial={{ opacity: 0, y: 20 }}
                   animate={{ opacity: 1, y: 0 }}
                   transition={{ duration: 0.5 }}
                   className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-2"
                   style={{
                     background: "rgba(37,99,235,0.12)",
                     border: "1px solid rgba(37,99,235,0.3)",
                   }}
                 >
                   <span className="text-xs text-blue-400">{features.eyebrow}</span>
                 </motion.div>
        <motion.h2
          variants={fadeUp}
          className="font-display font-bold text-[#0F172A] mb-6"
          style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", letterSpacing: "-0.02em" }}
        >
          {features.h2}
        </motion.h2>
        <motion.p variants={fadeUp} className="font-body font-light text-[#64748B] max-w-3xl mb-12 text-base sm:text-lg md:text-xl leading-relaxed">
          {features.intro}
        </motion.p>

        {/* Bento Grid */}
        <motion.div
          variants={stagger}
          className="grid grid-cols-1 md:grid-cols-12 gap-4"
        >
          {features.cards.map((card) => (
            <motion.div key={card.title} variants={fadeUp} className={`${card.colSpan || "col-span-12"} ${card.rowSpan || ""}`}>
              <BentoCard {...card} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </AnimatedSection>
  );
}
