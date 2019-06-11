import React, { Component } from 'react'
import logo from '../assets/cutout.png'
import '../styles/App.css'
import '../styles/Header.css'

export default class Header extends Component {
  render() {
        return (
            <div className="Header">
                <a className="normal-link" href="https://www.github.com/samihamed" target="_blank">
                    <img src={logo} alt="My face as a logo"/>
                </a>
                <h1>Sami Hamed | Full-Stack Web Developer</h1>
            </div>
        )
    }
}
