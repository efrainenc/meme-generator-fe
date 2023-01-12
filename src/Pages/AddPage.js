import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router';
import AddForm from '../Components/AddForm'

const AddPage = () => {
  const { imageId } = useParams();
  const navigate = useNavigate();
  const initialState = {text_one: '', text_two: '', imageId: imageId};
  const [form, setForm] = useState(initialState);

  const fetchImage = () => {

  }
  
  const handleChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value});
  }

  const handleSubmit = async () => {console.log(form)
    try {
      
    } catch (error) {
      console.error(error);
    }
  }

  const src = 'https://imgflip.com/s/meme/Bernie-I-Am-Once-Again-Asking-For-Your-Support.jpg',
        top = 100, left = 200;

  return (
    <AddForm handleChange={handleChange} 
             handleSubmit={handleSubmit} 
             setForm={setForm} 
             form={form} 
             initialState={initialState}
             src={src}
             top={top}
             left={left}
    />
  )
}

export default AddPage
