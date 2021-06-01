import React, { Component } from "react";
import marked from "marked";
import {
  capoeiraSongBot,
  stockOverflow,
  gingaStore
} from "../articles/projects";
import Rainbow from "./Rainbow";
import botPic from "../assets/capoeiraSongBot.png";
import stockPic from "../assets/report.png";
import notePic from "../assets/gingaStore.png";

import "../styles/App.css";
import "../styles/Projects.css";
import "../styles/Typography.css";

export default class Projects extends Component {
  mark(text: string) {
    return marked(text);
  }

  render() {
    return (
      <div className="Projects">
        <Rainbow />
        <div className="row">
          <div className="card">
            <div className="project">
              <img src={botPic} alt="Icon for CapoeiraSongBot" />
              <h2>CapoeiraSongBot</h2>
            </div>
            <div
              dangerouslySetInnerHTML={{ __html: this.mark(capoeiraSongBot) }}
            ></div>
          </div>
          <div className="card">
            <div className="project">
              <img src={stockPic} alt="Placeholder icon for StockOverflow" />
              <h2 style={{textDecoration: 'line-through'}}>StockOverflow</h2>
              <h3>Deprecated</h3>
            </div>
            <div
              dangerouslySetInnerHTML={{ __html: this.mark(stockOverflow) }}
            ></div>
          </div>
          <div className="card">
            <div className="project">
              <img src={notePic} alt="Icon for GingaStore" />
              <h2 style={{textDecoration: 'line-through'}}>Ginga Store</h2>
              <h3>Deprecated</h3>
            </div>
            <div
              dangerouslySetInnerHTML={{ __html: this.mark(gingaStore) }}
            ></div>
          </div>
        </div>
      </div>
    );
  }
}
