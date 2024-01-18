import React from 'react'
import Nav from '../Components/Nav'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

import AnimatedCursor from 'react-animated-cursor';

export default function Dev() {
  return (
    <div>
      <Nav/>
      <div className="App">
      <AnimatedCursor
      
  
  hasBlendMode={true}
  innerStyle={{
    backgroundColor: "#333"
  }}
  color="#fff"
  innerSize={8}
  outerSize={35}
  innerScale={2}
  outerScale={5}
  outerAlpha={1}
  outerStyle={{
    // border: '3px solid #fff',
    backgroundColor: "#fff",
    mixBlendMode: 'exclusion'
  }}

      
      />
    </div>
      <div className="center">
        <h1>Developer </h1>
        <p>It's me Aditya Gaur</p>
        <img style={{margin:'auto'}} src="https://firebasestorage.googleapis.com/v0/b/test1-80c19.appspot.com/o/image%2Fme.jpg?alt=media&token=345063ae-509e-4b18-9526-2ecc59336d2e" alt="" />
        <div style={{display:'block'}}> <h3>Check out My Portfolio <a href="https://adityagaur7.github.io/portfolio-adgaur.github.io/" target='_blank'><OpenInNewIcon/></a></h3></div>
       
        <h4>Connect with me</h4>
        <ul className='flex bada'>
            <li><a href="https://www.linkedin.com/in/aditya-gaur-mmmut/" className='linkedin' target='_blank'><LinkedInIcon/></a></li>
            <li><a href="https://www.instagram.com/__aditya_gaur_090/" className='insta' target='_blank'><InstagramIcon/></a></li>
            <li><a href="https://www.youtube.com/@adgaur090" className='yt' target='_blank'><YouTubeIcon/></a></li>
        </ul>
      </div>
    </div>
  )
}
