import { motion } from "framer-motion";

export default function TestimonialCard({ quote, name, role }) {
  return (
    <motion.div
      className="bg-white rounded-2xl p-8 border border-slate-200 relative"
      whileHover={{ y: -4, boxShadow: "0 8px 40px rgba(37,99,235,0.12)" }}
      transition={{ duration: 0.25 }}
    >
      {/* Large opening quote mark */}
      <span
        className="font-display text-blue-600 absolute top-4 left-6"
        style={{ fontSize: "3rem", lineHeight: 1 }}
      >
        &ldquo;
      </span>

      <div className="mt-8">
        <p className="font-body font-light text-[#0F172A] leading-relaxed text-[0.95rem] mb-6">
          {quote}
        </p>

        <div className="flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-blue-600" />
          <div>
            <p className="font-body font-medium text-[#0F172A] text-sm">{name}</p>
            <p className="font-body text-[#64748B] text-xs">{role}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
