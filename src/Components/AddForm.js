import React from 'react'

const AddForm = (props) => {
  return (
    <div className="meme-gen-container">
      <div className="w-50 p-3">
        <div className="meme-photo" style={{backgroundImage: `url(${props.src})`}}>
          <div className="text-box" style={{top: props.firstTop, left: props.firstLeft}}>
            Text here
          </div>
          <div className="text-box" style={{top: props.secondTop, left: props.secondLeft}}>
            Text here
          </div>
        </div>
      </div>
      <div className="w-50 pe-3">
        <div className="pt-3"><button>Upload new template</button></div>
        <div className="d-flex flex-column align-items-center mt-3 pe-3">
          <div className="all-memes">
            <img src="https://imgflip.com/s/meme/Bernie-I-Am-Once-Again-Asking-For-Your-Support.jpg" />
            <img src="https://imgflip.com/s/meme/Bernie-I-Am-Once-Again-Asking-For-Your-Support.jpg" />
            <img src="https://imgflip.com/s/meme/Bernie-I-Am-Once-Again-Asking-For-Your-Support.jpg" />
            <img src="https://imgflip.com/s/meme/Bernie-I-Am-Once-Again-Asking-For-Your-Support.jpg" />
            <img src="https://imgflip.com/s/meme/Bernie-I-Am-Once-Again-Asking-For-Your-Support.jpg" />
            <img src="https://imgflip.com/s/meme/Bernie-I-Am-Once-Again-Asking-For-Your-Support.jpg" />
            <img src="https://imgflip.com/s/meme/Bernie-I-Am-Once-Again-Asking-For-Your-Support.jpg" />
            <img src="https://imgflip.com/s/meme/Bernie-I-Am-Once-Again-Asking-For-Your-Support.jpg" />
            <img src="https://imgflip.com/s/meme/Bernie-I-Am-Once-Again-Asking-For-Your-Support.jpg" />
            <img src="https://imgflip.com/s/meme/Bernie-I-Am-Once-Again-Asking-For-Your-Support.jpg" />
            <img src="https://imgflip.com/s/meme/Bernie-I-Am-Once-Again-Asking-For-Your-Support.jpg" />
            <img src="https://imgflip.com/s/meme/Bernie-I-Am-Once-Again-Asking-For-Your-Support.jpg" />
            <img src="https://imgflip.com/s/meme/Bernie-I-Am-Once-Again-Asking-For-Your-Support.jpg" />
            <img src="https://imgflip.com/s/meme/Bernie-I-Am-Once-Again-Asking-For-Your-Support.jpg" />
            <img src="https://imgflip.com/s/meme/Bernie-I-Am-Once-Again-Asking-For-Your-Support.jpg" />
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
          <div className="text-input-right"></div>
        </div>
        <div className="text-input mt-3">
          <div className="text-input-left">
            <textarea type="text" 
                      placeholder="Bottom text here ..." 
                      name="text_two" 
                      value={props.form.text_two} 
                      onChange={props.handleChange}
            ></textarea></div>
          <div className="text-input-right"></div>
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
