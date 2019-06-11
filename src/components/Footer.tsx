import React, { Component } from 'react'
import Rainbow from '../components/Rainbow'

import logo from '../assets/cutout.png'

import '../styles/App.css'
import '../styles/Footer.css'
import '../styles/Typography.css'

export default class Footer extends Component {
  render() {
        return (
            <div className="Footer">

                <Rainbow/>
                
                <div className="footer-content">
                    
                    <div className="footer-column">
                        <a href="https://www.linkedin.com/in/samihamed/" target="_blank">LinkedIn</a>
                        <a href="https://www.xing.com/profile/Sami_Hamed5" target="_blank">Xing</a>
                        <a href="mailto:hello@samihamed.dev" target="_blank">Mail</a>
                    </div>

                    <a className="normal-link" href="https://www.github.com/samihamed" target="_blank">
                        <img src={logo} alt="My face as a logo"/>
                    </a>

                    <div className="footer-column">
                        <a href="https://www.github.com/samihamed" target="_blank">Github</a>
                        <a href="https://www.medium.com/@samihamed" target="_blank">Medium</a>
                        <a href="https://www.instagram.com/samedihamedi" target="_blank">Instagram</a>
                    </div>

                </div>

                <div>Icons made by <a href="https://www.freepik.com/home" target="_blank">Freepik</a> from <a href="https://www.flaticon.com" target="_blank">Flaticon</a></div>
                <div>© 2019 Sami Hamed</div>

            </div>
        )
    }
}
