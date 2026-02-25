import { motion } from "framer-motion";
import * as Icons from "lucide-react";

export default function BentoCard({ icon, title, body, bg, textColor, colSpan, rowSpan, isHero }) {
  const IconComponent = Icons[icon];
  const isDark = bg?.includes("navy") || bg?.includes("blue-600") || bg === "bg-navy-950";

  return (
    <motion.div
      className={`relative overflow-hidden rounded-2xl p-8 ${bg} ${textColor} ${colSpan || ""} ${rowSpan || ""} border ${isDark ? "border-blue-600/20" : "border-slate-200"}`}
      whileHover={{
        y: -4,
        boxShadow: isDark
          ? "0 8px 40px rgba(37,99,235,0.25)"
          : "0 8px 40px rgba(37,99,235,0.12)",
      }}
      transition={{ duration: 0.25 }}
    >
      {isHero && (
        <div className="absolute top-6 right-6 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse-live" />
          <span className="text-xs font-body uppercase tracking-wider text-green-400/80">
            Live
          </span>
        </div>
      )}
      <div className="mb-4">
        {IconComponent && (
          <IconComponent
            size={isHero ? 40 : 32}
            className={isDark ? "text-blue-400" : "text-blue-600"}
          />
        )}
      </div>
      <h3
        className={`font-display font-bold mb-3 ${isHero ? "text-2xl" : "text-lg"}`}
        style={{ letterSpacing: "-0.02em" }}
      >
        {title}
      </h3>
      <p
        className={`font-body font-light leading-relaxed ${isHero ? "text-base" : "text-sm"}`}
        style={{ opacity: 0.85 }}
      >
        {body}
      </p>
    </motion.div>
  );
}
