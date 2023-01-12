import React from 'react'
import { useState, useEffect } from "react"
import Choices from '../Images/Choices'

const AddForm = () => {

  // State to refresh page.
  const [refreshPage, setRefreshPage] = useState(false)
  const [newForm, setNewForm] = useState({
    top_line: "",
    bottom_line: "",
  });

  // setting fetched memes to state to post
  const [memeState, setMemeState] = useState({})

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

  // Event handler to setNewForm state to inputs when inputs are changed.
  const handleChange= (e)=>
  {
    setNewForm({ ...newForm, [e.target.name]: e.target.value });
  };

  // call this onClick when u want to post
  const refreshPageFunction = () => 
  {
    setRefreshPage(current => !current)
    setTimeout(function() 
    {
      setRefreshPage(current => !current)
    }, 1000);
  }

  // Event handler to POST a meme with newForm State input.
  const createMeme= async(e)=>
  {
    e.preventDefault()
    // setting currentState variable as newForm state input after submit.
    const currentState = {...newForm}

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
        setNewForm({
          top_line: "",
          bottom_line: "",
        })
    }catch(err){
        console.log(err)
    }
  }


  // fetches memes on refresh
  useEffect(()=>{getMemes();}, [refreshPage])

  return (
    <div className="meme-gen-container">
      <Choices />
    </div>
  )
}

export default AddForm
