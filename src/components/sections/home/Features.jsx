import { motion } from "framer-motion";
import BentoCard from "../../ui/BentoCard";
import AnimatedSection, { fadeUp, stagger } from "../../ui/AnimatedSection";
import { features } from "../../../constants/content";

// Feature Images
import feat1 from "../../../assets/features/s_feature1-removebg-preview.png";
import feat2 from "../../../assets/features/s_feature2-removebg-preview.png";
import feat4 from "../../../assets/features/s_feature4-removebg-preview.png";
import feat5 from "../../../assets/features/s_feature5-removebg-preview (1).png";

const featureImages = {
  0: feat1,
  1: feat2,
  3: feat4,
  4: feat5,
};

export default function Features() {
  return (
    <AnimatedSection className="bg-slate-50 section-padding overflow-hidden">
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

        {/* Custom Bento Grid */}
        <motion.div
          variants={stagger}
          className="grid grid-cols-1 lg:grid-cols-10 gap-8"
        >
          {features.cards.map((card, i) => {
            // Grid logic based on user design:
            // Row 1: 60% (index 0) | 40% (index 1)
            // Row 2: 40% (index 2) | 60% (index 3)
            // Row 3: 50% (index 4) | 50% (index 5)
            
            let colSpan = "lg:col-span-10"; // Default mobile
            let image = null;

            if (i === 0) { // Box 1: 60%
              colSpan = "lg:col-span-6";
              image = feat1;
            } else if (i === 1) { // Box 2: 40%
              colSpan = "lg:col-span-4";
            } else if (i === 2) { // Box 3: 40%
              colSpan = "lg:col-span-4";
            } else if (i === 3) { // Box 4: 60%
              colSpan = "lg:col-span-6";
              image = feat2;
            } else if (i === 4) { // Box 5: 50%
              colSpan = "lg:col-span-5";
              image = feat4;
            } else if (i === 5) { // Box 6: 50%
              colSpan = "lg:col-span-5";
              image = feat5;
            }

            return (
              <motion.div key={card.title} variants={fadeUp} className={colSpan}>
                <BentoCard {...card} image={image} />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </AnimatedSection>
  );
}
