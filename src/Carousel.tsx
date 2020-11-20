import React from 'react';
import CarouselButton from "./CarouselButton";

class Carousel extends React.PureComponent {
    private readonly cssClassName: string = 'carousel-button';

    state = {
        slideIndex: 0
    };

    prevClick(e: React.MouseEvent<HTMLButtonElement>): void {

    }

    nextClick(e: React.MouseEvent<HTMLButtonElement>): void {

    }

    render() {
        return (<div>
                  <CarouselButton text='Prev'
                                  buttonClick={this.prevClick}
                                  className={this.cssClassName}
                                  dataAction='prev'  />

                  <CarouselButton text='Next'
                            buttonClick={this.nextClick}
                            className={this.cssClassName}
                            dataAction='next'  />
                </div>);
    }
}

export default Carousel;
