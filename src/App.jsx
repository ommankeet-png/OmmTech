import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
// import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
// import Home from './pages/Home.jsx'
import Home from './pages/HOME/Home.jsx'
// import Properties from './pages/Properties.jsx'
// import About from './pages/About.jsx'
import Aboutus from './pages/ABOUT-US/Aboutus.jsx'
// import Contact from './pages/Contact.jsx'
import FloatingIcons from './CommenPages/FloatingIcons.jsx'
import Contact from './pages/CONTACT-US/Contact.jsx'
import Properties from './pages/PROPERTIES/Properties.jsx'
import DebakiEmpire from './pages/PROPERTIES/DEBAKI EMPIRE/DebakiEmpire.jsx'
import JuteeCottage from './pages/PROPERTIES/JUTEE COTTAGE/JuteeCottage.jsx'
import OmmHomes from './pages/PROPERTIES/OMM HOMES/OmmHomes.jsx'
import OmmSignature from './pages/PROPERTIES/OMM SIGNATURE/OmmSignature.jsx'
import Navigationbar from './CommenPages/Navbar/Navigationbar.jsx'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />
      {/* <Navbar /> */}
      <Navigationbar/>
      <main className="flex-1">
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/" element={<Home/>} />
          {/* <Route path="/properties" element={<Properties />} /> */}
          <Route path="/properties" element={<Properties/>} />
          <Route path="/debaki-empire" element={<DebakiEmpire/>} />
          <Route path="/jutee-cottage" element={<JuteeCottage/>} />
          <Route path="/omm-homes" element={<OmmHomes/>} />
          <Route path="/omm-signature" element={<OmmSignature/>} />

          

          {/* <Route path="/about" element={<About />} /> */}
          <Route path="/about" element={<Aboutus/>} />
          {/* <Route path="/contact" element={<Contact />} /> */}
          <Route path="/contact" element={<Contact/>} />


        </Routes>
      </main>

      <FloatingIcons/>
      <Footer />
    </div>
  )
}
