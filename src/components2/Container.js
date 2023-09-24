import React, { useState } from 'react';
import Input from '../components2/Input';
import Records from '../components2/Records';
import './styles.css'

const Container = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [data, setData] = useState([]);

  function add() {
    if(name === "" || email === ""){
      return alert("fill the box");
    }
    
    const newItem = {
      id: new Date().getTime(),
      name: name,
      email: email,
      status: true
    };

    setData((prevData) => [...prevData, newItem]);

    setName('');
    setEmail('')
  }

  function handleDelete(id) {
    setData((prevData) => prevData.filter((item) => item.id !== id));
  }

  return (
    <div className='container'>
      <Input add={add} setName={setName} setEmail={setEmail} 
      name={name} email={email}/>
      <Records data={data} onDelete={handleDelete} />
    </div>
  );
}

export default Container;
