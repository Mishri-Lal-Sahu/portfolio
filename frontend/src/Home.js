import React from "react";
import About from "./Components/About";
import {ContactUs} from "./Components/ContactUs";
import Skill from "./Components/Skill";
import Counter from "./Components/Counter";
import { Project } from "./Components/Swiper/Project";
import Service from "./Components/Services/Service";

function Home() {
  return (
    <section className="home-section w-100 h-100  bg-[#2a2c39]">
    <About />
    <Service/>
    <Skill />
    <Counter />
    <Project/>
    <ContactUs/>
    </section>
  )
}

export default Home;
