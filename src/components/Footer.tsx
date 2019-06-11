import React, { Component } from 'react'
import Rainbow from '../components/Rainbow'

import logo from '../assets/cutout.png'

import '../styles/App.css'
import '../styles/Footer.css'

export default class Footer extends Component {
  render() {
        return (
            <div className="Footer">

                <Rainbow/>
                
                <div className="footer-content">
                    
                    <div className="footer-column">
                        <span>LinkedIn</span>
                        <span>Instagram</span>
                        <span>Xing</span>
                        <span>Email</span>
                    </div>

                    <a className="normal-link" href="https://www.github.com/samihamed" target="_blank">
                        <img src={logo} alt="My face as a logo"/>
                    </a>

                    <div className="footer-column">
                        <span>LinkedIn</span>
                        <span>Instagram</span>
                        <span>Xing</span>
                        <span>Email</span>
                    </div>

                </div>

            </div>
        )
    }
}
