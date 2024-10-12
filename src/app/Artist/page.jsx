
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
        <img src="https://firebasestorage.googleapis.com/v0/b/test1-80c19.appspot.com/o/image%2FAnu.jpg?alt=media&token=650ba597-e31d-42b4-a77c-d2695d28f73f" style={{margin:'auto',BorderRadius: '10px'}} alt="" />
        <h4>Hope you will like my artworks </h4>
      </div>
    </div>
  )
}
