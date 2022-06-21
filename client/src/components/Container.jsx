import React, { useState, useEffect } from 'react'
import { nanoid } from 'nanoid'
import PostsList from './PostsList'
import Search from './Search'
import { Link } from 'react-router-dom'

export default function Container() {

  const [posts, setPosts] = useState([
    {
      id: nanoid(),
      text: "Welcome! Today is going to be a great day!"
    }
  ])

  const [searchText, setSearchText] = useState('');

  useEffect(()=> {
    const savedPosts = JSON.parse(localStorage.getItem('client-app-data'));
    if(savedPosts) {
      setPosts(savedPosts)
    }
  }, [])

  useEffect(()=> {
    localStorage.setItem('client-app-data', JSON.stringify(posts))
  }, [posts])

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
      <Link to="/"><button class="save">Home</button></Link>
      <br />
      <br />
      <Search handleSearchCard={setSearchText} />
      <br />
      <PostsList posts={posts.filter((card)=>card.text.toLowerCase().includes(searchText.toLowerCase()))} handleAddCard={addCard} handleDeleteCard={deleteCard}/>
    </div>
  )
}
