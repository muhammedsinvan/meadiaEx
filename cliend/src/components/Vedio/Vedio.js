import React from 'react';
import './Vedio.css';

const Video = () => {
  return (
    <div className="video-container">
      <div className="play-button" onClick={() => window.open('https://youtu.be/AAhbjS66vhI')}>
        <img src="https://www.freeiconspng.com/thumbs/play-button-icon-png/play-button-icon-png-6.png" alt="Play" />
      </div>
    </div>
  );
};

export default Video;
