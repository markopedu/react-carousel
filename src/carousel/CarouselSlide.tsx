import React from 'react';
import {CarouselImage} from "./CarouselImage";

export interface CarouselSlideProps {
    carouselImage: CarouselImage;
    slideOnClick: (e: React.MouseEvent<HTMLElement>) => void;
    cssStyle: any;
    className: string;
}

const CarouselSlide = (props: CarouselSlideProps) => {

    return (<figure onClick={props.slideOnClick}
                    style={props.cssStyle}
                    className={props.className} >
                <img alt={props.carouselImage.description} src={props.carouselImage.imgUrl} />
                <figcaption>
                    <strong>{props.carouselImage.description}</strong> {props.carouselImage.attribution}
                </figcaption>
            </figure>);
};

export default CarouselSlide;
