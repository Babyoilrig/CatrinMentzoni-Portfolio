import React from "react";
import YouTube from "react-youtube";
import css from "./video.module.css";
  
export default class Video 
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
      <div className={css.videoPlayer}>
        <YouTube videoId="r6INKyX78PE" 
            opts={opts} onReady={this._onReady} />
      </div>
    );
  }
  
  _onReady(event) {
    event.target.pauseVideo();
  }
}
