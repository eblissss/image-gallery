import React from 'react'
import Masonry from 'react-masonry-css'
import Image from './Image'
import { imageData } from '../App'

// Currently breaks with exactly 2 images

export default function Grid({images}: {images: imageData[]}) {

  return (
    <Masonry
        breakpointCols={3}
        className="image-grid"
        columnClassName="image-grid-col"
    >
        {images.map((img) => (<Image image={img} key={img.link}></Image>))}
    </Masonry>
  )
}