import React from "react";
import AboutMe from "./Components/AboutMe";
import {ContactUs} from "./Components/ContactUs";
import Services from "./Components/Services/Services";
import Skill from "./Components/Skill";
import Counter from "./Components/Counter";
import { Project } from "./Components/Swiper/Project";

function Home() {
  return (
    <section className="home-section w-100 h-100  bg-[#2a2c39]">
    <AboutMe />
    <Services/>
    <Skill />
    <Counter />
    <Project/>
    <ContactUs/>
    </section>
  )
}

export default Home;
