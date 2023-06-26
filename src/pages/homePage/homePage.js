import React from "react";
import NavBar from "../../components/navBar/navBar";
import ImportantPoints from "../../components/importatPoints/importantPoints";
import About from "../../components/about/about";
import AboutCompany from "../../components/aboutCompany/aboutCompany";
import WorkStages from "../../components/workStages/workStages";
import OurPrograms from "../../components/ourPrograms/ourPrograms";
import OurClients from "../../components/ourClients/ourClients";
import Blog from "../../components/blog/blog";
import Footer from "../../components/footer/footer";
import { useEffect } from "react";

const HomePage = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])
  
  return (
    <div>
      <NavBar />
      <ImportantPoints />
      <About />
      <AboutCompany />
      <WorkStages />
      <OurPrograms />
      <OurClients />
      <Blog />
      <Footer />
    </div>
  );

};

export default HomePage
