import React, { createContext, useState } from 'react'
import Box1 from './Box1';

const AppContext = createContext(); 

const Home = () => {

    const [data,setData] = useState('hello sir');
    const [name,setName] = useState({name:'Abhimanyu Singh',age:24});
   
  return (
    <AppContext.Provider value={{data,name}}>
      <div className='home'>
        <Box1 />
      </div>
    </AppContext.Provider>
  )
}


export default Home;
export {AppContext};