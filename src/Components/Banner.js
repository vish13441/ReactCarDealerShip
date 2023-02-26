import React from 'react'


const Banner = ({ children, title, subtitle }) => {
 
  return (
   

    <div  className="banner" >
      <h1 style={{ color: 'purple' }}>{title}</h1>
      <div />
      <p style={{ color: 'purple',fontSize: 40,fontWeight: "bolder"}}>{subtitle}</p>
      {children} 
      
    </div>
    
  )
}


export default Banner;