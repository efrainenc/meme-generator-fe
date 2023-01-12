import React from 'react'
import { useState, useEffect } from "react"

const Memes = () => {

  // State to refresh page.
  const [refreshPage, setRefreshPage] = useState(false)
  const [memeState, setMemeState] = useState({})

  const memeURL = `https://meme-gen-hack.herokuapp.com/`

  // Function that refreshes the state, thus re rendering the useEffect.
  const refreshPageFunction = () => 
  {
    setRefreshPage(current => !current)
    setTimeout(function() 
    {
      setRefreshPage(current => !current)
    }, 1000);
  }

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

  // Event handler to POST a post with newForm State input.
  // const createMeme= async(e)=>
  // {
  //   e.preventDefault()
  //   // setting currentState variable as newForm state input after submit.
  //   const currentState = {...newForm}

  //   try{
  //       // Specifying request method , headers, Content-Type.
  //       const requestOptions = {
  //           method: "POST", 
  //           headers: {
  //               "Content-Type": "application/json"},
  //           body: JSON.stringify(currentState)
  //       } 
  //       // post fetch.
  //       const response = await fetch(memeURL, requestOptions);

  //       // Parse the data from the response into JS (from JSON).
  //       const createdMeme = await response.json()
  //       // Update local state with response (json from be).
  //       setMemeState([...memeState, createdMeme])
  //       // Reset newForm state so that our form empties out.
  //       setNewForm({
  //           image: "",
  //           title: "",
  //       })
  //   }catch(err){
  //       console.log(err)
  //   }
  // }


  useEffect(()=>{getMemes();}, [])
  return (
    <>
      {memeState?.map((memeMap, memeMapKey) =>
        {
        <div key={memeMapKey} className='memes'>
          <img src={memeMap.image} />
        </div>
        })
      }
    </>
  )
}

export default Memes