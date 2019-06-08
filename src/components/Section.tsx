import React, { Component } from 'react'

import portrait from '../assets/portrait.jpg'
import iphoneXR from '../assets/iphone_xr.png'

import marked from 'marked'
import { article } from '../articles/2019-03-30'

import '../styles/App.css'
import '../styles/Section.css'
import { ManifestSection } from '../types/Manifest.type'
import { MicroCopy } from '../manifest/Section.manifest';

interface SectionProps {
    section: ManifestSection,
}
interface SectionState {
    section?: ManifestSection,
    head: string,
    body: string,
    bottom: Array<string>
}

export default class Section extends Component<SectionProps, SectionState> {
    constructor(props: SectionProps) {
        super(props)

        this.state = {
            head: props.section.head || '',
            body: props.section.body || '',
            bottom: props.section.bottom || ['']
        }
    }

    mark(text?: string) {
        return marked(text || '')
    }

    render() {
      return (
        <div className="Section">
            <h1>{this.state.head}</h1>
            <h2>{this.state.body}</h2>
            <div className="section-content">
                {
                    this.state.head === MicroCopy.About.head
                        ? <div className="picture-container"><img src={portrait} alt="Me on a mountain in Norway"/></div>
                        : null
                }

                {
                    this.state.head === MicroCopy.Projects.head
                        ? <div className="picture-container"><img src={iphoneXR} alt="A screenshot of a blue iPhone XR showing the CapoeiraSongBot in action"/></div>
                        : null
                }

                {
                    this.state.head === MicroCopy.Blog.head
                        ? <div className="article" dangerouslySetInnerHTML={{ __html: this.mark(article)}}></div>
                        : null
                }

                {
                    this.state.bottom.map(element => {
                        return <div key={this.state.bottom.indexOf(element)} className="markdown-block" dangerouslySetInnerHTML={{ __html: this.mark(element)}}></div>
                    })
                }
            </div>
        </div>
      )
    }
}
