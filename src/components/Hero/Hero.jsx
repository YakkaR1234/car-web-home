
import './Hero.css';
import arrow_btn from '../../assets/arrow_btn.png'
import pause_icon from '../../assets/pause_icon.png'
import playicon from '../../assets/play_icon.png'




const Hero = ({heroData,setHeroCount,heroCount,setplayStatus,PlayStatus}) => {
  return (
    <div className='hero'>
      <div className="hero-text">
        <p>{heroData.text1}</p>
        <p>{heroData.text2}</p>
      </div>
      <div className="hero-explore">

        <p>Explore the features</p>
        <img src={arrow_btn} alt=''></img>
      </div>
    
    <dev className="hero-dot-play">
      <ul className="hero-dots">
        <li onClick={()=>setHeroCount(0)} className={heroCount===0?"hero-dot orange":"hero-dot"}> </li>
        <li onClick={()=>setHeroCount(1)} className={heroCount===1?"hero-dot orange":"hero-dot"}></li>
        <li onClick={()=>setHeroCount(2)} className={heroCount===2?"hero-dot orange":"hero-dot"}></li>
      </ul>
    
    <dev className="hero-play">
      <img
      onClick={()=>setplayStatus(!PlayStatus)}
      src={PlayStatus?pause_icon:playicon} alt=''
      ></img>

      <p>see the vedio</p>
    </dev>
    
    </dev>
    </div>
  )
}

export default Hero
