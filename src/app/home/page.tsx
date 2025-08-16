import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Impact from "./components/Impact";
import Problem from "./components/Problem";
import Roadmap from "./components/Roadmap";
import Solution from "./components/Solution";

export default function Home() {
  return (
    <>
      <Header />
      <Problem />
      <Solution />
      <Impact />
      <Roadmap />
      <Contact />
      <Footer />
    </>
  );
}
