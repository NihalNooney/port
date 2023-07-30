import React from 'react'
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2018 - present</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education </h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
        <ResumeCard
            title="High School Diploma"
            subTitle="South Brunswick High School (2018 - 2022)"
            result="SAT: 1520"
            des="AP Biology, AP Calculus BC, 
            AP Computer Science A, 
            AP English Language & Composition, 
            AP English Literature & Composition, 
            AP Environmental Science, 
            AP Macroeconomics, 
            AP Physics C: Electricity and Magnetism, 
            AP Physics C: Mechanics, 
            AP Statistics, 
            Linear Algebra, 
            Mobile Applications Development, Data Structures, 
            Multivariable Calculus."
          />
          <ResumeCard
            title="BSc in Computer Science, Minor in Quantitative Economics & Data Science"
            subTitle="Rutgers University - New Brunswick (2022 - 2025)"
            result="3.90/4"
            des="Clubs: Undergraduate Student Alliance of Computer Scientists, Little Investment Bankers of Rutgers, Quantitative Finance Club."
          />
         
         
        </div>
      </div>
      {/* part Two */}

      
    </motion.div>
  );
}

export default Education