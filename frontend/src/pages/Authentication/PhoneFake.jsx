// TODO TEST FUNCTION AND DELETE PAGE

import React from 'react'

const PhoneFake = (props ) => {
  return (
    <div>
      {props.arr && props.arr.map(item=>(<span>{item.label}</span>))
      }
    </div>
  )
}

export default PhoneFake
