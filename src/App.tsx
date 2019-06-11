import React from 'react'

import Body from './components/Body'
import Projects from './components/Projects'
import Tiles from './components/Tiles'
import Rainbow from './components/Rainbow'

import Home from './components/Home'
import About from './components/About'
import Blog from './components/Blog'

import './styles/App.css'
import './styles/Typography.css'
import { MicroCopy } from './manifest/Section.manifest'
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="App">
      <Body/>
      <Projects/>
      <Tiles/>
      <Rainbow/>
      <Blog/>
      <Footer/>
    </div>
  )
}

export default App
