import './App.scss'

import { Suspense, lazy } from 'react'
import BackgroundAnimation from './components/BackgroundAnimation'
import GlobalContext from './components/context/GlobalContext'
import Header from './components/Header'
import Home from './components/Home'
import LoadingSpinner from './components/LoadingSpinner'

// Lazy load components
const AboutMe = lazy(() => import('./components/AboutMe'))
const Services = lazy(() => import('./components/Services'))
const Experience = lazy(() => import('./components/Experience'))
const Portfolio = lazy(() => import('./components/Portfolio'))
const Knowledge = lazy(() => import('./components/Knowledge'))
const Contacts = lazy(() => import('./components/Contacts'))
const Footer = lazy(() => import('./components/Footer'))

function App() {
  return (
    <>
      <a href="#main-content" className="skip-link">Pular para o conteúdo principal</a>
      <BackgroundAnimation />
      <GlobalContext>
        <Header />
        <main id="main-content">
          <Home />
          <Suspense fallback={<LoadingSpinner />}>
            <AboutMe />
            <Services />
            <Experience />
            <Portfolio />
            <Knowledge />
            <Contacts />
          </Suspense>
        </main>
        <Suspense fallback={<LoadingSpinner />}>
          <Footer />
        </Suspense>
      </GlobalContext>
    </>
  )
}

export default App
