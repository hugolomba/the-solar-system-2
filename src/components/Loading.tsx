import React from "react";
import loader from "../assets/img/loader5.gif"

const LoadingSpinner: React.FC = () => {
  return (
    <div className="">
        
        <img src={loader} alt="Loading..." className="w-full h-full" />
     
    </div>
  );
};

export default LoadingSpinner;