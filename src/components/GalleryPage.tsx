import { useState, useEffect } from "react";
import Loading from "./Loading"
import nasaLogo from "../assets/img/nasa-logo.png";
import axios from "axios";
import { AiFillCloseCircle } from "react-icons/ai";

import { RowsPhotoAlbum, ColumnsPhotoAlbum } from "react-photo-album";
import "react-photo-album/rows.css";

const GalleryPage = ({ actualBody, clickHandler }) => {
  const [actualBodyGallery, setActualBodyGallery] = useState(null);
  const [actualBodyImages, setActualBodyImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);


  

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(
        `https://images-api.nasa.gov/search?q=${
          actualBody.name}&media_type=image`
      )
      .then((response) => {
        setActualBodyGallery(response.data);
        console.log("actualBodyGallery", response.data);
      })
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false));
    // .finally(() => setActualBodyImages(images));
  }, [actualBody]);

  let imgArr = [];

  actualBodyGallery && actualBodyGallery?.collection.items.map((item) => { 
    imgArr.push({
        src: item.links[0].href,
        width: 800,
        height: 600
        // original: item.links[0].href,
        // caption: item.data[0].title,
        // thumbnailCaption: item.data[0].title,
      })
    })

  return (
    <div className="gallery-container-bg absolute text-white top-0 left-0 w-full h-full flex justify-center items-center bg-black/95 z-50">


  <div className={`gallery-container w-5xl h-3/4 p-4 relative gap-4 flex flex-col bg-gradient-to-t from-blue-400/30 to-blue-400/10 border border-blue-400 rounded-md animate-[entrance_0.2s_0.3s_backwards]`}>
  <AiFillCloseCircle className="right-4 top-2 absolute text-3xl" onClick={clickHandler} />

  <h2 className={`actualBody${actualBody.id} text-center mb-4`}>NASA Image Gallery of {actualBody.name}</h2>
  <div className="gallery-images overflow-scroll flex-1 flex flex-row flex-wrap justify-center gap-2 items-center text-center">
    {isLoading ? <Loading /> : imgArr.map((img) => <img className="w-50" src={img.src} alt="nasa-img" />)}
  </div>
</div>




      <div className="gallery-reference absolute bottom-0 flex flex-row justify-center items-center gap-4">
        <span>
          Provide by{" "}
          <a href="https://api.nasa.gov/" target="_blank">
            NASA Image and Video Library
          </a>
        </span>
        <img className="w-16" src={nasaLogo} alt="nasa-logo" />
      </div>


    </div>
  );
};

export default GalleryPage;
