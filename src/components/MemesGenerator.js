import React, { useEffect, useState } from "react";
import Axios from "axios";
import "../components/MemeStyle.css";

export default function Memes() {
  const [picture, setPicture] = useState();
  const [firstText, setFirstText] = useState("");
  const [secondText, setSecondText] = useState("");
  const [thirdText, setThirdText] = useState("");
  const [fourthText, setFourthText] = useState("");

  useEffect(() => {
    fetchPicture();
  }, []);

  // To have a random picture out of 100
  const randomNumber = Math.floor(Math.random() * 100);

  const fetchPicture = async () => {
    await Axios.get("https://api.imgflip.com/get_memes")
      .then((response) =>
        setPicture(response.data.data.memes[randomNumber].url)
      )
      .catch((error) => console.log(error));
  };
 // Control purposes if states working
 // console.log(firstText);
 // console.log(secondText);
 // console.log(thirdText);
 // console.log(fourthText);
  return (
    <div className="App">
      <h1>Meme Generator</h1>
      <p className="instruction">Instruction: Texts are draggable</p>
      <div className="inputContent">
        <input
          placeholder="Drag First Text"
          style={{ margin: "10px" }}
          onChange={(e) => setFirstText(e.target.value.toUpperCase())}
          value={firstText}
        />
        <input
          placeholder="Drag Second Text"
          style={{ margin: "10px" }}
          onChange={(e) => setSecondText(e.target.value.toUpperCase())}
          value={secondText}
        />
        <input
          placeholder="Drag Third Text"
          style={{ margin: "10px" }}
          onChange={(e) => setThirdText(e.target.value.toUpperCase())}
          value={thirdText}
        />
        <input
          placeholder="Drag Fourth Text"
          style={{ margin: "10px" }}
          onChange={(e) => setFourthText(e.target.value.toUpperCase())}
          value={fourthText}
        />
      </div>
      <button className="generateBtn" onClick={fetchPicture}>Generate New Meme</button>

      <div>
          <p>{firstText}</p>
      </div>
      <div>
          <p>{secondText}</p>
      </div>

      <div className="generatedPic">
        {picture && <img className="memePic" src={picture} />}
      </div>

      <div>
          <p>{thirdText}</p>
      </div>
      <div>
          <p>{fourthText}</p>
      </div>
    </div>
  );
}
