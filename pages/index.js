import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Footer from '../Components/Footer'
import NavbarPage1 from '../Components/NavbarPage1'
import ProjectSection1 from '../Components/ProjectSection1'
import ProjectHeader from '../Components/ProjectHeader'
import IntroSectionPage1 from '../Components/IntroSectionPage1'


export default function Home() {
  return (
    <div>
    <NavbarPage1 /> 
    <IntroSectionPage1 
    introSentence={"Hello, my name is Catrin Mentzoni"}
        introPara="Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim 
                      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat 
                      nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
                      deserunt mollit anim id est laborum."
        mainTitle="Fullstack Software Engineer"
        introButton1="About me"
        introButton2="Projects"/>
    <ProjectHeader />
    <ProjectSection1 />
    {/* ProjectSection2
    ProjectSection3 */}
    <Footer />

    
    
    </div>
  )
}
