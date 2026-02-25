import { motion } from "framer-motion";
import BentoCard from "../../ui/BentoCard";
import AnimatedSection, { fadeUp, stagger } from "../../ui/AnimatedSection";
import { features } from "../../../constants/content";

export default function Features() {
  return (
    <AnimatedSection className="bg-slate-50 section-padding">
      <div className="max-w-6xl mx-auto">
        <motion.p variants={fadeUp} className="eyebrow mb-4">{features.eyebrow}</motion.p>
        <motion.h2
          variants={fadeUp}
          className="font-display font-bold text-[#0F172A] mb-6"
          style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", letterSpacing: "-0.02em" }}
        >
          {features.h2}
        </motion.h2>
        <motion.p variants={fadeUp} className="font-body font-light text-[#64748B] max-w-3xl mb-12 leading-relaxed">
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
