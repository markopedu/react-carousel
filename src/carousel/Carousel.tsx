import React from 'react';
import CarouselButton from './CarouselButton';
import {CarouselImage} from "./CarouselImage";
import CarouselSlide from "./CarouselSlide";
import './Carousel.css';

export interface CarouselProps {
    slideIndex: number,
    slides: CarouselImage[];
}

class Carousel extends React.PureComponent<CarouselProps, CarouselProps>{

    constructor(props: CarouselProps) {
        super(props);

        this.state = {
            slideIndex: 0,
            slides: []
        };
    }

    prevClick(): void {
        const prevIndex = this.state.slideIndex - 1;
        this.setState({ slideIndex: prevIndex });
    }

    nextClick(): void {
        const nextIndex = this.state.slideIndex + 1;
        this.setState({ slideIndex: nextIndex });
    }

    slideOnClick(): void {
        console.log('slideOnClick');
    }

    render() {
        return (<div className='carousel'>
                  <CarouselSlide carouselImage={this.props.slides[this.state.slideIndex]}
                                 slideOnClick={this.slideOnClick.bind(this)}
                                 cssStyle={{ 'display': 'flex'}}
                                 className='carousel-slide' />
                  <div className='carousel__carouselButtons'>
                    <CarouselButton text='Prev'
                                  buttonClick={this.prevClick.bind(this)}
                                  className='carousel-button-prev'
                                  dataAction='prev'  />

                    <CarouselButton text='Next'
                            buttonClick={this.nextClick.bind(this)}
                            className='carousel-button-next'
                            dataAction='next'  />
                  </div>
        </div>);
    }
}

export default Carousel;
