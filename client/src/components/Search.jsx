import React from 'react'
import {MdSearch} from 'react-icons/md'

export default function Search({ handleSearchCard }) {
  return (
    <div className='search'>
      <MdSearch className='search-icons' size='1.3em'/>
      <input onChange={(event)=>handleSearchCard(event.target.value)} type='text' placeholder='type to search...' />
    </div>
  )
}
