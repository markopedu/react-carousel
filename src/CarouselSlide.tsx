import React from 'react';

export interface CarouselSlideProps {
    imgUrl: string;
    description: string;
    attribution: string;
}

const CarouselSlide = (props: CarouselSlideProps) => {

    return (<figure>
                <img alt={props.description} src={props.imgUrl} />
                <figcaption>
                    <strong>{props.description}</strong> {props.attribution}
                </figcaption>
            </figure>);
};

export default CarouselSlide;
