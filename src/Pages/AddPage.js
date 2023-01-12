import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router';
import AddForm from '../components/AddForm'

const AddPage = () => {

  const { imageId } = useParams();
  const navigate = useNavigate();
  const initialState = {text_one: '', text_two: '', imageId: imageId};
  const [form, setForm] = useState(initialState);

  // setting fetched images to state to display
  const [imageState, setImageState] = useState({})
  // setting fetched memes to state to post
  const [memeState, setMemeState] = useState({})

  // url to images db for display
  const imageURL = `https://hack-a-meme.herokuapp.com/image/`
  // url to memes db for post
  const memeURL = `https://hack-a-meme.herokuapp.com/meme/`
  
  // fetch to get memes
  const getMemes= async()=>
  {
    try
    {
      const res= await fetch(memeURL)
      const allMemes= await res.json()
      setMemeState(allMemes)
    }catch(err)
    {
      console.log(err)
    }
  }

  // fetch to get memes
  const fetchImage= async()=>
  {
    try
    {
      const res= await fetch(imageURL)
      const allImages= await res.json()
      setImageState(allImages)
    }catch(err)
    {
      console.log(err)
    }
  }
  
  const handleChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value});
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    // setting currentState variable as newForm state input after submit.
    const currentState = {...form}

    try{
        // Specifying request method , headers, Content-Type.
        const requestOptions = {
            method: "POST", 
            headers: {
                "Content-Type": "application/json"},
            body: JSON.stringify(currentState)
        } 
        // post fetch.
        const response = await fetch(memeURL, requestOptions);

        // Parse the data from the response into JS (from JSON).
        const createdMeme = await response.json()
        // Update local state with response (json from be).
        setMemeState([...memeState, createdMeme])
        // Reset newForm state so that our form empties out.
        setForm({
          text_one: "",
          text_two: "",
        })
        navigate(-1)
    }catch(err){
        console.log(err)
    }
  }

  const src = 'https://imgflip.com/s/meme/Bernie-I-Am-Once-Again-Asking-For-Your-Support.jpg',
        top = 100, left = 200;


  // gets all memes on page load
  useEffect(()=>{getMemes(); fetchImage();}, [])

  console.log(imageState)
  console.log(memeState)

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
