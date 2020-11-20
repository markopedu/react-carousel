import React from 'react';
import CarouselButton from "./CarouselButton";

class Carousel extends React.PureComponent {

    state = {
        slideIndex: 0
    };

    prevClick(): void {
        const prevIndex = this.state.slideIndex - 1;
        this.setState({ slideIndex: prevIndex });
        console.log('prev: ', prevIndex);
    }

    nextClick(): void {
        const nextIndex = this.state.slideIndex + 1;
        this.setState({ slideIndex: nextIndex });
    }

    render() {
        return (<div>
                  <CarouselButton text='Prev'
                                  buttonClick={this.prevClick.bind(this)}
                                  className='carousel-button-prev'
                                  dataAction='prev'  />

                  <CarouselButton text='Next'
                            buttonClick={this.nextClick.bind(this)}
                            className='carousel-button-next'
                            dataAction='next'  />
                </div>);
    }
}

export default Carousel;
