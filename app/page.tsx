import Navbar from "@/components/portfolio/Navbar";
import Hero from "@/components/portfolio/Hero";
import About from "@/components/portfolio/About";
import Experience from "@/components/portfolio/Experience";
import Projects from "@/components/portfolio/Projects";
import Services from "@/components/portfolio/Services";
// import Skills from "@/components/portfolio/Skills";
// import Blog from "@/components/portfolio/Blog";
import Contact from "@/components/portfolio/Contact";
import Footer from "@/components/portfolio/Footer";
import DoctorNotes from "@/components/portfolio/DoctorNotes";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Services />
      {/* <Skills /> */}
      {/* <Blog /> */}
      <Contact />
      <Footer />
      <DoctorNotes />
    </div>
  );
};

export default Index;
