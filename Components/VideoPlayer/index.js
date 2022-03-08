import { css } from "@nextui-org/react";
import React from "react";
import YouTube from "react-youtube";
  
export default class YoutubeVideo 
extends React.Component {
  render() {
    const opts = {
      height: "390",
      width: "640",
      playerVars: {
        autoplay: 1,
      },
    };
  
    return (
      <div>
      <h1>Introduction</h1>
        <YouTube videoId="GNbKZls3W4w" 
            opts={opts} onReady={this._onReady} />
      </div>
    );
  }
  
  _onReady(event) {
    event.target.pauseVideo();
  }
}