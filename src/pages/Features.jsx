import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Activity, Glasses, Brain, LayoutDashboard, FileCheck, ShieldCheck, ArrowRight } from "lucide-react";
import { features } from "../constants/content";

const iconMap = { Activity, Glasses, Brain, LayoutDashboard, FileCheck, ShieldCheck };

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};
const stagger = { visible: { transition: { staggerChildren: 0.12 } } };

function AnimatedSection({ children, className = "" }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  return (
    <motion.section ref={ref} className={className} initial="hidden" animate={inView ? "visible" : "hidden"} variants={stagger}>
      {children}
    </motion.section>
  );
}

const expandedDetails = [
  {
    icon: "Activity",
    title: "Live IoT Sensor Dashboard",
    description: "Monitor structural stress, air quality, equipment vibration, and perimeter security across all your sites in real time. Everything in one view. Updated every second, continuously, without manual input.",
    specs: ["Real-time data refresh (< 1 second latency)", "Supports 10,000+ concurrent sensor streams", "Custom alert thresholds per zone", "Historical data export and trend analysis", "Mobile-optimized responsive views"],
  },
  {
    icon: "Glasses",
    title: "AR Headset-Native Workflows",
    description: "BIM overlay, material inspection, safety checklists, and task instructions delivered directly into your worker's field of vision — hands-free and voice-activated.",
    specs: ["Apple Vision Pro & Meta Quest 3 compatible", "Voice-activated command interface", "Real-time BIM model overlay", "Step-by-step guided task execution", "Automatic progress photo capture"],
  },
  {
    icon: "Brain",
    title: "AI Predictive Failure Alerts",
    description: "Machine learning models trained on millions of real construction data points detect patterns that signal upcoming failures — structural, mechanical, or schedule-related.",
    specs: ["14-day advance failure prediction", "Continuous model retraining from outcomes", "Risk scoring for every monitored zone", "Integration with maintenance scheduling", "Historical accuracy tracking"],
  },
  {
    icon: "LayoutDashboard",
    title: "Multi-Site Command Center",
    description: "Manage an unlimited number of active projects from a single dashboard. Available on web, tablet, and mobile — anywhere, any time.",
    specs: ["Unlimited concurrent projects", "Role-based access control", "Real-time cross-site comparison", "Custom report generation", "API access for third-party integration"],
  },
  {
    icon: "FileCheck",
    title: "Automated Compliance Reporting",
    description: "OSHA, ISO 45001, and regional building code compliance reports generated automatically. Audit-ready documentation available on demand.",
    specs: ["OSHA, ISO 45001, and local code coverage", "One-click audit-ready PDF export", "Automatic evidence collection from sensors", "Scheduled report delivery", "Custom compliance template builder"],
  },
  {
    icon: "ShieldCheck",
    title: "Smart Incident Prevention",
    description: "Struxar's AI correlates behavioral data, environmental signals, and historical incident patterns to identify risk zones before accidents happen.",
    specs: ["Behavioral pattern analysis", "Environmental hazard detection", "Historical incident correlation", "Proactive zone-level risk alerts", "Integration with site access control"],
  },
];

export default function FeaturesPage() {
  return (
    <>
      <Helmet>
        <title>Features — Struxar Construction Intelligence</title>
        <meta name="description" content="Explore Struxar's full feature set: IoT dashboards, AR workflows, AI predictions, multi-site command, compliance, and incident prevention." />
      </Helmet>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }}>
        {/* Hero */}
        <section className="bg-navy-950 section-padding text-center">
          <div className="max-w-3xl mx-auto">
            <p className="eyebrow text-blue-400 mb-4">{features.eyebrow}</p>
            <h1 className="font-display font-extrabold text-white mb-6" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", letterSpacing: "-0.02em" }}>
              {features.h2}
            </h1>
            <p className="font-body font-light text-white/60 max-w-2xl mx-auto leading-relaxed">
              {features.intro}
            </p>
          </div>
        </section>

        {/* Feature Deep-Dives */}
        {expandedDetails.map((feature, i) => {
          const Icon = iconMap[feature.icon];
          const isEven = i % 2 === 0;
          return (
            <AnimatedSection
              key={feature.title}
              className={`${isEven ? "bg-slate-50" : "bg-white"} section-padding`}
            >
              <div className="max-w-6xl mx-auto">
                <div className={`flex flex-col ${isEven ? "md:flex-row" : "md:flex-row-reverse"} gap-12 items-center`}>
                  {/* Visual placeholder */}
                  <motion.div
                    variants={fadeUp}
                    className="flex-1 w-full"
                  >
                    <div className="bg-navy-800 rounded-2xl p-12 flex items-center justify-center min-h-[300px] border border-blue-600/20">
                      {Icon && <Icon size={80} className="text-blue-400/40" />}
                    </div>
                  </motion.div>

                  {/* Content */}
                  <motion.div variants={fadeUp} className="flex-1">
                    <div className="w-12 h-12 rounded-xl bg-blue-600/10 flex items-center justify-center mb-4">
                      {Icon && <Icon size={24} className="text-blue-600" />}
                    </div>
                    <h2 className="font-display font-bold text-[#0F172A] text-2xl md:text-3xl mb-4" style={{ letterSpacing: "-0.02em" }}>
                      {feature.title}
                    </h2>
                    <p className="font-body font-light text-[#64748B] leading-relaxed mb-6">
                      {feature.description}
                    </p>
                    <ul className="space-y-3">
                      {feature.specs.map((spec) => (
                        <li key={spec} className="flex items-start gap-3">
                          <ArrowRight size={16} className="text-blue-600 mt-0.5 flex-shrink-0" />
                          <span className="font-body text-[#0F172A] text-sm">{spec}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </div>
              </div>
            </AnimatedSection>
          );
        })}
      </motion.div>
    </>
  );
}
