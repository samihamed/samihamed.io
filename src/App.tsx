import React from 'react'

import Section from './components/Section'
import Header from './components/Header'
import Topic from './components/Topic'

import { SectionType } from './types/Section.type'

import './styles/App.css'
import './styles/Typography.css'
import { MicroCopy } from './manifest/Section.manifest'
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div>
      <div className="Portfolio home">
        <Header/>
        <Section
          section={MicroCopy.Home}
        />
        <Topic section={SectionType.About}/>
      </div>
      <div className="Portfolio about">
        <Section
          section={MicroCopy.About}
        />
        <Topic section={SectionType.Blog}/>
      </div>
      <div className="Portfolio blog">
        <Section
          section={MicroCopy.Blog}
        />
        <Topic section={SectionType.Projects}/>
      </div>
      <div className="Portfolio projects">
        <Section
          section={MicroCopy.Projects}
        />
        <Footer/>
      </div>
    </div>
  )
}

export default App
