import React from 'react'

function Image({image}: {image: string}) {
  return (
    <div className="grid-div">
        <img src={image} alt="" className="grid-img"/>
    </div>
  )
}

export default Image