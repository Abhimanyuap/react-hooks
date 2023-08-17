import React, { useCallback, useState } from 'react'
import Child from './Child'

const Parent = () => {

    const [increment, setIncrement] = useState(0);
    const [counterTwo, setCounterTwo] = useState(0);

    const handleIncrement = () => {
        setIncrement(increment+1);
    }

    const handleCounter = useCallback(() => {
        setIncrement(increment+1);
    },[counterTwo])

  return (
    <div>
        <Child counterTwo = {counterTwo} handleCounter = {handleCounter}/>
      <button onClick={handleIncrement}>Increment {increment}</button>
    </div>
  )
}

export default Parent
