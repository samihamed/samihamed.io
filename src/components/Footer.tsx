import React, { Component } from "react";

import logo from "../assets/initials.png";

import "../styles/App.css";
import "../styles/Footer.css";
import "../styles/Typography.css";

export default class Footer extends Component {
  render() {
    return (
      <div className="Footer">
        <div className="footer-content">
          <div className="footer-column">
            <a
              href="https://www.linkedin.com/in/samihamed/"
              rel="noopener noreferrer"
              target="_blank"
            >
              LinkedIn
            </a>
            <a
              href="https://www.xing.com/profile/Sami_Hamed5"
              rel="noopener noreferrer"
              target="_blank"
            >
              Xing
            </a>
            <a
              href="mailto:hello@samihamed.dev"
              rel="noopener noreferrer"
              target="_blank"
            >
              Mail
            </a>
          </div>

          <a
            className="normal-link"
            href="https://www.github.com/samihamed"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img src={logo} alt="My face as a logo" />
          </a>

          <div className="footer-column">
            <a
              href="https://www.github.com/samihamed"
              rel="noopener noreferrer"
              target="_blank"
            >
              Github
            </a>
            <a
              href="https://www.medium.com/@samihamed"
              rel="noopener noreferrer"
              target="_blank"
            >
              Medium
            </a>
            <a
              href="https://www.instagram.com/samedihamedi"
              rel="noopener noreferrer"
              target="_blank"
            >
              Instagram
            </a>
          </div>
        </div>

        <div>
          Icons made by{" "}
          <a
            href="https://www.freepik.com/home"
            rel="noopener noreferrer"
            target="_blank"
          >
            Freepik
          </a>{" "}
          from{" "}
          <a
            href="https://www.flaticon.com"
            rel="noopener noreferrer"
            target="_blank"
          >
            Flaticon
          </a>
        </div>
        <div>© 2019 Sami Hamed</div>
      </div>
    );
  }
}
