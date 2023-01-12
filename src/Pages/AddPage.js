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
    const resp = await fetch(`https://hack-meme-gen.herokuapp.com/image/`);
    const data = await resp.json();
    setData(data);
  }

  const fetchImage = async () => {
    const resp = await fetch(`https://hack-meme-gen.herokuapp.com/image/${imageId}`);
    const data = await resp.json();
    setImage(data);
  }

  const handleChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value});
  }

  const handleSubmit = async () => {
    try {
      const options = { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({...form, image: mongoose.Types.ObjectId(imageId)}) }
      const addedMeme = await fetch('https://hack-meme-gen.herokuapp.com/meme/', options);
      const added = await addedMeme.json();
      navigate(`/view/${added._id}`);
    } catch (error) {
      console.error(error);
    }
  }

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
