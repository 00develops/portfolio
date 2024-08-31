// App.js
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Experiences from "./components/Experiences";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import "./App.css";

export default function App() {
    return (
        <>
            <Navbar />
            <Hero />
            <About />
            <Skills />
            <Experiences/>
            <Projects />
            <Contact />
            <Footer />
        </>
    );
}
