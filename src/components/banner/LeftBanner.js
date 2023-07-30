import React from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from './Media';

const LeftBanner = () => {
    const [text] = useTypewriter({
      words: ["College Student.", "Visionary.", "Software Developer."],
      loop: true,
      typeSpeed: 20,
      deleteSpeed: 10,
      delaySpeed: 2000,
    });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">WELCOME!</h4>
        <h1 className="text-6xl font-bold text-white">
          Hi, I'm <span className="text-designColor capitalize">Nihal Nooney</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
        Since high school, I've been captivated by the constant problem-solving cycle in computer science, akin to the layers of a Matryoshka doll. Each doll is a metaphor for a problem, unveiling an even more complex challenge within once it is solved. Much like opening these dolls, every solution in my field has led to a new skill or a challenge to overcome.<br></br><br></br> My career is marked by these layers of challenges, each refining my proficiency in various programming paradigms. In my portfolio, you'll see the complexity I've unraveled, project by project. <br></br><br></br>However, the journey is infinite; just as there's always a smaller doll within a Matryoshka, I constantly seek and learn in the expansive world of computer science. Welcome to my career, an ongoing exploration of growth and innovation, where each layer peeled back marks a new milestone.
        </p>
      </div>
     {/* Media */}
     <Media />
    </div>
  );
}

export default LeftBanner