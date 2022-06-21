import React from 'react'


export default function NavBar({ handleToggleDarkMode }) {
  
  return (
    <div className="header">
      <h1>Post It!</h1>
      <button onClick={()=> handleToggleDarkMode((previousDarkMode)=>!previousDarkMode)} className='save'>Theme Toggle</button>
      
      
    </div>
  )
}
