import React from 'react'
import { useState, useEffect } from "react"

// Component to render all memes on database
const Memes = () => {

  // setting fetched memes to state to display
  const [memeState, setMemeState] = useState({})

  // url to memes db
  const memeURL = `https://hack-a-meme.herokuapp.com/meme`

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

  // gets all memes on page load
  useEffect(()=>{getMemes();}, [])

  return (
    <>
      {memeState?.map((memeMap, memeMapKey) =>
        {
          console.log(memeMap)
        // <div key={memeMapKey} className='memes'>
        //   <img src={memeMap.image} />
        // </div>
        })
      }
    </>
  )
}

export default Memes