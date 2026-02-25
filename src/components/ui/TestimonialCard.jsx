import { motion } from "framer-motion";

export default function TestimonialCard({ quote, name, role, image }) {
  return (
    <motion.div
      className="bg-white rounded-2xl p-8 border border-slate-200 relative mt-10 md:mt-0"
      whileHover={{ y: -4, boxShadow: "0 8px 40px rgba(37,99,235,0.12)" }}
      transition={{ duration: 0.25 }}
    >
      {/* Testimonial Image - Half in Half Out */}
      <div className="absolute -top-10 left-10 md:left-8 w-20 h-20 rounded-full border-4 border-white shadow-xl overflow-hidden bg-slate-100 flex-shrink-0">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Large opening quote mark */}
      <span
        className="font-display text-blue-600 absolute top-4 right-6 opacity-10"
        style={{ fontSize: "4rem", lineHeight: 1 }}
      >
        &ldquo;
      </span>

      <div className="mt-8">
        <p className="font-body font-light text-[#0F172A] leading-relaxed text-[1rem] mb-6 italic">
          "{quote}"
        </p>

        <div className="flex items-center gap-3 pt-4 border-t border-slate-50">
          <div>
            <p className="font-body font-bold text-[#0F172A] text-sm uppercase tracking-wider">{name}</p>
            <p className="font-body text-[#64748B] text-xs">{role}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
