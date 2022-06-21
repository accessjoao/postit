import { useState } from "react";

export default function AddNewCard({ handleAddCard }) {
  const [cardText, setCardText] = useState("");

  const characterLimit = 100;

  const handleChange = (event) => {
    if (characterLimit - event.target.value.length >= 0) {
      setCardText(event.target.value);
    }
  };

  const handleSaveClick = () => {
    if (cardText.trim().length > 0) {
      handleAddCard(cardText);
      setCardText("");
    }
  };

  return (
    <div className="card new">
      <textarea
        rows="8"
        cols="10"
        placeholder="Post It!"
        value={cardText}
        onChange={handleChange}
      ></textarea>
      <div className="card-footer">
        <small>{characterLimit - cardText.length}</small>
        <button className="save" onClick={handleSaveClick}>
          Save
        </button>
      </div>
    </div>
  );
}
