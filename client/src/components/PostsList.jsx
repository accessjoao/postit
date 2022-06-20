import React from 'react'
import Cards from './Cards'

export default function PostsList({ posts }) {
  return (
    <div className='posts-list'>
      {posts.map((post)=>
      <Cards id={post.id} text={post.text} date={post.date} />
      )}
    </div>
  )
}
