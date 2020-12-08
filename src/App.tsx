import React, {useEffect, useState} from 'react';
import './App.css';
import Carousel from './carousel/Carousel';
import {CarouselDataService, CarouselImage} from './carousel/CarouselImage';

function App(): JSX.Element {
   const [ slides, setSlides ] = useState<CarouselImage[]>([]);

   useEffect(() => {

       if(slides.length === 0) {
            CarouselDataService().then(x => {
                setSlides(x);
            });
       }

   }, [ slides]);

  return (
    <div className="App">
        {slides.length > 0  && <Carousel slides={slides} slideIndex={0} />}
    </div>
  );
}

export default App;
