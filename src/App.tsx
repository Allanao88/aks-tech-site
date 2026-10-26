import Header from './components/Header'
import HeroSection from './features/home/HeroSection'
import ServicesSection from './features/home/ServicesSection'
import ProjectsSection from './features/home/ProjectsSection'
import AboutSection from './features/home/AboutSection'
import ContactSection from './features/contact/ContactSection'
import Footer from './components/Footer'
import './App.css'
import './styles/sections.css'

function App() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <ProjectsSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}

export default App
