import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import AboutMe from "./Components/AboutMe";
import Home from "./Home";
import Services from "./Components/Services/Services";
import Blogs from "./Components/Blogs/Blogs";
import Projects from "./Components/Projects/Projects";
import { ContactMe } from "./Components/ContactMe";
import BlogDetail from "./Components/Blogs/BlogDetail";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="Services" element={<Services />} />
        <Route path="Blogs" element={<Blogs />} />
        <Route path="Projects" element={<Projects />} />
        <Route path="AboutMe" element={<AboutMe />} />
        <Route path="ContactMe" element={<ContactMe />} />
        <Route path="BlogDetail" element={<BlogDetail />} />
      </Route>
    </Routes>
  );
};

export default App;
