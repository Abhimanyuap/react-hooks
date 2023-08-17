
import React, { useEffect, useState } from 'react';
import Header from './Header';
import './styles.css';
import useFetch from './useFetch';

const Home = () => {

   const [item] = useFetch('https://hub.dummyapis.com/employee?noofRecords=50&idStarts=1001')
   
  return (
    <div className='home'>
      <Header />
      <div className='items'>
        {item.map((e,i) => {
            return( 
            <div key={i}>
                 <img src={e.imageUrl} />
                 <p>{`${e.firstName} ${e.lastName}`}</p>
                 <p>{e.age}</p>
            </div>
            )
        })}
      </div>
    </div>
  )
}

export default Home
