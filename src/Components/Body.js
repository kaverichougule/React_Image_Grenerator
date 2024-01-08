import React from "react";
import "./Body.css";
function Body(props) {
    function HandleClick(){
        props.setCount((prev)=>prev+1);
    }
  return (
    <div className="container">
      <div className="wrapper">
        <div className="textInput">
          <input type="text" value={props.inputText} className="InputText" onChange={((e)=>{
            props.setInputText(e.target.value);
          })} />
          <button onClick={HandleClick}>Generate</button>
        </div>
        </div>  
        <div>
          <img src={props.imageurl} alt="Generated Img" />
        </div>
    </div>
  );
}

export default Body;
