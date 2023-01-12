import React from 'react'

const AddForm = () => {
  return (
    <div className="meme-gen-container">
      <div className="w-50 p-3">
        <div className="meme-photo" style={{backgroundImage: `url('https://imgflip.com/s/meme/Bernie-I-Am-Once-Again-Asking-For-Your-Support.jpg')`}}>
          <div className="text-box-1">
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
        <div className="text-input">
          <div className="text-input-left"><textarea type="text" placeholder="Top text here ..."></textarea></div>
          <div className="text-input-right">right</div>
        </div>
        <div className="text-input mt-3">
          <div className="text-input-left"><textarea type="text" placeholder="Bottom text here ..."></textarea></div>
          <div className="text-input-right">right</div>
        </div>
        <div className="mt-3">
          <button className="submit-btn">Generate</button>
          <button className="ms-3" style={{borderRadius:'10px',padding:'10px'}}>Reset</button>
        </div>
      </div>
    </div>
  )
}

export default AddForm
