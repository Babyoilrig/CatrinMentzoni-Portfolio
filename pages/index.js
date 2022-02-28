import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import HeaderComponent from '../Components/Header'
import TwoContainers from '../Components/TwoContainers'
import Footer from '../Components/Footer'
import SingleContainer from '../Components/SingleContainer'


export default function Home() {
  return (
    <div>
    <HeaderComponent />
    <TwoContainers />
    <SingleContainer />
    <TwoContainers />
    <TwoContainers />
    <TwoContainers />
    <Footer />

    
    
    </div>
  )
}
