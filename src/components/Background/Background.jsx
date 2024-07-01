import './Background.css';
import React from 'react';

import video1 from '../../assets/video1.mp4';
import tmp1 from '../../assets/tmp1.jpg';
import tmp2 from '../../assets/tmp2.jpg'
import tmp3 from '../../assets/tmp3.png'
import tmp4 from '../../assets/tmp4.jpg'
import tmp5 from '../../assets/tmp5.jpeg'


const Background = ({PlayStatus,heroCount}) => {

  if(PlayStatus){
    return (
      <video className='Background fade-in' autoPlay loop muted>
        <source src={video1} type='video/mp4' />
      </video>
    )
  }else if(heroCount===0){
    return (
      <img src={tmp1} className='Background' alt=" "></img>
    )
  }else if(heroCount==1){
    return (
      <img src={tmp2} className='Background' alt=" "></img>
    )
  }
  else if(heroCount===2){
    return (
      <img src={tmp3} className='Background' alt=" "></img>
    )
  }
}


export default Background;
