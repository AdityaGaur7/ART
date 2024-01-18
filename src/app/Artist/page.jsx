
import React from 'react'
import Nav from '../Components/Nav'
import AnimatedCursor from 'react-animated-cursor'
export default function Arist() {
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
  outerAlpha={5}
  outerStyle={{
    // border: '3px solid #fff',
    backgroundColor: "#fff",
    mixBlendMode: 'exclusion'
  }}

      
      />
    </div>
      
      <div className="center">
        <h1>Artist</h1>
        <p>It's me Anushka R.Gour</p>
        <img src="https://firebasestorage.googleapis.com/v0/b/test1-80c19.appspot.com/o/image%2FArtist.jpg?alt=media&token=bc81a708-5b1f-4450-9f0a-0adaea8bed14" style={{margin:'auto',BorderRadius: '10px'}} alt="" />
        <h4>Hope you will like my drawings</h4>
      </div>
    </div>
  )
}
