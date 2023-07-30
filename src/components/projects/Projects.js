import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo, projectThree, projectFour, projectFive, projectSix } from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="Coronavirus Data Visualization"
          des="An Android app presenting 1st and 2nd dose vaccine data for US states via APIs, with user-friendly charts for comparison. Utilizing Java, Firebase, Anychart, CDC.gov API"
          src={projectOne}
        />
        <ProjectsCard
          title="BodySegmentation"
          des=" This application leverages a TensorflowJS model to perform body part segmentation via webcam input, rendering distinct color mapping. Utilizing ReactJS, TensorflowJS"
          src={projectTwo}
        />
        <ProjectsCard
          title="Merge-Sort Visualization"
          des="React app visualizes Merge-Sort algorithm at variable speeds/sizes; future enhancements include implementing additional sorting methods. Utilizes ReactJS and Merge Sort Algo."
          src={projectThree}
        />
        <ProjectsCard
          title="Farming-Scout"
          des="Farming Scout, an Android app, integrates species identification algorithms and geolocation-based weather APIs for precise agricultural management."
          src={projectFour}
        />
        <ProjectsCard
          title="DrawNote"
          des="DrawNote, a modern React app, employs vector graphics rendering and text manipulation libraries for multifaceted note-taking with illustrative support."
          src={projectFive}
        />
        <ProjectsCard
          title="ChatBot"
          des="Utilizing Android Studio, this interactive chat-bot application leverages Natural Language Processing and sentiment analysis for dynamic conversation flow, with error detection and conversation reset features."
          src={projectSix}
        />
      </div>
    </section>
  );
}

export default Projects