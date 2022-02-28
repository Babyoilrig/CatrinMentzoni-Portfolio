import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import HeaderComponent from '../Components/Header'
import ProjectsHeader from '../Components/ProjectHeader'
import TwoContainers from '../Components/TwoContainers'
import Footer from '../Components/Footer'


export default function Home() {
  return (
    <div>
    <HeaderComponent />
    <TwoContainers />
    <ProjectsHeader />
    <TwoContainers />
    <TwoContainers />
    <TwoContainers />
    <Footer />

    
    
    </div>
  )
}
