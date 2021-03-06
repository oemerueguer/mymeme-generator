import React, { useEffect, useState } from "react";
import Axios from "axios";
import "../components/MemeStyle.css";
import domtoimage from "dom-to-image";
import Draggable from "react-draggable";

export default function Memes() {
  const [picture, setPicture] = useState();
  const [firstText, setFirstText] = useState("");
  const [secondText, setSecondText] = useState("");
  const [thirdText, setThirdText] = useState("");
  const [fourthText, setFourthText] = useState("");

  useEffect(() => {
    fetchPicture();
  }, []);

  // To have a random picture out of 100 -->>> const randomNumber = Math.floor(Math.random() * 100)
  // --> it is in fetching to produce by every fetching a random number

  const fetchPicture = async () => {
    const randomNumber = Math.floor(Math.random() * 100);
    await Axios.get("https://api.imgflip.com/get_memes")
      .then((response) =>
        setPicture(response.data.data.memes[randomNumber].url)
      )
      .catch((error) => console.log(error));
  };
  const uploadingPicture = (e) => {
    console.log(e);
    setPicture({ file: URL.createObjectURL(e.target.files[0]) }.file);
  };
  const savePicture = () => {
    domtoimage
      .toJpeg(document.getElementById("my-node"), { quality: 0.95 })
      .then((dataUrl) => {
        var link = document.createElement("a");
        link.download = "my-image-name.jpeg";
        link.href = dataUrl;
        link.click();
      });
  };

  // Control purposes if states working
  // console.log(firstText);
  // console.log(secondText);
  // console.log(thirdText);
  // console.log(fourthText);
  return (
    <div className="App">
      <h1 className="title_top">Instruction</h1>
      <p className="instruction">
        Create up to 4 texts and drag them where you want to
      </p>
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
        <input
          style={{ margin: "10px" }}
          type="file"
          accept="image/x-png,image/gif,image/jpeg"
          onChange={uploadingPicture}
        />
      </div>
      <div>
      <button className="generateBtn" onClick={fetchPicture}>
        Generate New Meme
      </button>
      <button onClick={savePicture}>Save Image</button>
      </div>

      <div className="myMeme">
        <div id="my-node">
          <Draggable>
            <div>
              <p className="firstText">{firstText}</p>
            </div>
          </Draggable>
          <Draggable>
            <div>
              <p className="secondText">{secondText}</p>
            </div>
          </Draggable>
          <Draggable>
            <div>
              <p className="thirdText">{thirdText}</p>
            </div>
          </Draggable>
          <Draggable>
            <div>
              <p className="fourthText">{fourthText}</p>
            </div>
          </Draggable>
 
          <div className="generatedPic">
            {picture && (
              <img
                className="memePic"
                src={picture}
                alt="Your generated Meme"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
