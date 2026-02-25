import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection, { fadeUp } from "../../ui/AnimatedSection";
import { solution } from "../../../constants/content";

export default function Solution() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <AnimatedSection id="how-it-works" className="bg-slate-50 section-padding">
      <div className="max-w-6xl mx-auto">
        <motion.p variants={fadeUp} className="eyebrow mb-4">{solution.eyebrow}</motion.p>
        <motion.h2
          variants={fadeUp}
          className="font-display font-bold text-[#0F172A] mb-6"
          style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", letterSpacing: "-0.02em" }}
        >
          {solution.h2}
        </motion.h2>
        <motion.p variants={fadeUp} className="font-body font-light text-[#64748B] max-w-3xl mb-12 leading-relaxed">
          {solution.intro}
        </motion.p>

        {/* Tab Switcher */}
        <motion.div variants={fadeUp} className="flex flex-wrap gap-2 mb-8">
          {solution.tabs.map((tab, i) => (
            <button
              key={tab.label}
              onClick={() => setActiveTab(i)}
              className={`font-body text-sm px-5 py-2.5 rounded-full transition-all ${
                activeTab === i
                  ? "bg-blue-600 text-white shadow-lg"
                  : "bg-slate-100 text-[#0F172A] hover:bg-slate-200"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </motion.div>

        {/* Tab Content */}
        <motion.div variants={fadeUp}>
          <div className="bg-white rounded-[20px] border border-slate-200 p-8 md:p-12 min-h-[280px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <h3
                  className="font-display font-bold text-[#0F172A] text-xl md:text-2xl mb-4"
                  style={{ letterSpacing: "-0.02em" }}
                >
                  {solution.tabs[activeTab].headline}
                </h3>
                <p className="font-body font-light text-[#64748B] leading-relaxed mb-6 max-w-2xl">
                  {solution.tabs[activeTab].body}
                </p>
                <span className="inline-block font-display font-bold text-blue-600 text-lg">
                  {solution.tabs[activeTab].stat}
                </span>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Convergence Banner */}
        <motion.div
          variants={fadeUp}
          className="bg-navy-900 rounded-2xl p-8 md:p-10 mt-8 text-center"
        >
          <p className="font-body font-light text-white/80 max-w-3xl mx-auto leading-relaxed">
            {solution.convergence}
          </p>
        </motion.div>
      </div>
    </AnimatedSection>
  );
}
