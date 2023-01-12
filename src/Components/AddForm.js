import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const AddForm = (props) => {
    let topOne = 0, topTwo = 0, leftOne = 0, leftTwo = 0;

    if (props.data) {
    topOne = props.image.text_one_location ? props.image.text_one_location.top : 0;
    leftOne = props.image.text_one_location ? props.image.text_one_location.left : 0;

    if (props.image.text_two_location) {
      topTwo = props.image.text_one_location ? props.image.text_two_location.top : 0;
      leftTwo = props.image.text_two_location ? props.image.text_two_location.left : 0;
    }
  }

  const image = props.image && props.image.image;
  return (
    <div className="meme-gen-container">
      <div className="w-50 p-3">
        <div className="meme-photo" style={{backgroundImage: `url(${image})`}}>
          {!image && <h2>Select a meme image</h2>}
          <div className="text-box" style={{top: `${topOne}px`, left: `${leftOne}px`, color: props.form.color_one}}>
            {props.form.text_one}
          </div>
          <div className="text-box" style={{top: `${topTwo}px`, left: `${leftTwo}px`, color: props.form.color_two}}>
            {props.form.text_two}
          </div>
        </div>
      </div>
      <div className="w-50 pe-3">
        <div className="pt-3"><button>Upload new template</button></div>
        <div className="d-flex flex-column align-items-center mt-3 pe-3">
          <div className="all-memes">
            {
              props.data && props.data.map((img, idx) => {
                return (
                  <Link to={`/add/${img._id}`} key={idx}><img src={img.image} /></Link>
                )
              })
            }
          </div>
          <span style={{fontSize:'10pt',color:'#717171'}}>scroll left and right for more images</span>
        </div>
        <div className="text-input mt-4">
          <div className="text-input-left">
            <textarea type="text" 
                      placeholder="Top text here ..." 
                      name="text_one" 
                      value={props.form.text_one} 
                      onChange={props.handleChange}
            ></textarea></div>
          <div className="text-input-right">
            <button onClick={props.handleChange} name="color_one" value="white" className="white-color">White</button>
            <button onClick={props.handleChange} name="color_one" value="black" className="black-color">Black</button>
          </div>
        </div>
        <div className="text-input mt-3">
          <div className="text-input-left">
            <textarea type="text" 
                      placeholder="Bottom text here ..." 
                      name="text_two" 
                      value={props.form.text_two} 
                      onChange={props.handleChange}
            ></textarea></div>
          <div className="text-input-right">
            <button onClick={props.handleChange} name="color_two" value="white" className="white-color">White</button>
            <button onClick={props.handleChange} name="color_two" value="black" className="black-color">Black</button>
          </div>
        </div>
        <div className="mt-3">
          <button className="submit-btn"
                  onClick={props.handleSubmit}>Generate</button>
          <button className="ms-3" 
                  style={{borderRadius:'10px',padding:'10px'}} 
                  onClick={() => props.setForm(props.initialState)}
          >Reset</button>
        </div>
      </div>
    </div>
  )
}

export default AddForm
