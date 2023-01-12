import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router';
import AddForm from '../Components/AddForm'
const mongoose = require('mongoose');

const AddPage = () => {
  const { imageId } = useParams();
  const navigate = useNavigate();
  const initialState = {text_one: '', text_two: '', color_one: 'black', color_two: 'black'};
  const [form, setForm] = useState(initialState);
  const [data, setData] = useState(null);
  const [image, setImage] = useState(null);

  const fetchImages = async () => {
    const resp = await fetch(`http://localhost:4000/image/`);
    const data = await resp.json();console.log(data)
    setData(data);
  }

  const fetchImage = async () => {
    const resp = await fetch(`http://localhost:4000/image/${imageId}`);
    const data = await resp.json();
    setImage(data);
  }
  console.log(data)
  const handleChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value});
  }

  const handleSubmit = async () => {
    try {
      const options = { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({...form, image: mongoose.Types.ObjectId(imageId)}) }
      const addedMeme = await fetch('http://localhost:4000/meme/', options);
      const added = await addedMeme.json();
      navigate(`/view/${added._id}`);
      console.log(form)
    } catch (error) {
      console.error(error);
    }
  }
console.log(imageId)
  useEffect(() => {
    fetchImages();
    fetchImage();
  }, [imageId]);

  return (
    <AddForm handleChange={handleChange} 
             handleSubmit={handleSubmit} 
             setForm={setForm} 
             form={form} 
             initialState={initialState}
             data={data}
             image={image}
    />
  )
}

export default AddPage
