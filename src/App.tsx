import React, { useState, useEffect, InputHTMLAttributes } from 'react';
import Search from './components/Search';
import Grid from './components/Grid';
import Header from './components/Header';
import "./style.css";

const dataLink: string = "http://localhost:3000/images-data.json"

export interface imageData {
  title: string,
  tags: string[],
  link: string
}
const blankData: imageData[] = []

function App() {

  const [images, setImages] = useState(blankData)
  const [shownImages, setShownImages] = useState(blankData)

  useEffect(() => {
    fetch(dataLink)
    .then((res) => {
      if (!res.ok) {
        console.error("Response not ok")
      }
      return res.json()
    })
    .then((blob) => {
      setImages(blob);
      setShownImages(blob);
    })
    .catch((err) => {
      console.error("problem with fetch", err)
    })
  }, [])

  const getSearchResults = () => {
    const searchText = (document.getElementById("searchInput") as HTMLInputElement).value;
    if (searchText === "") {
      setShownImages(images)
      return
    }

    const searchTerms = searchText.split(" ")

    const tempArr = []
    for (let i = 0; i < images.length; i++) {
      if (images[i].tags.some(v => searchTerms.includes(v))) {
        tempArr.push(images[i]);
      }
    }
    setShownImages(tempArr);
  }

  return (
    <div className="Background">
      <Header />
      <Search search={getSearchResults} />
      <Grid images={shownImages} />
      
    </div>
  );

}

export default App;