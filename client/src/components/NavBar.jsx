import { Icon } from '@iconify/react'
import React from 'react'


export default function NavBar({ handleToggleDarkMode }) {
  
  return (
    <div className="header">
      <h1>Post It!</h1>
      {/*<button onClick={()=> handleToggleDarkMode((previousDarkMode)=>!previousDarkMode)} className='save'>Theme Toggle</button>*/}
      <Icon icon="carbon:light-filled" height={30} style={{ color: 'white' }}
      onClick={()=> handleToggleDarkMode((previousDarkMode)=>!previousDarkMode)}
      className="toggle" />
      
      
    </div>
  )
}
