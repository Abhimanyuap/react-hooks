
import Header from './Header';
import './styles.css'
import React, { useReducer } from 'react';

const reducer = (state, action) => {
  //  if(action.type == "INC"){
  //     return state+2;
  //  }else if(action.type == "DEC"){
  //   return state-2;
  //  }else if(action.type == "MUL"){
  //   return state*2;
  //  }else if(action.type == "DIV"){
  //   return state/2;
  //  }

  switch(action.type){
    case "INC" : return state+2;
    break;
    case "DEC" : return state-2;
    break;
    case "MUL" : return state*2;
    break;
    case "DIV" : return state/2;
    default: return state;

  }

  //  return state

}

const Home = () => {

const [state, dispatch] = useReducer(reducer, 0)

  return (
    <div className='home'>
      <Header />
      <h2>{state}</h2>
      <button onClick={() => dispatch({type:"INC"})}>Increment</button>
      <button onClick={() => dispatch({type:"DEC"})}>Decrement</button>
      <button onClick={() => dispatch({type:"MUL"})}>Multiply</button>
      <button onClick={() => dispatch({type:"DIV"})}>Multiply</button>
    </div>
  )
}

export default Home
