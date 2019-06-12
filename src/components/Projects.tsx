import React, { Component } from 'react'
import marked from 'marked'
import {
    capoeiraSongBot,
    stockOverflow,
    iaiaioio
} from '../articles/projects'
import Rainbow from './Rainbow'
import botPic from '../assets/karaoke.png'
import stockPic from '../assets/report.png'
import notePic from '../assets/notepad.png'

import '../styles/App.css'
import '../styles/Projects.css'
import '../styles/Typography.css'

export default class Projects extends Component {
    mark(text: string) {
        return marked(text)
    }

    render() {
        return (
            <div className="Projects">
                <Rainbow/>
                <div className="row">
                    <div className="card">
                        <div className="project">
                            <img src={ botPic } alt="Placeholder icon for CapoeiraSongBot"/>
                            <h2>CapoeiraSongBot</h2>

                        </div>
                        <div dangerouslySetInnerHTML={{ __html: this.mark(capoeiraSongBot)}}></div>
                    </div>
                    <div className="card">
                        <div className="project">
                            <img src={ stockPic } alt="Placeholder icon for StockOverflow"/>
                            <h2>StockOverflow</h2>

                        </div>
                        <div dangerouslySetInnerHTML={{ __html: this.mark(stockOverflow)}}></div>
                    </div>
                    <div className="card">
                        <div className="project">
                            <img src={ notePic } alt="Placeholder icon for IaiaIoio"/>
                            <h2>Iaia-Ioio</h2>

                        </div>
                        <div dangerouslySetInnerHTML={{ __html: this.mark(iaiaioio)}}></div>
                    </div>
                </div>
            </div>
        )
    }
}
