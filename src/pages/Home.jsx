import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import Hero from "../components/sections/home/Hero";
import Problem from "../components/sections/home/Problem";
import Solution from "../components/sections/home/Solution";
import Features from "../components/sections/home/Features";
import SocialProof from "../components/sections/home/SocialProof";
import CTA from "../components/sections/home/CTA";

import Team from "../components/sections/home/Team";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Struxar — AR + AI + IoT Construction Intelligence Platform</title>
        <meta name="description" content="Struxar combines Augmented Reality, AI prediction, and live IoT sensing into one unified construction intelligence platform. Build faster, safer, and smarter." />
      </Helmet>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
      >
        <Hero />
        <Problem />
        <Solution />
        <Features />
        <SocialProof />
        <Team />
        <CTA />
      </motion.div>
    </>
  );
}
