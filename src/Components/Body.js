import React from "react";
import "./Body.css";
function Body(props) {
    function HandleClick(){

    }
  return (
    <div className="container">
      <div className="wrapper">
        <div className="textInput">
          <input type="text" />
          <button onClick={HandleClick}>Generate</button>
        </div>
        
        <div>
          <img src="" alt="Generated Img" />
        </div>
      </div>
      
    </div>
  );
}

export default Body;
