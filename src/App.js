import { useState,useEffect } from 'react';
import axios from 'axios'
import './App.css';
import Body from "./Components/Body";
function App() {
  document.title="Image Generator"
  const [inputText, setInputText] = useState('');
  const [imageURL, setImageURL] = useState('');
  let [count,setCount]=useState(0);
  const API_TOKEN = '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'; // Replace with your actual API token

  useEffect(() => {
   function fetchData(){
      axios
        .post(
          'https://api-inference.huggingface.co/models/prompthero/openjourney-v4',
          {
            inputs: inputText,
          },
          {
            headers: {
              Authorization: `Bearer ${API_TOKEN}`,
            },
            responseType: 'blob', // Set responseType to 'blob' to get binary data
          }
        )
        .then((response) => {
          const imageUrl = URL.createObjectURL(response.data);
          setImageURL(imageUrl);
        })
        .catch((error) => {
          console.error('Error generating image:', error);
        });
    }
    fetchData()
  }, [count]);
  
  return (
    <div className="App">
      <Body setCount={setCount} imageurl={imageURL} inputText={inputText} setInputText={setInputText} />
    </div>
  );
}

export default App;
