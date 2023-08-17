import React from 'react'
import Header from './Header';
import './styles.css'
import Employees from './Employees';
import { Router } from 'react-router-dom';

const Container = () => {


  return (
    <Router>
    <div className='container'>
        <Header />
        <Employees/>
    </div>
    </Router>
  )
}

export default Container
