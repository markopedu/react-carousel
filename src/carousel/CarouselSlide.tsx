import React from 'react';
import {CarouselImage} from './CarouselImage';
import styled from 'styled-components';

export interface CarouselSlideProps {
    carouselImage: CarouselImage;
    slideOnClick: (e: React.MouseEvent<HTMLElement>) => void;
    cssStyle: any;
    className: string;
}

const StyledCarouselSlide = styled.figure` 
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;`;

const StyledFigCaption = styled.figcaption`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px;
    margin: 5px 0;
    font-size: 24px;
    text-align: center;`;

const StyledStrong = styled.strong`
    text-transform: uppercase;
    font-size: 28px;
    margin-right: 10px;
`;

const StyledImage = styled.img`
    filter: blur(0px);
    opacity: 1.0;
    
    &:hover {
        filter: blur(1px);
        opacity: .9;
    }
`;

const CarouselSlide = (props: CarouselSlideProps): JSX.Element => {

    return (<StyledCarouselSlide onClick={props.slideOnClick}
                    style={props.cssStyle}
                    className={props.className} >
                <StyledImage className='carousel-slide__img' height="600" width="800" referrerPolicy='no-referrer' loading="lazy" alt={props.carouselImage.description} src={props.carouselImage.imgUrl} />
                <StyledFigCaption>
                    <StyledStrong>{props.carouselImage.description}</StyledStrong> <i>{props.carouselImage.attribution}</i>
                </StyledFigCaption>
            </StyledCarouselSlide>);
};

export default CarouselSlide;
