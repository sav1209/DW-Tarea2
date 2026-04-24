import Image from "next/image";
import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";

export default function Home() {
  return (
    <>
    <Header />
    <main className="main">
      <Hero />
    </main>
    </>
  );
}
