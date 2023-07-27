import React from 'react'
import { AnimatePresence } from 'framer-motion'
import 'bootstrap/dist/css/bootstrap.min.css'

import Header from './components/Header/Header'
import Slider from './components/Slider/Slider'
import Navigation from './components/Navigation/Navigation'
import Welcome from './components/Welcome/Welcome'
import Solutions from './components/Solutions/Solutions'
import Map from './components/Map/Map'
import Announcements from './components/Announcements/Announcements'
import Rates from './components/Rates/Rates'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <AnimatePresence mode="wait">
      <div className="App">
        <Header />
        <Slider />
        <Navigation />
        <Welcome />
        <Solutions />
        <Map />
        <Announcements />
        <Rates />
        <Footer />
      </div>
    </AnimatePresence>
  )
}

export default App
