import React from "react";
import Imgy from "./Imgy";
import Link from "next/link";
function Art() {

 
  return (
    <>

    <div>
   
      <div className="gallery">
        {Imgy.map((val) => {
          let url = `${val}`;
          let pic = `Photu/${val}`;
          return (
          <Link key ={val} href={url} target="_blank" ><img src={url} alt="" className="image_card"/></Link>
          
          )
          
        })}
      </div>
    
     
    </div>
  
    </>
  );
}

export default Art;
