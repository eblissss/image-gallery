import React from 'react'
import { imageData } from '../App'

function Image({image}: {image: imageData}) {
  return (
    <div className="grid-div">
        <img src={image.link} alt="" className="grid-img"/>
        <div className="ImgTitleDiv">
          <h3 className="ImgTitle">{image.title}</h3>
        </div>
    </div>
  )
}

export default Image