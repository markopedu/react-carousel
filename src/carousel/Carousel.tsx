import React, {ReactNode} from 'react';
import CarouselButton from './CarouselButton';
import {CarouselImage} from './CarouselImage';
import CarouselSlide from './CarouselSlide';
import styled from 'styled-components';

export interface CarouselProps {
    slideIndex: number,
    slides: CarouselImage[];
}

const CarouselDiv = styled.div` 
    padding: 10px 0;
    display: flex;
    flex-direction: column;
    width: 800px;
    margin: 0 auto;`;

const CarouselDivButtons = styled.div`
    margin: 5px 0;
    display: flex;
    justify-content: space-between;
    width: 100%;`;

class Carousel extends React.PureComponent<CarouselProps, CarouselProps>{

    constructor(props: CarouselProps) {
        super(props);

        this.state = {
            slideIndex: 0,
            slides: this.props.slides
        };
    }

    prevClick(): void {
        const prevIndex = (this.state.slideIndex > 0) ? this.state.slideIndex - 1 : (this.state.slides.length-1);
        this.setState({ slideIndex: prevIndex });
    }

    nextClick(): void {
        const nextIndex = (this.state.slideIndex < (this.state.slides.length-1))
            ? this.state.slideIndex + 1 :
              0;

        this.setState({ slideIndex: nextIndex });
    }

    slideOnClick(): void {
        console.log('slideOnClick');
    }

    render(): ReactNode {

        if(this.state.slides.length === 0) {
            return (<div></div>);
        }

        return (<CarouselDiv>
                  <CarouselSlide carouselImage={this.state.slides[this.state.slideIndex]}
                                 slideOnClick={this.slideOnClick.bind(this)}
                                 cssStyle={{ 'display': 'flex'}}
                                 className='carousel-slide' />
                  <CarouselDivButtons>
                    <CarouselButton text='Prev'
                                  buttonClick={this.prevClick.bind(this)}
                                  className='carousel-button-prev'
                                  dataAction='prev'  />

                    <CarouselButton text='Next'
                            buttonClick={this.nextClick.bind(this)}
                            className='carousel-button-next'
                            dataAction='next'  />
                  </CarouselDivButtons>
        </CarouselDiv>);
    }
}

export default Carousel;
