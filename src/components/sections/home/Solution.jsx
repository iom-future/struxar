import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection, { fadeUp } from "../../ui/AnimatedSection";
import { solution } from "../../../constants/content";
import sol1 from "../../../assets/solutions/solution1.png";
import sol2 from "../../../assets/solutions/solution2.png";
import sol3 from "../../../assets/solutions/solution3.png";
import sol4 from "../../../assets/solutions/solution4.png";

const solutionImages = [sol1, sol2, sol3, sol4];

export default function Solution() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <AnimatedSection id="how-it-works" className="bg-slate-50 section-padding">
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
          <span className="text-xs text-blue-400">{solution.eyebrow}</span>
        </motion.div>
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
          <div className="bg-white rounded-[20px] border border-slate-200 overflow-hidden flex flex-col md:flex-row h-[400px]">
            <div className="w-full md:w-1/2 relative bg-slate-100 min-h-[300px] md:min-h-0">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="absolute inset-0"
                >
                  <img
                    src={solutionImages[activeTab]}
                    alt={solution.tabs[activeTab].label}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="w-full md:w-1/2 p-8 md:p-14 flex flex-col justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3
                    className="font-display font-bold text-[#0F172A] text-xl md:text-3xl mb-4"
                    style={{ letterSpacing: "-0.02em" }}
                  >
                    {solution.tabs[activeTab].headline}
                  </h3>
                  <p className="font-body font-light text-[#64748B] leading-relaxed mb-8 text-lg">
                    {solution.tabs[activeTab].body}
                  </p>
                  <div className="pt-6 border-t border-slate-100">
                    <span className="block text-xs uppercase tracking-widest text-[#64748B] mb-2 font-body font-medium">Outcome</span>
                    <span className="inline-block font-display font-bold text-blue-600 text-xl">
                      {solution.tabs[activeTab].stat}
                    </span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
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
