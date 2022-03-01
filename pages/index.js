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
    <IntroSectionPage1 />
    <ProjectHeader />
    <ProjectSection1 />
    {/* ProjectSection2
    ProjectSection3 */}
    <Footer />

    
    
    </div>
  )
}
