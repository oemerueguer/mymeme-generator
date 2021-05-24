import React from 'react';
import Memes from './components/MemesGenerator';
import "./App.css";
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <Header />
     <Memes />
     <Footer />
   </>
  );
}

export default App;
