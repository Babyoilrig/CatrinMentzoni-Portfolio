import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Footer from '../Components/Footer'
import NavbarPage1 from '../Components/NavbarPage1'
import ProjectSection1 from '../Components/ProjectSection1'
import ProjectSection2 from '../Components/ProjectSection2'
import ProjectSection3 from '../Components/ProjectSection3'
import ProjectHeader from '../Components/HeaderProject'
import IntroSectionPage1 from '../Components/IntroSectionPage1'


export default function Home() {
  return (
    <div>
    <NavbarPage1 /> 
    <IntroSectionPage1 
    introSentence={"Hello, my name is Catrin Mentzoni"}
        introPara="I am an enthusiastic and friendly individual with excellent
communication and listening skills, who thrives when
working as part of a team. I love learning new things, and I
also love a challenge! I previously worked as a primary
school teacher for ten years, but learned to code as part of
School of Code's Bootcamp 10 cohort - and I love it!
"
        mainTitle="Fullstack Software Engineer"
        introButton1="About me"
        introButton2="Projects"/>
    <ProjectHeader title="Projects"/>
    <ProjectSection1
    projectTitle="This Website" 
    projectDescription="This portfolio site was made with Next.js. My aim was 
            to create a stylish and feminine personal site, which was simple and easy 
            to use."
    projectButton="More info"
            />
    <ProjectSection2 projectTitle="Bootcamper App" projectDescription=
    "This is a social media app for School of Code bootcampers. 
    Since out cohort has over 180 attendees, it is difficult for
     bootcampers to get to know their peers, and this app assists 
     with that problem.
    During our week 9 project, I worked as part of a team of 4,
    we created a social media app for bootcampers using a
    React front end, and a Postgres database. I enjoyed working
    with my team on this project. I created the high-fidelity
    wireframes, built React components and styled them using
    CSS. I also worked with a partner to deploy the front end.
     "/>
    <ProjectSection3 projectTitle="Tribe App" projectDescription=
    "I am currently working as part of a team of 6 to create the
Tribe mobile app, as part of our month long final project. 
This app assists with family organisation, and allows parents to assign
chores to their children and other family members.
We are building the project using React Native and Firebase.
So far, as well as learning a new flavour of React, I have
researched and implemented a testing environment and
written tests. I have also created a stacknavigator.
"/>
    <Footer />

    
    
    </div>
  )
}
