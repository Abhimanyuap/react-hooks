import React, { memo } from 'react'

const Child = () => {

    console.log("child component re-rendered!")

  return (
    <div>
      Child Component
    </div>
  )
}

export default memo(Child)
