import React from "react";
import Header from "./Components/Header";
import AboutMe from "./Components/AboutMe";
import ContactUs from "./Components/ContactUs";
import Services from "./Components/Services/Services";
import Skill from "./Components/Skill";
import Counter from "./Components/Counter";

function Home() {
  return (
    <section className="home-section w-100 h-100  bg-[#2a2c39]">
    <Header />
    <AboutMe />
    <Services/>
    <Skill />
    <Counter />
    <ContactUs/>
    <footer> Footer</footer>
    </section>
  )
}

export default Home;
