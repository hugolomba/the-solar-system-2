import { useState } from "react";
import GalleryPage from "./GalleryPage";
import Conversion from "./Conversion";
import type { BaseBody } from "@/types/types";





const Buttons = ({ actualBody, border }: { actualBody: BaseBody, border: string }) => {
  const [showWeight, setShowWeight] = useState(false);
  const [showAge, setShowAge] = useState(false);
  const [showGallery, setShowGallery] = useState(false);

  console.log(actualBody);

const clickHandler = (
  e: React.MouseEvent<HTMLButtonElement | HTMLDivElement | SVGElement>
) => {
  if (e.currentTarget instanceof HTMLButtonElement) {
    if (e.currentTarget.name === "weightButton") setShowWeight(!showWeight);
    if (e.currentTarget.name === "ageButton") setShowAge(!showAge);
    if (e.currentTarget.name === "galleryButton") setShowGallery(!showGallery);
  }

  if (e.currentTarget instanceof SVGElement) {
    setShowWeight(false);
    setShowAge(false);
    setShowGallery(false);
  }

  window.scrollTo(0, 0);
};



console.log(">>>>>>", actualBody.type === "Galaxy" && actualBody.name === "Milky Way")

  return (
    <div className={`flex flex-col gap-4 justify-center-safe h-full w-full`}>
      {actualBody.name === "Earth" || actualBody.type === "Galaxy" ? (
       ""
      ) : (
         <button className={`text-white ${border}  hover:bg-blue-400/50 focus:bg-blue-400/50 p-1`} name="weightButton" onClick={clickHandler}>
          How much would you weigh here?
        </button>
      )}

      {actualBody.name === "Earth" || actualBody.name === "Sun" || actualBody.type === "Galaxy" ? (
        ""
      ) : (
        <button className={`text-white ${border}  hover:bg-blue-400/50 focus:bg-blue-400/50 p-1`} name="ageButton" onClick={clickHandler}>
          How old would you be here?
        </button>
      )}

      <button className={`text-white ${border}  hover:bg-blue-400/50 focus:bg-blue-400/50 p-1`} name="galleryButton" onClick={clickHandler}>
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

 
    </div>
  );
};

export default Buttons;
