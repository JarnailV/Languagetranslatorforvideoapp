import React from 'react';
import "./App.css";
import { Button} from "react-bootstrap"

function HeroSection() {
  return (
    <div className='hero-container'>
    <video id="background-video" src='https://firebasestorage.googleapis.com/v0/b/video-translator-5d580.appspot.com/o/video-2.mp4?alt=media&token=98adf701-d59f-431a-a25e-70d7d5f59d8b' autoPlay loop muted />
      <h1>Video Translator</h1>
      <p>By Jarnail Valasai and Ritick</p>
      <div className='hero-btns'>
        <Button
          href="/Signup"
          variant="success"
        >
          
          Try Now
        </Button>
        <Button
          href="/Sample"
          variant="info"
        >
          WATCH SAMPLES

          <i className='far fa-play-circle' />
        </Button>
        
      </div>
    </div>
  );
}

export default HeroSection;