import React from 'react';
import './App.css';
import Carousel from "./carousel/Carousel";
import {CarouselData} from './carousel/CarouselImage';

function App() {
  return (
    <div className="App">
        <Carousel slides={CarouselData()} slideIndex={0} />
    </div>
  );
}

export default App;
