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
                    In the past years, I have been part of multiple startup endeavours in various roles that always had digital solutions laying at their hearts.
                    From creating B2B software solutions as a lead software developer, to implementing user feedback through quantitative and qualitative UX methods,
                    and creating product roadmaps while leading cross-functional teams of product owners, I constantly pursued my passion of building digital products for end-users to enjoy.
                    Optimizing user journeys and business flows is fun to me as I channel my inner laziness and love for automating processes. With the eyes of a designer,
                    the heart of a product manager, and the mindset of a software engineer, I like to see products and teams grow.

                    Also, I'm a 'vegan in denial', a wannabe minimalist, and passionate about training and <a href="https://aruanda.de/aruanda-frankfurt" rel="noopener noreferrer" target="_blank">teaching Capoeira</a> - an afro-brazilian martial art.
                </span>
                <br/><br/>
                <span>
                    My hometown is Hamburg where I was born and
                    raised, Frankfurt is where I studied and fell in love with
                    software during my work as a
                    <a href="https://company.acomodeo.com" rel="noopener noreferrer" target="_blank">lead developer at Acomodeo.</a>
                    In 2019 I returned to my hometown Hamburg to work as a
                    <a href="https://www.finanzcheck.de" rel="noopener noreferrer" target="_blank">full-stack developer at Finanzcheck.</a>
                    Since 2020 I've been working on improving the co-living platform for customers at
                    <a href="https://www.homeful.ly" rel="noopener noreferrer" target="_blank">homefully in my role as VP Product</a>.
                    I’m committed to being a lifelong learner and love to take on challenges as I go.
                </span>
                {/* <br/><br/>
                <span>
                    On this website I share my thoughts on the changes in HCI
                    (human-machine interaction), product & software development, leadership
                    and the afro-brazilian martial art of Capoeira.
                </span> */}
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
