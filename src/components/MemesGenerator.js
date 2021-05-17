import React, { useEffect, useState } from "react";
import Axios from "axios";
import "../components/MemeStyle.css";

export default function Memes() {
  const [picture, setPicture] = useState();

  useEffect(() => {
    fetchPicture();
  }, []);

  const randomNumber = Math.floor(Math.random() * 100);

  const fetchPicture = async () => {
    await Axios.get("https://api.imgflip.com/get_memes")
      .then((response) =>
        setPicture(response.data.data.memes[randomNumber].url)
      )
      .catch((error) => console.log(error));
  };

  return (
    <div className="App">
      <h1>Meme Generator</h1>
      <input></input>
      <button onClick={fetchPicture}>Generate</button>

      <div className="generatedPic">
        {picture && <img className="memePic" src={picture} />}
      </div>
    </div>
  );
}
