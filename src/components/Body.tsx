import React, { Component } from 'react'
import Header from '../components/Header'
import Rainbow from '../components/Rainbow'
import About from '../components/About'

import me from '../assets/me.png'

import '../styles/App.css'
import '../styles/Body.css'


export default class Body extends Component {
  render() {
        return (
            <div className="Body">
                
                <Header/>

                <div className="body-container">
                    
                    <div className="body-element primary">
                        <About/>
                    </div>

                    <div className="body-element secondary">
                        <img className="portrait" alt="Me drinking a cup of Austrian coffee" src={ me }/>
                    </div>

                </div>
                <Rainbow/>

            </div>
        )
    }
}
