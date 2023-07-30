import React from "react";
import { FaFacebookF, FaGithub, FaLinkedinIn, FaReact, FaJava, FaPython, FaDocker , FaAws} from "react-icons/fa";
import {LuMail} from "react-icons/lu";

const Media = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
      <div>
        <h2 className="text-base uppercase font-titleFont mb-4">Connect With Me!</h2>
        <div className="flex gap-4">
          {/*
            <span className="bannerIcon">
              <FaFacebookF />
            </span>


  */}
          <a href="mailto:nooney.nihal@gmail.com" target="_blank" rel="noopener noreferrer">
            <span className="bannerIcon">
              <LuMail />
            </span>
          </a>

          <a
            href="https://github.com/NihalNooney"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="bannerIcon">
              <FaGithub />
            </span>
          </a>
          <a
            href="https://www.linkedin.com/in/nihalraj-nooney-56a1b01ba/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="bannerIcon">
              <FaLinkedinIn />
            </span>
          </a>
        </div>
      </div>
      <div>
        <h2 className="text-base uppercase font-titleFont mb-4">
          
          Skills
        </h2>
        <div className="flex gap-4">
          <span className="bannerIcon">
            <FaReact />
          </span>
          <span className="bannerIcon">
            <FaJava />
          </span>
          <span className="bannerIcon">
            <FaPython />
          </span>
          <span className="bannerIcon">
            <FaDocker />
          </span>
          <span className="bannerIcon">
            <FaAws />
          </span>

        </div>
      </div>
    </div>
  );
};

export default Media;
