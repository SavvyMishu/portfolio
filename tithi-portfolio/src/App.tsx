
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Hero from "./sections/Hero";
import Expertise from "./sections/Expertise";
import Projects from "./sections/Projects";
import About from "./sections/About";
import Research from "./sections/Research";
import Contact from "./sections/Contact";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Expertise />
        <Projects />
        <About />
        <Research />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App;
