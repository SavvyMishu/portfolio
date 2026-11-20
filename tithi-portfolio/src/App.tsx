
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Hero from "./sections/Hero";
import About from "./sections/About";
import Education from "./sections/Education";
import Expertise from "./sections/Expertise";
import Projects from "./sections/Projects";
import Research from "./sections/Research";
import Contact from "./sections/Contact";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Education />
        <Expertise />
        <Projects />
        <Research />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App;
