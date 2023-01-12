import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router';
import AddForm from '../Components/AddForm'

const AddPage = () => {
  const { imageId } = useParams();
  const navigate = useNavigate();
  const initialState = {text_one: '', text_two: ''};
  const [form, setForm] = useState(initialState);

  const fetchImage = () => {
    
  }
  
  const handleChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value});
  }

  const handleSubmit = async () => {console.log(form)
    try {
      const options = { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form) }
      const addedMeme = await fetch('https://hack-meme-gen.herokuapp.com/meme/', options);
      const added = await addedMeme.json();
      navigate(`/view/${added._id}`);
    } catch (error) {
      console.error(error);
    }
  }

  const src = 'https://imgflip.com/s/meme/Bernie-I-Am-Once-Again-Asking-For-Your-Support.jpg',
        firstTop = 0, firstLeft = 100,
        secondTop = 400, secondLeft = 100;

  return (
    <AddForm handleChange={handleChange} 
             handleSubmit={handleSubmit} 
             setForm={setForm} 
             form={form} 
             initialState={initialState}
             src={src}
             firstTop={firstTop}
             firstLeft={firstLeft}
             secondTop={secondTop}
             secondLeft={secondLeft}
    />
  )
}

export default AddPage
