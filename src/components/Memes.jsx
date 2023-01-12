import React from 'react'
import { useState, useEffect } from "react"

// Component to render all memes on database
const Memes = () => {

  // setting fetched memes to state to display
  const [memeState, setMemeState] = useState({})

  // url to memes db for show
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

  // Loaded Post function
  const loaded = () =>
  {
    // JSX for creating a new post when post is loaded
    return (
      <section className='meme-list'>
        {memeState?.map((memeMap, memeMapKey) =>
          {
            return(
            <div key={memeMapKey} className='memes'>
              <img src={memeMap.image} />
            </div>
          )
          })
        }
      </section>
    )
  };

  // / JSX for creating a new post when post is loading
  const loading = () => (
    <section className="loading">
      <h1>
        Loading...
        <span>
          <img
            className="spinner"
            src="https://freesvg.org/img/1544764567.png"
          />{" "}
        </span>
      </h1>
    </section>
  );

  // gets all memes on page load
  useEffect(()=>{getMemes();}, [])

  return (memeState ? loaded() : loading())
}

export default Memes