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
                <img height="600" width="800" referrerPolicy='no-referrer' loading="lazy" alt={props.carouselImage.description} src={props.carouselImage.imgUrl} />
                <figcaption>
                    <strong>{props.carouselImage.description}</strong> {props.carouselImage.attribution}
                </figcaption>
            </figure>);
};

export default CarouselSlide;
