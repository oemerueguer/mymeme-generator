import React, { useEffect, useState } from "react";
import Axios from "axios";


export default function Memes(){
    const [picture, setPicture] = useState('');

    useEffect(() => {
        fetchPicture();
    }, []);

    const fetchPicture = async () => {
        await Axios.get(" https://api.imgflip.com/get_memes")
        .then((response) => setPicture(response.data.data))
        .catch((error) => console.log(error))
    };

    return(
        <div className="App">
            <h1>Meme Generator</h1>
            <div className="flex">
                <input></input>
                <button></button>
            </div>
        </div>
    );
}
    

