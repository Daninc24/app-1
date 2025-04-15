import React, { useState } from 'react';
import PropTypes from 'prop-types'


export default function Textform(props) {
    const [text, setText] = useState("Enter text here");
    
    
    const handleOnChange = (event) => {
        console.log("On change");
        setText(event.target.value);
    }

    const handleUpClick = () => {
        console.log("upperCase clicked");
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleLowerClick = () => {
        console.log("upperCase clicked");
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleClearClick = () => {
        console.log("upperCase clicked");
        let newText = "";
        setText(newText);
    }
   
    
  return (
    <> 
    <div className='container' >
    <div className="mb-3">
        <h1 className="my-3">{props.heading}</h1>
        <textarea className="form-control" id="exampleFormControlTextarea1" rows="10" value={text} onChange={handleOnChange} style={{color: props.mode === 'dark' ? 'white' : 'black', backgroundColor: props.mode === 'dark' ? 'grey' : 'white'}}></textarea>
    </div>
    <button className="btn btn-primary my-2" onClick={handleUpClick}>Uppercase</button>
    <button className="btn btn-primary my-2 mx-2" onClick={handleLowerClick}>Lowercase</button>
    <button className="btn btn-primary my-2 mx-2" onClick={handleClearClick}>Clear text</button>
    </div>
    <div className="container my-3">
        <h1>Your text summary</h1>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>

    </div>
    
    
    </>
  )
}

Textform.propTypes = {
    heading: PropTypes.string
}

