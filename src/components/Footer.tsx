import React, { Component } from 'react'
import logo from '../assets/cutout.png'
import '../styles/App.css'
import '../styles/Footer.css'

export default class Footer extends Component {
  render() {
        return (
            <div className="Footer">
            <img src={logo}/>
            </div>
        )
    }
}
