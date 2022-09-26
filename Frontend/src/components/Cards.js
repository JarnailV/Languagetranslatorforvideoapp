import React from 'react';
import './App.css';
import CardItem from './CardItem';
import video from './obama.mp4'
import video1 from './obamaoutput.mp4'
import video2 from './video.mp4'

function Cards() {
  return (
    <div className='cards'>
      
      <h1>Check out these translated videos</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
          
          <CardItem
              src={video}
              text='Input'
              path={video}
              target="_blank"
            />
            <CardItem
              src={video1}
              text='Output'
              path={video1}
            />
            <CardItem
              src={video2}
              text='Video Translator: Sign Up here. Final Year project by Jarnail Valasai and Ritick Kumar'
              path='/signup'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;