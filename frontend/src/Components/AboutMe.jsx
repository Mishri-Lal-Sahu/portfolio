import React, { Component } from "react";
import Typed from "react-typed";
import WebFont from "webfontloader";
import AboutImage from "./../Images/about-image.png";
import { FiDownload } from "react-icons/fi";
import "./about.css";
import {
  AiOutlineTwitter,
  AiFillInstagram,
  AiFillYoutube,
} from "react-icons/ai";
import { BsWhatsapp, BsPlay } from "react-icons/bs";

export default class AboutMe extends Component {
  render() {
    WebFont.load({
      google: {
        families: ["Cormorant Garamond", "serif"],
      },
    });
    return (
      <section className="about-me bg-[#252734] px-4 xl:px-10 pt-10">
        <div className="grid grid-flow-col grid-cols-5  md:grid-cols-4">
          <div className="col-span-2  pt-10 font-['Cormorant_Garamond','serif']">
            <div class="text-white text-[10px] md:mt-20 md:text-[30px]">
              Hello, my name is
            </div>
            <div class="text-white  xl:text-[50px] md:text-[40] text-[15px] leading-none">
              MISHRI LAL SAHU
            </div>
            <div class="text-white  text-[10px] md:text-[25px] xl:text-[30px]">
              And I'am a &nbsp;
              <Typed
                className="text-[#d00a32] "
                strings={[
                  "Single",
                  "Good Student",
                  "Web Developer",
                  "App Developer",
                  "Ethical Hacker",
                  "Blogger",
                ]}
                typeSpeed={80}
                loop={true}
              />
            </div>
            <div className="flex my-4">
              <a
                href="./../../public/mishri-lal-sahu-resume.pdf"
                download
                className="border-[1px] py-2 md:py-4 md:my-4 border-slate-400 flex leading-4 rounded-[2.75rem] px-4 md:px-8 text-[10px] md:text-base text-slate-300"
              >
                Get Resume <FiDownload className="ml-[10px]" />
              </a>
            </div>
            <div class="video-link md:ml-4 xl:ml-20">
              <a
                class="wave-btn vbox-item"
                href="https://youtu.be/MKjhBO2xQzg"
                data-autoplay="true"
                data-vbtype="video"
              >
                <div class="ripple text-slate-300">
                  <BsPlay />
                </div>
              </a>

              <span class="video-text md:text-base text-[0.825rem] text-slate-300"> Watch Video</span>
            </div>
          </div>
          <div className="col-span-3 md:col-span-2  sahu">
            <div className=" image -top-[30px] md:top-0 ">
              <img src={AboutImage} className="max-w-[80%] md:max-w-full" alt="Profile" />
              <div className="shape-half"></div>
              <div className="social-link">
                <a href="google.com" target="_blank" rel="noreferrer">
                  <AiFillYoutube />
                </a>
                <a href="google.com" target="_blank" rel="noreferrer">
                  <BsWhatsapp />
                </a>
                <a href="google.com" target="_blank" rel="noreferrer">
                  <AiOutlineTwitter />
                </a>
                <a href="google.com" target="_blank" rel="noreferrer">
                  <AiFillInstagram />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
