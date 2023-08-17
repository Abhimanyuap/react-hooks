import React from 'react'

const Input = ({setName,setEmail,add,name,email}) => {

    
  return (
    <div className='input'>
        <input value={name} type='text' onChange={ (e)=> setName(e.target.value) } placeholder='name' />
        {/* <input required type='date' onChange={ (e) => setDate(e.target.value)}  placeholder=''/> */}
        <input value={email} type='email' onChange={ (e)=> setEmail(e.target.value) } placeholder='email'/>
        <button  onClick={add}>Add</button>
    </div>
  )
}

export default Input
