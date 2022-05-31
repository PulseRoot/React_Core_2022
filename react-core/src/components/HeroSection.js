import React from 'react';
import '../App.css';
import {Button} from './Button';
import './HeroSection.css';
import Video from '../videos/fitness.mp4'

function HeroSection() {
  return (
    <div className='hero-container'>
        <video autoPlay loop muted src={Video} type='video/mp4' />
        <h1>운동파트너, 어디서 구하지? </h1>
        <p>당신의 운동메이트 CORE</p>
        <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          운동파트너 찾기 <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
