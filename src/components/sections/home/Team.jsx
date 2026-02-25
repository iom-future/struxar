import { motion } from "framer-motion";
import AnimatedSection, { fadeUp, stagger } from "../../ui/AnimatedSection";
import { team } from "../../../constants/content";

// Import images
import team1 from "../../../assets/team/team1.png";
import team2 from "../../../assets/team/team2.png";
import team3 from "../../../assets/team/team3.png";
import team4 from "../../../assets/team/team4.png";
import team5 from "../../../assets/team/team5.png";
import team6 from "../../../assets/team/team6.png";

const teamImages = [team1, team2, team3, team4, team5, team6];

export default function Team() {
  return (
    <AnimatedSection className="bg-white section-padding overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            variants={fadeUp}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6 bg-blue-50 border border-blue-100"
          >
            <span className="text-xs font-semibold tracking-wider text-blue-600 uppercase">
              {team.eyebrow}
            </span>
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="font-display font-bold text-navy-950 mb-6"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", letterSpacing: "-0.02em" }}
          >
            {team.h2}
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="font-body text-slate-600 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed"
          >
            {team.intro}
          </motion.p>
        </div>

        <motion.div
          variants={stagger}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {team.members.map((member, index) => (
            <motion.div
              key={member.name}
              variants={fadeUp}
              className="flex flex-col lg:flex-row bg-slate-50 rounded-[32px] overflow-hidden border border-slate-100 items-stretch group hover:shadow-2xl hover:shadow-blue-900/10 transition-all duration-500"
            >
              {/* Image Container */}
              <div className="relative w-full lg:w-[45%] h-72 lg:h-auto overflow-hidden">
                {/* Glow Effect */}
                {/* <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10" /> */}
                <div className="absolute -inset-10 bg-blue-400/30 blur-[100px] opacity-0 group-hover:opacity-40 transition-opacity duration-700 z-0" />
                
                <img
                  src={teamImages[index]}
                  alt={member.name}
                  className="relative w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 z-0"
                />
              </div>

              {/* Text Content */}
              <div className="flex-1 p-8 md:p-10 flex flex-col justify-center">
                <div className="mb-4">
                  <h3 className="font-display font-bold text-2xl text-navy-950 mb-1 group-hover:text-blue-600 transition-colors duration-300">
                    {member.name}
                  </h3>
                  <p className="font-body font-bold text-blue-600 tracking-wider uppercase text-[10px] bg-blue-50 px-3 py-1 rounded-full inline-block">
                    {member.role}
                  </p>
                </div>
                <p className="font-body text-slate-600 text-base leading-relaxed">
                  {member.bio}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </AnimatedSection>
  );
}
