import React, { Component } from 'react'
import logo from '../assets/cutout.png'
import '../styles/App.css'
import '../styles/Header.css'

export default class Header extends Component {
  render() {
        return (
            <div className="Header">
            <img src={logo} alt="My face as a logo"/>
            </div>
        )
    }
}
