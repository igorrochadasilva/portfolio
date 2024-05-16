import './App.scss'

import BackgroundAnimation from './components/BackgroundAnimation'
import GlobalContext from './components/context/GlobalContext'
import Header from './components/Header'
import Home from './components/Home'
import AboutMe from './components/AboutMe'
import Services from './components/Services'
import Experience from './components/Experience'
import Portfolio from './components/Portfolio'
import Knowledge from './components/Knowledge'
import Contacts from './components/Contacts'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <BackgroundAnimation />
      <GlobalContext>
        <Header />
        <Home />
        <AboutMe />
        <Services />
        <Experience />
        <Portfolio />
        <Knowledge />
        <Contacts />
        <Footer />
      </GlobalContext>
    </>
  )
}

export default App
