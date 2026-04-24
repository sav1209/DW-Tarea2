import Image from "next/image";
import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import Interests from "./Components/Interests/Interests";

export default function Home() {
  return (
    <>
    <Header />
    <main className="main">
      <Hero />
      <Interests />
    </main>
    </>
  );
}
