import ProjectSection1 from "../Components/ProjectSection1";
import Footer from "../Components/Footer"
import SkillsHeader from "../Components/HeaderSkills";
import IntroSectionPage2 from "../Components/IntroSectionPage2";
import NavbarPage2 from "../Components/NavbarPage2";
import SkillsSection from "../Components/SkillsSection";
import ImagePage2 from "../Components/ImagePage2";
import IntroParaPage2 from "../Components/IntroParaPage2";






export default function About() {
    return (
      <div>
      <NavbarPage2 />
          <IntroSectionPage2 introSentence={"About me"}/>
          {/* <AboutMeSection /> */}
          <ImagePage2 />
          <IntroParaPage2 
        introPara="Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim 
                      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat 
                      nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
                      deserunt mollit anim id est laborum."
        // mainTitle="Fullstack Software Engineer"
        
        introButton1="CV"
        introButton2="Home"/>
          {/* <SkillsHeader title="Skills"/> */}
          {/* <SkillsSection /> */}
          <Footer />

      </div>
    );
}