import React, { Component } from 'react'

import '../styles/App.css'
import '../styles/Typography.css'
import '../styles/Home.css'

export default class Home extends Component {
    render() {
        return (
            <div className="Home">
                <div>
                    <h1>
                        Hi, I'm Sami - Self-taught full-stack web developer & full-on Capoeira instructor
                    </h1>
                    <span>
                        Based in Hamburg, Germany 📍
                    </span>
                </div>
            </div>
        )
    }
}
