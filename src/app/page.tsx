"use client";
import Navbar from "./components/Navbar.jsx";
import HeaderSection from "./components/HeaderSection.jsx";
import AboutSection from "./components/AboutSection.jsx";
import ServicesSection from "./components/ServicesSection.jsx";
import ProjectsSection from "./components/ProjectsSection.jsx";
import ContactSection from "./components/ContactSection.jsx";
import FooterSection from "./components/FooterSection.jsx";
import { useEffect, useState } from "react";
import { useAppContext } from "./context/AppContext.jsx";
export default function Home() {
  const { mode, setMode } = useAppContext();

  useEffect(() => {
    const savedMode = localStorage.getItem("mode") || "light";
    setMode(savedMode);
  }, []);

  if (mode === null) {
    // Mode not loaded yet → show nothing or a loader
    return null; // or a loading spinner if you want
  }

  return (
    <div className={`${mode === "dark" ? "bg-gray-900 text-white" : ""}`}>
      <Navbar mode={mode} setMode={setMode} />
      <HeaderSection mode={mode} />
      <AboutSection mode={mode} />
      <ServicesSection mode={mode} />
      <ProjectsSection mode={mode} />
      <ContactSection mode={mode} />
      <FooterSection mode={mode} />
    </div>
  );
}
