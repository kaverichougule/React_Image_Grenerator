// import React from "react";
import "./Body.css";
// function Body(props) {
//     function HandleClick(){
//         props.setCount((prev)=>prev+1);
//     }
//   return (
//     <div className="container">
//       <div className="wrapper">
//         <div className="textInput">
//           <input type="text" value={props.inputText} className="InputText" onChange={((e)=>{
//             props.setInputText(e.target.value);
//           })} />
//           <button onClick={HandleClick}>Generate</button>
//         </div>
//         </div>  
//         <div>
//           <img src={props.imageurl} alt="Generated Img" />
//         </div>
//     </div>
//   );
// }

// export default Body;

import React, { useEffect,useState } from 'react';
import axios from 'axios';
function Body(props) {
  
  const [inputText, setInputText] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [submitted, setSubmitted] = useState(0);
  const API_TOKEN = "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"; 

  useEffect(() => {
    const fetchData = async ()=> {
      axios
        .post(
          "https://api-inference.huggingface.co/models/prompthero/openjourney-v4",
          {
            inputs: inputText,
          },
          {
            headers: {
              Authorization: `Bearer ${API_TOKEN}`,
            },
            responseType: "blob", // Set responseType to 'blob' to get binary data
          }
        )
        .then((response) => {
          const imageUrl = URL.createObjectURL(response.data);
          setImageURL(imageUrl);
        })
        .catch((error) => {
          console.error("Error generating image:", error);
        });
    }
    fetchData();
  }, [submitted]);

  const callApi = (e)=>{
    e.preventDefault();
    setImageURL("");
    if (inputText === "") return;
    setSubmitted(prev => prev + 1);
  }
  return (
    <div className="App">
      <h1 className="heading">Image Generation App</h1>
      <div className="formContainer">
        <form onSubmit={callApi}>
          <input
            type="text"
            placeholder="Enter text to generate image..."
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            className="inputBox"
          />
          <button className="submit">
            Generate Image <i class="fa-solid fa-circle-down"></i>
          </button>
        </form>
      </div>
      {imageURL !== "" ? (
        <div className="imageContainer">
          <img src={imageURL} alt="Generated" className="w-full" />
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default Body;