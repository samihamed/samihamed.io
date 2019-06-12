import React, { Component } from 'react'
import marked from 'marked'

import '../styles/App.css'
import '../styles/Typography.css'
import '../styles/About.css'

export default class About extends Component {
    mark(text: string) {
        return marked(text)
    }

    render() {
        return (
            <div className="About">
                <h1>Making things useful and engaging.</h1>
                <span>
                    I'm a software developer and capoeira instructor in Hamburg,
                    the developer of the
                    <a href="https://www.capoeira.chat" rel="noopener noreferrer" target="_blank">CapoeiraSongBot</a>
                    & 
                    <a href="https://www.stockoverflow.app" rel="noopener noreferrer" target="_blank">StockOverflow</a>
                    apps, as well as the founder of
                    <a href="https://www.aruanda.de" rel="noopener noreferrer" target="_blank">Aruanda Frankfurt</a>
                    which I led from 2012 to 2019
                    . In my studies I became a cultural anthropologist
                    and tree-hugger, traveling Europe to expand my knowledge of
                    Capoeira, and doing little software projects on the side to
                    learn how to build things and make the world a better place.
                    I graduated in social anthropology with a focus on the German
                    startup community [BA] and did research on the evolution of
                    interface design throughout the last few decades (1950 - 2018)
                    and those to come. My hometown is Hamburg where I was born and
                    raised, Frankfurt is where I studied and fell in love with
                    software during my work as a
                    <a href="https://company.acomodeo.com" rel="noopener noreferrer" target="_blank">lead developer at Acomodeo</a>
                    . In June 2019 I returned to my hometown Hamburg to work as a
                    <a href="https://www.finanzcheck.de" rel="noopener noreferrer" target="_blank">full-stack developer at Finanzcheck</a>
                    . I’m committed to being a 
                    lifelong learner and love to take on challenges as I go.
                </span>
                <br/><br/>
                <span>
                    On this website I share my thoughts on the changes in HCI
                    (human-machine interaction), software development, leadership
                    and the afro-brazilian martial art of Capoeira.
                </span>
                <br/><br/>
                <span>
                    This page also serves as a showcase platform for
                    <a href="https://www.github.com/samihamed" rel="noopener noreferrer" target="_blank">projects I'm currently developing</a>
                    
                    and which I have contributed to in the past. From
                    the concept phase towards the technical implementation of beautiful
                    UIs and a stable architecture in the back, I enjoy building
                    useful things while always staying focused on delivering a
                    good user experience and keeping the user's needs in mind.
                </span>
            </div>
        )
    }
}
