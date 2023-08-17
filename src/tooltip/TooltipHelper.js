import React from 'react'

const TooltipHelper = () => {

    function handleClick(){
        console.log('clicked')
    }

  return (
    <div className='tooltiphelper'>
        <section>
        <button onMouseOver={handleClick}>Click to get tooltip</button>
        </section>
        <section>
            
        </section>
    </div>
  )
}

export default TooltipHelper
