import React, { useContext } from 'react';
import { AppContext } from './Home';

const Box4 = () => {

  const appData = useContext(AppContext)

  return (
    <div className='box4'>
      Box4
      <h3>{appData.data}</h3>
      <p>{appData.name.name}</p>
      <p>{appData.name.age}</p>
    </div>
  )
}

export default Box4
