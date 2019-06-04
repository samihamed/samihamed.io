import React, { Component } from 'react'

import portrait from '../assets/portrait.jpg'
import iphoneXR from '../assets/iphone_xr.png'
import tweety from '../assets/tweety.png'

import '../styles/App.css'
import '../styles/Section.css'
import { ManifestSection } from '../types/Manifest.type'

interface SectionProps {
    section: ManifestSection,
    head?: string,
    body?: string,
    bottom?: string
}
interface SectionState {
    section?: ManifestSection,
    head?: string,
    body: string,
    bottom?: string
}

export default class Section extends Component<SectionProps, SectionState> {
    constructor(props: SectionProps) {
        super(props)

        this.state = {
            head: props.section.head || '',
            body: props.section.body || '',
            bottom: props.section.bottom || ''
        }
    }

    render() {
      return (
        <div className="Section">
            <div>{this.state.head}</div>
            <h1>
                {this.state.body}
            </h1>
            <span>
                {
                    this.state.head === ``
                        ? <div><img src={portrait}/></div>
                        : null
                }

                {
                    this.state.head === `I MADE THIS`
                        ? <div><img src={iphoneXR}/></div>
                        : null
                }

                {
                    this.state.head === `THOUGHTS ON LIFE AND SOFTWARE`
                        ? <div><img src={tweety}/></div>
                        : null
                }
                {this.state.bottom}
            </span>
        </div>
      )
    }
}
