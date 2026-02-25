import { motion } from "framer-motion";
import StatCounter from "../../ui/StatCounter";
import TestimonialCard from "../../ui/TestimonialCard";
import AnimatedSection, { fadeUp, stagger } from "../../ui/AnimatedSection";
import { socialProof } from "../../../constants/content";
import t1 from "../../../assets/testimonials/s_test1.jpg";
import t2 from "../../../assets/testimonials/s_test2.jpg";
import t3 from "../../../assets/testimonials/s_test3.jpg";

const testimonialImages = [t1, t2, t3];

export default function SocialProof() {
  return (
    <AnimatedSection className="bg-navy-950 section-padding">
      <div className="max-w-6xl mx-auto">
       <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8"
              style={{
                background: "rgba(37,99,235,0.12)",
                border: "1px solid rgba(37,99,235,0.3)",
              }}
            >
              <span className="text-xs text-blue-400">{socialProof.eyebrow}</span>
            </motion.div>
        <motion.h2
          variants={fadeUp}
          className="font-display font-bold text-white mb-6"
          style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", letterSpacing: "-0.02em" }}
        >
          {socialProof.h2}
        </motion.h2>
        <motion.p variants={fadeUp} className="font-body font-light text-[#64748B] max-w-3xl mb-12 text-base sm:text-lg md:text-xl leading-relaxed">
          {socialProof.intro}
        </motion.p>

        {/* Stats */}
        <motion.div
          variants={stagger}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
        >
          {socialProof.stats.map((stat) => (
            <motion.div key={stat.label} variants={fadeUp}>
              <StatCounter {...stat} />
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonials */}
        <motion.div
          variants={stagger}
          className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16"
        >
          {socialProof.testimonials.map((t, i) => (
            <motion.div key={t.name} variants={fadeUp}>
              <TestimonialCard {...t} image={testimonialImages[i]} />
            </motion.div>
          ))}
        </motion.div>

        {/* Logo Strip */}
        <motion.div variants={fadeUp} className="text-center">
          <p className="font-body text-white/30 text-sm md:text-base mb-6">Integrated With Your Existing Stack</p>
          <div className="flex flex-wrap justify-center gap-4">
            {socialProof.logos.map((logo) => (
              <div
                key={logo}
                className="bg-white/5 border border-white/10 rounded-xl px-6 py-3 font-body text-white/40 text-sm"
              >
                {logo}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </AnimatedSection>
  );
}
