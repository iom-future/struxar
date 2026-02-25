import { motion } from "framer-motion";
import * as Icons from "lucide-react";

export default function BentoCard({ icon, title, body, bg, textColor, colSpan, rowSpan, isHero, image }) {
  const IconComponent = Icons[icon];
  const isDark = bg?.includes("navy") || bg?.includes("blue-600") || bg === "bg-navy-950";

  return (
    <motion.div
      className={`relative rounded-2xl p-6 md:p-10 h-full flex flex-col md:flex-row items-start md:items-center gap-6 ${bg} ${textColor} ${colSpan || ""} ${rowSpan || ""} border ${isDark ? "border-blue-600/20" : "border-slate-200"}`}
      whileHover={{
        y: -4,
        boxShadow: isDark
          ? "0 12px 48px rgba(37,99,235,0.3)"
          : "0 12px 48px rgba(37,99,235,0.15)",
      }}
      transition={{ duration: 0.25 }}
    >
      {/* Content Area */}
      <div className={`relative z-10 flex flex-col w-full ${image ? "md:w-[55%]" : "w-full"}`}>
        {isHero && (
          <div className="flex items-center gap-2 mb-4">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse-live" />
            <span className="text-xs font-body uppercase tracking-wider text-green-400/80">
              Live
            </span>
          </div>
        )}
        
        <div className={`${image ? "mt-auto pt-32 md:mt-0 md:pt-0" : "pt-2"}`}>
          <h3
            className={`font-display font-bold mb-3 ${isHero ? "text-2xl md:text-3xl" : "text-xl md:text-2xl"} ${isDark ? "text-white" : "text-[#0F172A]"}`}
            style={{ letterSpacing: "-0.02em" }}
          >
            {title}
          </h3>
          <p
            className={`font-body font-light leading-relaxed ${isDark ? "text-white/80" : "text-[#0F172A]/70"} ${isHero ? "text-base md:text-lg" : "text-base md:text-xl"}`}
          >
            {body}
          </p>
        </div>
      </div>

      {/* 3D Asset Integration */}
      {image && (
        <motion.div 
          className="absolute -right-8 -top-20 md:relative md:right-0 md:top-0 w-72 h-72 md:w-1/2 lg:w-[45%] md:h-auto flex-shrink-0 opacity-90 select-none pointer-events-none z-0"
          initial={{ rotate: -10, scale: 0.85 }}
          animate={{ 
            y: [0, -20, 0],
            rotate: [-10, -5, -10],
            scale: [0.85, 0.95, 0.85]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <img 
            src={image} 
            alt="" 
            className="w-full h-full object-contain filter drop-shadow-3xl"
            aria-hidden="true"
            loading="lazy"
          />
        </motion.div>
      )}
    </motion.div>
  );
}
