import React from 'react'
import { useState, useEffect } from "react"

const Memes = () => {

  const [memeState, setMemeState] = useState({})

  const memeURL = `https://meme-generator.herokuapp.com/`

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


  useEffect(()=>{getMemes();}, [])
  return (
    <div>Memes</div>
  )
}

export default Memes