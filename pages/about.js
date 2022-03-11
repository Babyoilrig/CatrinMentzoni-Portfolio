import ProjectSection1 from "../Components/ProjectSection1";
import Footer from "../Components/Footer"
import SkillsHeader from "../Components/HeaderSkills";
import IntroSectionPage2 from "../Components/IntroSectionPage2";
import NavbarPage2 from "../Components/NavbarPage2";
import SkillsSection from "../Components/SkillsSection";
import ImagePage2 from "../Components/ImagePage2";
import BodyTextSectionPage2 from "../Components/bodyTextSectionPage2";
import DeveloperSection from "../Components/DeveloperSection";
import HobbiesSection from "../Components/Hobbies";
import ButtonContainer from "../Components/ButtonContainer";






export default function About() {
    return (
      <div>
      <NavbarPage2 />
      {/* <Navbar2 /> */}

          <IntroSectionPage2 introSentence={"About me"} />
          <ImagePage2 />
          <BodyTextSectionPage2 />
          <ButtonContainer introButton1="CV"
        introButton2="Home" />
          <DeveloperSection />
          <HobbiesSection />
          <Footer />

      </div>
    );
}