import Navbar from "./components/Navbar.jsx";
import HeaderSection from "./components/HeaderSection.jsx";
import AboutSection from "./components/AboutSection.jsx";
import ServicesSection from "./components/ServicesSection.jsx";
import ProjectsSection from "./components/ProjectsSection.jsx";
import ContactSection from "./components/ContactSection.jsx";
import FooterSection from "./components/FooterSection.jsx";
export default function Home() {
  return (
    <div className="">
      <Navbar />
      <HeaderSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <ContactSection />
      <FooterSection />
    </div>
  );
}
