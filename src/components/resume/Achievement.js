import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Achievement = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      <div>
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <h2 className="text-4xl font-bold">Certifications</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="AWS Certified Cloud Practitioner"
            subTitle="2023"
            result="Success"
            des="AWS Certified Cloud Practitioner validates fundamental AWS cloud knowledge. It covers key concepts: core architecture, billing, security, and AWS services."
          />
         
         
        </div>
      </div>
      <div>
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <h2 className="text-4xl font-bold">Awards</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="USACO Silver "
            subTitle="2022"
            result="Success"
            des="USACO Silver level tests proficiency in algorithms and data structures like queues, stacks, and trees. It requires adept problem-solving using basic computational logic."
          />
          <ResumeCard
            title="Regional Hackathon Winner"
            subTitle="2022"
            result="Success"
            des="Our project married innovation and mobile development, transforming ideas into tangible solutions at the hackathon—driving tech evolution one app at a time."
          />
          <ResumeCard
            title="Regional CTF Winner."
            subTitle="2021"
            result="Success"
            des="Regional online CTF challenges assess cybersecurity and analyzation skills, focusing on exploiting vulnerabilities to solve puzzles."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Achievement;
