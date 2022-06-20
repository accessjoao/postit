import React from 'react'
import { MdDeleteForever } from 'react-icons/md'

export default function Cards({ id, text, date }) {
  return (
    <div className='card'>
      <span>{text}</span>
      <div className='card-footer'>
        <small>{date}</small>
        <MdDeleteForever className='delete-icon' size='1.3em' />
      </div>
    </div>
  )
}
