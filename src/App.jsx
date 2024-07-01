import { useEffect, useState } from 'react'
import './App.css'
import Background from './components/Background/Background'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'


const App = () => {
  
  let heroData=[{text1:"Drive into",text2:"what you love"},
    {text1:"Drive into",text2:"what you love"},
    {text1:"Drive into",text2:"what you love"},
  ]

  const [heroCount,setHeroCount]=useState(2);
  const[PlayStatus,setplayStatus]=useState(false);
  
  useEffect(()=>{setInterval(()=>{setHeroCount((count)=>{return count===2?0:count+1})
  },3000);
},[])
  
  return (
    <div>
      <Background PlayStatus={PlayStatus} heroCount={heroCount}/>
      <Navbar />
      <Hero
        setplayStatus={setplayStatus}
        heroData={heroData[heroCount]}
        heroCount={heroCount}
        setHeroCount={setHeroCount}
        PlayStatus={PlayStatus}
      />
     
      
      
    </div>
  )
}

export default App
