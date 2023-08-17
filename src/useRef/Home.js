
// useRef is mutable and does not cause re-render

import React, { useState,useEffect, useRef } from 'react';
import './styles.css';
import Header from './Header';

const Home = () => {

    const [input, setInput] = useState('');

    // const prevState = useRef("");

    const inputField = useRef();

    // useEffect(()=>{
    //     prevState.current = input
    // },[input]);

    // inputField.current.style.border = "2px solid red"

    const handleChange = () => {
        // inputField.current.focus();
        // inputField.current.value="Abhimanyu";
         setInput(inputField.current.value);
    }


  return (
    <div className='home'>
      <Header />
      <h3>Type</h3>
      <input ref={inputField}  />   {/*value={input} onChange={(e)=>setInput(e.target.value)*/}
      <button onClick={handleChange}>Click</button>
       <p>{input}</p>
      {/* <p>prevState was {prevState.current}</p> */}

    </div>
  )
}

export default Home
