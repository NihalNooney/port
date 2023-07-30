import React from 'react'
import { FaFacebookF, FaMailBulk, FaLinkedinIn } from "react-icons/fa";
import {LuMail} from "react-icons/lu"
import { contactImg } from "../../assets/index";

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={contactImg}
        alt="contactImg"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">Nihal Nooney</h3>
        <p className="text-lg font-normal text-gray-400">
          Software Developer
        </p>
        <p className="text-base text-gray-400 tracking-wide">
        I am activly looking for any new oppertuinities to expand my horizons and provide value with my skillset. My inbox is always open, so feel free to contact me and I'll try my best to get back to you!
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Phone: <span className="text-lightText">+1 7324024293</span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email: <span className="text-lightText">nooney.nihal@gmail.com</span>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont mb-4">Connect with me!</h2>
        <div className="flex gap-4">
          <a href="https://www.linkedin.com/in/nihalraj-nooney-56a1b01ba/" target="_blank" rel="noopener noreferrer">
            <span className="bannerIcon">
              <FaLinkedinIn />
            </span>
          </a>
          <a href="mailto:nooney.nihal@gmail.com" target="_blank" rel="noopener noreferrer">
            <span className="bannerIcon">
              <LuMail />
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default ContactLeft
