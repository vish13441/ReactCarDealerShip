import React from 'react'


const Banner = ({ children, title, subtitle }) => {
 
  return (
   

    <div  className="banner" >
      <h1 style={{color: 'white',fontSize: 40,fontWeight: "bolder", backgroundColor:'black' }}>{title}</h1>
      <div />
      <p style={{ color: 'white',fontSize: 40,fontWeight: "bolder", backgroundColor:'black'}}>{subtitle}</p>
      {children} 
      
    </div>
    
  )
}


export default Banner;