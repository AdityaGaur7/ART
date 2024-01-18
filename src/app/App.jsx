import React from 'react'
import Nav from './Components/Nav'
import Art from './Proj/Art'
import Foot from './Components/Foot'
import AnimatedCursor from 'react-animated-cursor'
function App() {
  return (
    <div>
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
  outerScale={2}
  outerAlpha={1}
  outerStyle={{
    // border: '3px solid #fff',
    backgroundColor: "#fff",
    mixBlendMode: 'exclusion'
  }}

      
      />
    </div>
      <Nav/>
      <Art/>
     <Foot/>
    </div>
  )
}

export default App
