import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Clock, ArrowRight } from "lucide-react";
import { blog } from "../constants/content";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Blog() {
  return (
    <>
      <Helmet>
        <title>Blog — Struxar Construction Intelligence</title>
        <meta name="description" content="Expert perspectives on construction technology, safety innovation, and operational excellence from the Struxar team." />
      </Helmet>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }}>
        {/* Hero */}
        <section className="bg-navy-950 section-padding text-center">
          <div className="max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 bg-blue-600/10 border border-blue-600/30">
              <span className="text-xs font-bold tracking-widest text-blue-400 uppercase">{blog.eyebrow}</span>
            </div>
            <h1 className="font-display font-extrabold text-white mb-6" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", letterSpacing: "-0.02em" }}>
              {blog.h2}
            </h1>
            <p className="font-body font-light text-white/60 max-w-2xl mx-auto leading-relaxed">
              {blog.intro}
            </p>
          </div>
        </section>

        {/* Blog Grid */}
        <section className="bg-slate-50 section-padding" aria-label="Blog posts grid">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blog.posts.map((post, i) => (
              <motion.article
                key={post.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                transition={{ delay: i * 0.08 }}
                whileHover={{ y: -4, boxShadow: "0 8px 40px rgba(37,99,235,0.12)" }}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden cursor-pointer group focus-within:ring-2 focus-within:ring-blue-600 focus-within:ring-offset-2 outline-none"
                tabIndex={0}
                role="link"
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    // Navigation logic would go here if routes existed for individual posts
                  }
                }}
              >
                {/* Category header */}
                <div className="bg-navy-800 h-32 flex items-end p-5">
                  <span className="inline-block px-3 py-1 bg-blue-600/20 text-blue-400 font-body text-xs rounded-full">
                    {post.category}
                  </span>
                </div>
                <div className="p-6">
                  <h2 className="font-display font-bold text-[#0F172A] text-lg mb-3 leading-tight group-hover:text-blue-600 transition-colors" style={{ letterSpacing: "-0.02em" }}>
                    {post.title}
                  </h2>
                  <p className="font-body font-light text-[#64748B] text-sm leading-relaxed mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between mt-auto">
                    <div className="flex items-center gap-3 text-[#64748B]">
                      <span className="font-body text-xs">{post.date}</span>
                      <span className="text-slate-300">·</span>
                      <span className="font-body text-xs flex items-center gap-1">
                        <Clock size={12} aria-hidden="true" /> {post.readTime}
                      </span>
                    </div>
                    <ArrowRight size={16} aria-hidden="true" className="text-blue-600 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </section>
      </motion.div>
    </>
  );
}
