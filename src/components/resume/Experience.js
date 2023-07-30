import React from "react";
import {motion} from "framer-motion"
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      <div>
        <div className="flex flex-col gap-4">
          <h2 className="text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Jr. Software Engineer Intern"
            subTitle="Vuetech Health Innovations - (Nov 2022 - Feb 2023)"
            result="USA"
            des="Streamlined UI/Back-End Integration. Managed IPC and debugged APIs. Directed ML Data Migration and optimized ETL processes. Leveraged MERN Stack, Docker, SVM, and Neural Networks for object detection. Directed an AWS Cloud transition enhancing system scalability and cost-efficiency. Utilized Python algorithms and geometric transformations for precise patient movement tracking, and assisted in hyperparameter tuning of TensorFlow deep learning models. Actively participated in Agile and Scrum meetings."
          />
          <ResumeCard
            title="Graphial User Interface Research Intern"
            subTitle="Stevens Institute of Technology - (2021 - 2021)"
            result="USA"
            des="Spearheaded mass data loading optimization, boosting system performance by over 20% in a browser program. Contributed to the development of an intricate 3D solar system model, enriching the comprehension of celestial entities. Enhanced GUI through the design and integration of an intuitive pop-up menu, augmenting user experience and system navigation."

            
          />
          <ResumeCard
            title="Barista"
            subTitle="Dunkin Donuts - (June 2022 - August 2022)"
            result="USA"
            des="Barista and Cashier for local coffee/donut shop"
          />
        </div>
      </div>
    
    </motion.div>
  );
};

export default Experience;
