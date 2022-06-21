import React from "react";
import AddNewCard from "./AddNewCard";
import Cards from "./Cards";

export default function PostsList({ posts, handleAddCard, handleDeleteCard }) {
  return (
    <div className="posts-list">
      {posts.map((post) => (
        <Cards
          id={post.id}
          text={post.text}
          date={post.date}
          handleDeleteCard={handleDeleteCard}
        />
      ))}
      <AddNewCard handleAddCard={handleAddCard} />
    </div>
  );
}
