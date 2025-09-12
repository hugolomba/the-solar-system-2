import { useState, useEffect } from "react";
import Loading from "./Loading";
import nasaLogo from "../assets/img/nasa-logo.png";
import axios from "axios";
import { AiFillCloseCircle, AiOutlineLeft, AiOutlineRight, AiOutlineClose } from "react-icons/ai";

const GalleryPage = ({ actualBody, clickHandler }) => {
  const [actualBodyGallery, setActualBodyGallery] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null); // índice da imagem aberta
  
  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`https://images-api.nasa.gov/search?q=${actualBody.name}&media_type=image`)
      .then((response) => {
        setActualBodyGallery(response.data);
      })
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false));
  }, [actualBody]);

  const images = actualBodyGallery?.collection.items.map((item) => item.links[0].href) || [];

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  const prevImage = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + images.length) % images.length);
    }
  };
  const nextImage = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % images.length);
    }
  };

  return (
    <div className="gallery-container-bg absolute text-white top-0 left-0 w-full h-full flex justify-center items-center bg-black/95 z-50">
      <div className="gallery-container w-5xl h-3/4 p-4 relative gap-4 flex flex-col bg-gradient-to-t from-blue-400/30 to-blue-400/10 border border-blue-400 rounded-md max-md:m-4">
        {lightboxIndex === null && <AiFillCloseCircle className="right-4 top-2 absolute text-3xl" onClick={clickHandler} />}

      

       
          {lightboxIndex === null && 
          <>
            <h2 className={`actualBody${actualBody.id} text-center mb-4`}>
          NASA Image Gallery of {actualBody.name}
        </h2>
          <div className="gallery-images w-full h-full overflow-scroll flex-1 flex flex-row flex-wrap justify-center gap-2 items-center text-center">
            { isLoading ? (
              <Loading />
            ) : (
              images.map((src, index) => (
                <img
                  key={index}
                  className="w-50 cursor-pointer"
                  onClick={() => openLightbox(index)}
                  src={src}
                alt="nasa-img"
              />
            )))}
          </div>
          </>
          }

      {lightboxIndex !== null && actualBodyGallery && ( 
  
  <div className="lightbox h-full flex flex-col justify-center items-center gap-4 overflow-hidden relative">
       <button onClick={closeLightbox} className=" text-3xl text-red-500 top-0 right-0 z-20 absolute">
        <AiOutlineClose />
      </button>
    <img
      className=" relative"
      src={images[lightboxIndex]}
      alt="nasa-img"
    />
    <div className="flex h-full justify-between w-full max-w-5xl px-4 mt-2 absolute">
      <button onClick={prevImage} className="text-3xl text-white">
        <AiOutlineLeft />
      </button>
   
      <button onClick={nextImage} className="text-3xl text-white">
        <AiOutlineRight />
      </button>
    </div>
  </div>
        )}

        {/* <div className="gallery-reference absolute bottom-0 flex flex-row justify-center items-center gap-4">
          <span>
            Provide by{" "}
            <a href="https://api.nasa.gov/" target="_blank">
              NASA Image and Video Library
            </a>
          </span>
          <img className="w-16" src={nasaLogo} alt="nasa-logo" />
        </div> */}
      </div>
    </div>
  );
};

export default GalleryPage;