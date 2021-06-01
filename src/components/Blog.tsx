import React, { Component } from "react";
import marked from "marked";
import { article, article2, article3 } from "../articles/2019-03-30";
import medium from "../assets/medium.png";

import "../styles/App.css";
import "../styles/Typography.css";
import "../styles/Blog.css";

export default class Blog extends Component {
  mark(text: string) {
    return marked(text);
  }

  render() {
    return (
      <div style={{ backgroundColor: "#e8e8e8" }}>
        <a
          className="medium-logo normal-link"
          rel="noopener noreferrer"
          href="https://medium.com/@samihamed"
          target="_blank"
        >
          <img alt="Logo of the Medium app" src={medium} />
        </a>

        <div className="blog-header">
          <h2>
            Thoughts on software{" "}
            <span role="img" aria-label="Lightbulb emoji">
              💡
            </span>
          </h2>
        </div>

        <div
          className="article"
          dangerouslySetInnerHTML={{ __html: this.mark(article3) }}
        ></div>

        <div className="blog-footer">
          <a
            className="blog-link"
            rel="noopener noreferrer"
            href="https://samihamed.medium.com/3-things-we-consider-when-designing-digital-experiences-for-physical-products-c5502588ae4e"
            target="_blank"
          >
            Read the whole article on Medium.com
          </a>
        </div>

        <div
          className="article"
          dangerouslySetInnerHTML={{ __html: this.mark(article2) }}
        ></div>

        <div className="blog-footer">
          <a
            className="blog-link"
            rel="noopener noreferrer"
            href="https://medium.com/@samihamed/thoughts-on-the-evolution-of-machine-interfaces-part-1-conquering-the-space-of-numbers-18148cfc8366?source=friends_link&sk=8e33e6e09fb5de7d2069c23f3fca769c"
            target="_blank"
          >
            Read the whole article on Medium.com
          </a>
        </div>

        <div
          className="article"
          dangerouslySetInnerHTML={{ __html: this.mark(article) }}
        ></div>

        <div className="blog-footer">
          <a
            className="blog-link"
            rel="noopener noreferrer"
            href="https://medium.com/@samihamed/4-things-i-learned-from-becoming-a-lead-developer-in-my-first-year-as-a-self-taught-professional-24472fd45fd1?source=friends_link&sk=5e11c935fc8691d52e531037a957b7fb"
            target="_blank"
          >
            Read the whole article on Medium.com
          </a>
        </div>
      </div>
    );
  }
}
