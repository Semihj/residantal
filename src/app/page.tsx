import Image from 'next/image'
import  Hero from "./components/Hero"
import Discover from "./components/Discover"
import Residents from "./components/Residents"
import Testimonal from "./components/Testimonal";
import Contact from "./components/Contact";
import Footer from "./components/Footer"
export default function Home()  { 
  return (
    <div className="">
      <Hero/>
      <Discover/>
      <Residents/>
      <Testimonal/>
      <Contact/>
      <Footer/>
    </div>
  )
}
