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
import VideoContainer from '../Components/VideoContainer';




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
        <VideoContainer />
     <ProjectHeader title="Projects"/> 
    <ProjectSection1
    projectTitle="This Website" 
    projectDescription="This portfolio site was made with Next.js and Next UI containers. My aim was 
            to create a stylish and feminine personal site, which is easy 
            to use and responsive on mobile devices. It was a steep learning curve - in which I spent hours upon hours learning 
            about mobile-responsive containers and wrapping divs, but I am proud of the result :)"
    projectButton="More info"
            />
    <ProjectSection2 projectTitle="Bootcamper App" projectDescription=
    "This is a social media app for School of Code bootcampers. 
    Since our cohort consisted of over 180 students, it was difficult for
     bootcampers to get to know their peers. 
     I built this app during our week 9 project, working as part of a team of four.

    The app was created using a React front end, and a Postgres database. 
    
    I enjoyed working with my team on this project. I created the high-fidelity
    wireframes, built React components and styled them using
    CSS. I also worked with a partner to deploy the front end, amongst many other things.
     "/>
    <ProjectSection3 projectTitle="Tribe App" projectDescription=
    "I am currently working as part of a team of 6 to create the
Tribe mobile app, as part of our month long final project. 
This app assists with family organisation, and allows parents to assign
chores to their children and other family members.
We are building the project using React Native and Firebase.
So far, as well as learning a new flavour of React, I have
researched and implemented a testing environment and
written tests, created a stacknavigator component and researched how to 
deploy and host apps via the Expo app store, amongst many other things.
"/>
    <Footer />

    
    
    </div>
  )
}
