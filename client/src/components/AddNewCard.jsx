import { useState } from 'react'

export default function AddNewCard({ handleAddCard }) {

  const [cardText, setCardText] = useState('');

  const handleChange = (event) => {
    setCardText(event.target.value);
  }

  const handleSaveClick = () => {
    if(cardText.trim().length > 0) {
      handleAddCard(cardText);
      setCardText('');
    }
    
  }

  return (
    <div className='card new'>
      <textarea rows='8' cols='10' placeholder='Add a new note'
      value={cardText}
      onChange={handleChange}
      ></textarea>
      <div className='card-footer'>
        <small>200 remaining</small>
        <button className='save' onClick={handleSaveClick}>Save</button>
      </div>
    </div>
  )
}
