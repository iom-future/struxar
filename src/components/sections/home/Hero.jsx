import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import CircuitBg from "../../ui/CircuitBg";
import StatCounter from "../../ui/StatCounter";
import { hero } from "../../../constants/content";
import heroImage from "../../../assets/hero_image.png";

export default function Hero() {
  return (
    <section className="relative bg-navy-950 overflow-hidden">
      {/* Background elements */}
      <CircuitBg opacity={0.18} />
      <div
        className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(37,99,235,0.1) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(37,99,235,0.08) 0%, transparent 70%)",
        }}
      />

      {/* Content Container */}
      <div className="relative max-w-7xl mx-auto section-padding">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-16">
          {/* Text Content (50% on desktop) */}
          <div className="lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
            {/* Eyebrow */}
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
              <span className="text-xs text-blue-400">{hero.eyebrow}</span>
            </motion.div>

            {/* H1 */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display md:text-4xl text-3xl lg:text-5xl font-extrabold text-white mb-6"
              style={{
                letterSpacing: "-0.02em",
                lineHeight: 1.1,
              }}
            >
              {hero.h1Line1}
              <br />
              <span className="bg-gradient-to-br from-blue-500 to-blue-400 bg-clip-text text-transparent">
                {hero.h1Line2}
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-body font-light max-w-2xl mb-4"
              style={{
                fontSize: "clamp(1rem, 2vw, 1.2rem)",
                color: "rgba(255,255,255,0.7)",
              }}
            >
              {hero.subheadline}
            </motion.p>

            {/* Supporting */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="font-body font-light italic text-white/40 text-sm mb-8 max-w-xl"
            >
              {hero.supporting}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap gap-4 mb-8 justify-center lg:justify-start"
            >
              <Link
                to="/demo"
                className="font-body bg-blue-600 text-white px-8 py-3.5 rounded-[10px] font-medium hover:bg-[#1d4ed8] transition-all"
                style={{ boxShadow: "0 0 30px rgba(37,99,235,0.35)" }}
              >
                {hero.ctaPrimary}
              </Link>
              <button
                onClick={() =>
                  document.getElementById("how-it-works")?.scrollIntoView({ behavior: "smooth" })
                }
                className="font-body text-white border border-white/20 px-8 py-3.5 rounded-[10px] hover:border-white/40 hover:bg-white/5 transition-all"
              >
                {hero.ctaSecondary}
              </button>
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-wrap gap-4 md:gap-6 justify-center lg:justify-start"
            >
              {hero.trustBadges.map((badge) => (
                <span
                  key={badge}
                  className="font-body text-[0.78rem]"
                  style={{ color: "rgba(255,255,255,0.45)" }}
                >
                  {badge}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Hero Image (50% on desktop) */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:w-1/2 w-full relative group"
          >
            <div className="absolute -inset-4 bg-blue-500/10 blur-3xl rounded-full group-hover:bg-blue-500/20 transition-all duration-500" />
            <img 
              src={heroImage} 
              alt="Struxar Intelligence Platform" 
              className="relative w-full h-auto rounded-2xl shadow-2xl border border-white/10"
            />
          </motion.div>
        </div>
      </div>

      {/* Stats Bar */}
      <div
        className="relative border-t"
        style={{
          background: "rgba(8,14,29,0.85)",
          backdropFilter: "blur(12px)",
          borderColor: "rgba(37,99,235,0.2)",
        }}
      >
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4">
          {hero.stats.map((stat, i) => (
            <div
              key={stat.label}
              className={i < hero.stats.length - 1 ? "md:border-r border-blue-600/20" : ""}
            >
              <StatCounter
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
