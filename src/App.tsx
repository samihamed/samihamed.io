import React from 'react'

import Body from './components/Body'
import Projects from './components/Projects'
import Tiles from './components/Tiles'
import Rainbow from './components/Rainbow'
import Blog from './components/Blog'
import Footer from './components/Footer';

import './styles/App.css'
import './styles/Typography.css'


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
