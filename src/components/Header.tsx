import React, { Component } from 'react'
import logo from '../assets/initials.png'
import '../styles/App.css'
import '../styles/Header.css'

export default class Header extends Component {
  render() {
        return (
            <div className="Header">
                <a className="normal-link" rel="noopener noreferrer" href="https://www.github.com/samihamed" target="_blank">
                    <img src={logo} alt="My face as a logo"/>
                </a>
                <h1>Sami Hamed | Product & Software Developer</h1>
            </div>
        )
    }
}
