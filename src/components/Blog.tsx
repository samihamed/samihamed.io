import React, { Component } from 'react'
import marked from 'marked'
import { article } from '../articles/2019-03-30'
import medium from '../assets/medium.png'

import '../styles/App.css'
import '../styles/Typography.css'
import '../styles/Blog.css'

export default class Blog extends Component {
    mark(text: string) {
        return marked(text)
    }

    render() {
        return (
            <div style={{backgroundColor: '#e8e8e8'}}>

                <a className="medium-logo" href="https://medium.com/@samihamed" target="_blank">
                    <img src={ medium }/>
                </a>

                <div className="blog-header">
                    <h2>
                        Some thoughts on software development
                    </h2>
                </div>

                <div className="article" dangerouslySetInnerHTML={{ __html: this.mark(article)}}></div>

                <div className="blog-footer">
                    <a
                        className="blog-link"
                        href="https://medium.com/@samihamed/4-things-i-learned-from-becoming-a-lead-developer-in-my-first-year-as-a-self-taught-professional-24472fd45fd1" target="_blank"
                    >
                        Read the whole article on Medium.com
                    </a>
                </div>

            </div>
        )
    }
}
