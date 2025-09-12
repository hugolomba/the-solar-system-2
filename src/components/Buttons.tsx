// import "./Buttons.css";
// import { useState } from "react";
// import Peso from "./Peso";
// import Age from "./Age";
// import GalleryPage from "./GalleryPage";


import { useState } from "react";
import GalleryPage from "./GalleryPage";
import Conversion from "./Conversion";





const Buttons = ({ actualBody, border }) => {
  const [showWeight, setShowWeight] = useState(false);
  const [showAge, setShowAge] = useState(false);
  const [showGallery, setShowGallery] = useState(false);

  console.log(actualBody);

  const clickHandler = (e) => {
    if (e.target.name === "weigthButton") setShowWeight(!showWeight);
    if (e.target.name === "ageButton") setShowAge(!showAge);
    if (e.target.name === "galleryButton") setShowGallery(!showGallery);
    if (!e.target.name) {
      setShowWeight(false);
      setShowAge(false);
      setShowGallery(false);
    }
    window.scrollTo(0, 0);
  };



console.log(">>>>>>", actualBody.type === "Galaxy" && actualBody.name === "Milky Way")

  return (
    <div className={`flex flex-col gap-4 justify-center-safe h-full w-full`}>
      {actualBody.name !== "Terra" ? (
        <button className={`text-white ${border} animate-[entrance_0.2s_0.1s_backwards] hover:bg-blue-400/50 focus:bg-blue-400/50 p-1`} name="weigthButton" onClick={clickHandler}>
          How much would you weigh here?
        </button>
      ) : (
        ""
      )}

      {actualBody.name === "Terra" || actualBody.name === "Sol" ? (
        ""
      ) : (
        <button className={`text-white ${border} animate-[entrance_0.2s_0.1s_backwards] hover:bg-blue-400/50 focus:bg-blue-400/50 p-1`} name="ageButton" onClick={clickHandler}>
          How old would you be here?
        </button>
      )}

      <button className={`text-white ${border} animate-[entrance_0.2s_0.1s_backwards] hover:bg-blue-400/50 focus:bg-blue-400/50 p-1`} name="galleryButton" onClick={clickHandler}>
        NASA Image Gallery
      </button>

      {actualBody.features && showWeight ? (
        <Conversion clickHandler={clickHandler} actualBody={actualBody} type="weight" />
      ) : (
        ""
      )}

        {actualBody.features && showAge ? (
        <Conversion clickHandler={clickHandler} actualBody={actualBody} type="age" />
      ) : (
        ""
      )}

      {actualBody.features && showGallery ? (
        <GalleryPage clickHandler={clickHandler} actualBody={actualBody} />
      ) : (
        ""
      )}

      {/* {actualBody.features && showWeight ? (
        <Peso clickHandler={clickHandler} actualBody={actualBody} />
      ) : (
        ""
      )}

      {actualBody.features && showAge ? (
        <Age clickHandler={clickHandler} actualBody={actualBody} />
      ) : (
        ""
      )}

      {actualBody.features && showGallery ? (
        <GalleryPage clickHandler={clickHandler} actualBody={actualBody} />
      ) : (
        ""
      )} */}
    </div>
  );
};

export default Buttons;
