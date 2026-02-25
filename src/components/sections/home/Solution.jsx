import { useState, useRef } from "react";
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
  const tabListRef = useRef(null);

  const handleKeyDown = (e) => {
    let newTab = activeTab;
    if (e.key === "ArrowRight") {
      newTab = (activeTab + 1) % solution.tabs.length;
    } else if (e.key === "ArrowLeft") {
      newTab = (activeTab - 1 + solution.tabs.length) % solution.tabs.length;
    } else if (e.key === "Home") {
      newTab = 0;
    } else if (e.key === "End") {
      newTab = solution.tabs.length - 1;
    }

    if (newTab !== activeTab) {
      setActiveTab(newTab);
      const buttons = tabListRef.current?.querySelectorAll("button");
      if (buttons && buttons[newTab]) {
        buttons[newTab].focus();
      }
    }
  };

  return (
    <AnimatedSection id="how-it-works" className="bg-slate-50 section-padding">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 bg-blue-600/10 border border-blue-600/30"
        >
          <span className="text-xs font-bold tracking-widest text-blue-400 uppercase">{solution.eyebrow}</span>
        </motion.div>
        <motion.h2
          variants={fadeUp}
          className="font-display font-bold text-[#0F172A] mb-6"
          style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", letterSpacing: "-0.02em" }}
        >
          {solution.h2}
        </motion.h2>
        <motion.p variants={fadeUp} className="font-body font-light text-[#64748B] max-w-3xl mb-12 text-base sm:text-lg md:text-xl leading-relaxed">
          {solution.intro}
        </motion.p>

        {/* Tab Switcher */}
        <motion.div 
          variants={fadeUp} 
          className="flex flex-wrap gap-2 mb-6"
          role="tablist"
          aria-label="Solution features"
          ref={tabListRef}
          onKeyDown={handleKeyDown}
        >
          {solution.tabs.map((tab, i) => (
            <button
              key={tab.label}
              id={`tab-${i}`}
              role="tab"
              aria-selected={activeTab === i}
              aria-controls={`panel-${i}`}
              tabIndex={activeTab === i ? 0 : -1}
              onClick={() => setActiveTab(i)}
              className={`font-body text-sm xl:text-base px-5 py-2.5 rounded-full transition-all ${
                activeTab === i
                  ? "bg-blue-600 text-white shadow-lg"
                  : "bg-slate-200 text-[#0F172A] hover:bg-slate-300"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </motion.div>

        {/* Swipe Hint (Mobile Only) */}
        <motion.div 
          variants={fadeUp}
          className="md:hidden flex items-center gap-2 mb-4 text-[#64748B] text-xs font-body font-medium"
        >
          <span className="flex gap-1" aria-hidden="true">
            <motion.span 
              animate={{ x: [0, -4, 0] }} 
              transition={{ repeat: Infinity, duration: 1.5 }}
            >←</motion.span>
            Slide card to see more
            <motion.span 
              animate={{ x: [0, 4, 0] }} 
              transition={{ repeat: Infinity, duration: 1.5 }}
            >→</motion.span>
          </span>
          <span className="sr-only">Swipe left or right to switch tabs</span>
        </motion.div>

        {/* Tab Content */}
        <motion.div 
          variants={fadeUp}
          className="relative"
        >
          <motion.div 
            id={`panel-${activeTab}`}
            role="tabpanel"
            aria-labelledby={`tab-${activeTab}`}
            className="bg-white rounded-[20px] border border-slate-200 overflow-hidden md:h-[370px] h-auto flex flex-col md:flex-row touch-pan-y cursor-grab active:cursor-grabbing"
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.05}
            onDragEnd={(e, info) => {
              const swipeThreshold = 50;
              const velocityThreshold = 500;
              const swipe = info.offset.x;
              const velocity = info.velocity.x;

              if (Math.abs(swipe) > swipeThreshold || Math.abs(velocity) > velocityThreshold) {
                if (swipe > 0 && activeTab > 0) {
                  setActiveTab(prev => prev - 1);
                } else if (swipe < 0 && activeTab < solution.tabs.length - 1) {
                  setActiveTab(prev => prev + 1);
                }
              }
            }}
          >
            <div className="w-full image-container md:w-[35%] h-[250px] md:h-full relative bg-slate-100 pointer-events-none">
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
                    alt=""
                    className="w-full h-full object-cover"
                    aria-hidden="true"
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="w-full md:w-[65%] p-4 md:p-8 flex flex-col justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3
                    className="font-display font-bold text-[#0F172A] text-lg md:text-xl lg:text-2xl  mb-4"
                    style={{ letterSpacing: "-0.02em" }}
                  >
                    {solution.tabs[activeTab].headline}
                  </h3>
                  <p className="font-body font-light text-[#64748B] leading-relaxed mb-8 text-base ">
                    {solution.tabs[activeTab].body}
                  </p>
                  <div className="pt-2 border-t border-slate-100">
                    <span className="block text-xs uppercase tracking-widest text-[#64748B] mb-2 font-body font-medium">Outcome</span>
                    <span className="inline-block font-display font-bold text-blue-600 text-xl">
                      {solution.tabs[activeTab].stat}
                    </span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        </motion.div>
       {/* Swipe Hint (Mobile Only) */}
        <motion.div 
          variants={fadeUp}
          className="md:hidden flex items-center gap-2 mb-8 mt-4 text-[#64748B] text-xs font-body font-medium"
        >
          <span className="flex gap-1" aria-hidden="true">
            <motion.span 
              animate={{ x: [0, -4, 0] }} 
              transition={{ repeat: Infinity, duration: 1.5 }}
            >←</motion.span>
            Slide card to see more
            <motion.span 
              animate={{ x: [0, 4, 0] }} 
              transition={{ repeat: Infinity, duration: 1.5 }}
            >→</motion.span>
          </span>
          <span className="sr-only">Swipe left or right to switch tabs</span>
        </motion.div>
        {/* Convergence Banner */}
        <motion.div
          variants={fadeUp}
          className="bg-navy-900 rounded-2xl p-8 md:p-10 mt-8 text-center"
        >
          <p className="font-body font-light md:text-lg text-white/80 max-w-3xl mx-auto leading-relaxed">
            {solution.convergence}
          </p>
        </motion.div>
      </div>
    </AnimatedSection>
  );
}
