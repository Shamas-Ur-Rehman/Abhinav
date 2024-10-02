import React, { useEffect } from 'react';
import './FullScreenVideo.css';

const FullScreenVideo = ({ onEnd }) => {
  useEffect(() => {
    const videoElement = document.getElementById('intro-video');
    
    if (videoElement) {
      videoElement.play(); // Automatically play the video on load
      videoElement.onended = () => {
        onEnd(); // When the video ends, trigger the callback to hide it
      };
    }
  }, [onEnd]);

  return (
    <div className="fullscreen-video">
      <video id="intro-video" className="video" muted autoPlay>
        <source src="logoAV-v.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default FullScreenVideo;

