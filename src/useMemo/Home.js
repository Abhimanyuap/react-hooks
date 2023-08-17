// it improves performance of code

import React, { useState,useMemo } from 'react';
import './styles.css'
import Header from './Header';

const Home = () => {

    const [name, setName] = useState('');
    const [count, setCount] = useState(0);

   const timeTaking = (num) => {
    for(let i = 0 ; i < 100000000 ; i++){}
    return num;
   }

   const response = useMemo(() => {
    return timeTaking (count);
  },[count]);


  return (
    <div className='home'>
      <Header />

      <button onClick={() => setCount(count+1)}>Increment</button>
      <h1>Count : {response}</h1>
      <input onChange={(event) => setName(event.target.value)}/>
      <h1>Name : {name}</h1>
    </div>
  )
}

export default Home
