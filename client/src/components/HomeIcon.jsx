import React from 'react'
import { Link } from 'react-router-dom'

export default function HomeIcon() {
  return (
    <div>
      <Link to='/'>
        <button>Home</button>
      </Link>
    </div>
  )
}