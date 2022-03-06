import ProjectSection1 from "../Components/ProjectSection1";
import Footer from "../Components/Footer"
import SkillsHeader from "../Components/HeaderSkills";
import IntroSectionPage2 from "../Components/IntroSectionPage2";
import NavbarPage2 from "../Components/NavbarPage2";
import SkillsSection from "../Components/SkillsSection";
import ImagePage2 from "../Components/ImagePage2";
import BodyTextSectionPage2 from "../Components/bodyTextSectionPage2";
import DeveloperSection from "../Components/DeveloperSection";






export default function About() {
    return (
      <div>
      <NavbarPage2 />
          <IntroSectionPage2 introSentence={"About me"} 
          
        introButton1="CV"
        introButton2="Home"/>
          {/* <AboutMeSection /> */}
          <ImagePage2 />
          <BodyTextSectionPage2 />
          <DeveloperSection />
          
          {/* <SkillsHeader title="Skills"/> */}
          {/* <SkillsSection /> */}
          <Footer />

      </div>
    );
}