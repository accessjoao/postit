import React, { useState } from 'react'
import { nanoid } from 'nanoid'
import PostsList from './PostsList'

export default function Container() {

  const [posts, setPosts] = useState([
    {
      id: nanoid(),
      text: "this is my first note",
      date: '20/06/2022'
    },
    {
      id: nanoid(),
      text: "this is my second note",
      date: '20/06/2022'
    },
    {
      id: nanoid(),
      text: "this is my third note",
      date: '20/06/2022'
    },
    {
      id: nanoid(),
      text: "this is my fourth note",
      date: '20/06/2022'
    },
  ])



  return (
    <div className='container'>
      <PostsList posts={posts}/>
    </div>
  )
}
