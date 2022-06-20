import React from 'react'
import AddNewCard from './AddNewCard'
import Cards from './Cards'

export default function PostsList({ posts, handleAddCard }) {
  return (
    <div className='posts-list'>
      {posts.map((post)=>
      <Cards id={post.id} text={post.text} date={post.date} />
      )}
      <AddNewCard handleAddCard={handleAddCard}/>
    </div>
  )
}
