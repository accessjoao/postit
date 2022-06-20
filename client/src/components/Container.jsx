import React, { useState } from 'react'
import { nanoid } from 'nanoid'
import PostsList from './PostsList'
import Search from './Search'

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

  const [searchText, setSearchText] = useState('');

  const addCard = (text) => {
    const date = new Date();
    const newCard = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString()
    }
    const newCards = [...posts, newCard]
    setPosts(newCards);
  }

  const deleteCard = (id) => {
    const newCards = posts.filter((post)=> post.id !== id);
    setPosts(newCards);
  }



  return (
    <div className='container'>
      <Search handleSearchCard={setSearchText} />
      <br />
      <PostsList posts={posts.filter((card)=>card.text.toLowerCase().includes(searchText))} handleAddCard={addCard} handleDeleteCard={deleteCard}/>
    </div>
  )
}
