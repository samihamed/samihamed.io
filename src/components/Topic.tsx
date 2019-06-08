import React, { Component } from 'react'

import '../styles/App.css'
import '../styles/Topic.css'
import '../styles/Typography.css'
import { SectionType } from '../types/Section.type'

interface TopicProps {
    section: SectionType
}

interface TopicState {
    section: SectionType
}

export default class Topic extends Component<TopicProps, TopicState> {
    state: { section: SectionType }

    constructor(props: TopicProps) {
        super(props)

        this.state = {
            section: props.section
        }
    }
    render() {
        return (
            <div className="Topic">
                <h1 className="Headline">{this.state.section}</h1>
            </div>
        )
    }
}
