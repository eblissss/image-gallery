import React from 'react'
import Masonry from 'react-masonry-css'
import Image from './Image'

const images = [
    "https://i.imgur.com/oFDSSZK.jpeg",
    "https://i.imgur.com/bvIEbDP.jpeg",
    "https://i.imgur.com/Nd0ZZRb.jpeg",
    "https://i.imgur.com/9qsDEqs.jpeg",
    "https://i.imgur.com/rZMEo0u.jpeg",
    "https://i.imgur.com/0ogkTp7.jpeg",
    "https://i.imgur.com/humqenh.png"
]

export default function Grid() {

  return (
    <Masonry
        breakpointCols={3}
        className="image-grid"
        columnClassName="image-grid-col"
    >
        {images.map((img) => (<Image image={img}></Image>))}
    </Masonry>
  )
}