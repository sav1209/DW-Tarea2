import Image from "next/image";
import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import Interests from "./Components/Interests/Interests";
import CV from "./Components/CV/CV";
import Projects from "./Components/Projects/Projects";
import Contact from "./Components/Contact/Contact";

export default function Home() {
  return (
    <>
    <Header/>
    <main className="main">
      <Hero/>
      <Interests/>
      <CV/>
      <Projects/>
      <Contact/>
    </main>
    </>
  );
}
