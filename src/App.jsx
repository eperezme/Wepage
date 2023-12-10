import { useState } from 'react'
import Typewriter from './functions/typewrite.jsx'

// CSS
import "./index.css"
import './App.css'
import './colors.css'
import './typography.css'
import './other.css'
import './animations.css'
// import {ThemeProvider, BaseStyles} from '@primer/react'
import '@primer/css/utilities/index.scss'
import '@primer/css/core/index.scss'
import '@primer/css/primitives/index.scss'
import '@primer/css/support/index.scss'

// PAGES
import Header from './sources/header/Header.jsx'
import Skills from './sources/skills/Skills.jsx'
import Experience from './sources/experience/Experience.jsx'
import Projects from './sources/projects/Projects.jsx'
import Contact from './sources/contact/Contact.jsx'


// import IntersectionObserverComponent from './functions/observer_old.jsx'
import BuildInAnimation from './functions/observer.jsx'


function App() {

  return (
    <>
      <div className="overflow-x-clip page-responsive header-overlay home-campaign env-production logged-in color-bg-default">
        <div className='font-mktg'>

        {/* <IntersectionObserverComponent> */}
          <BuildInAnimation/>
          <Header/>
          <Skills/>
          <Experience/>
          <Projects/>
          <Contact/>


        {/* </IntersectionObserverComponent> */}
        </div>
      </div>
    </>
  )
}

export default App
