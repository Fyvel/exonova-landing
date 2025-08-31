import Header from "./components/Header";
import Problem from "./components/Problem";
import Solution from "./components/Solution";
import Impact from "./components/Impact";
import Roadmap from "./components/Roadmap";
import FrequentlyAskedQuestions from "./components/FrequentlyAskedQuestions";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="parallax-container">
      <Header />
      <Problem />
      <Solution />
      <Impact />
      <Roadmap />
      <FrequentlyAskedQuestions />
      <Contact />
      <Footer />
    </div>
  );
}
