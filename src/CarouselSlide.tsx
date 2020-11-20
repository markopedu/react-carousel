import React from 'react';

export interface CarouselSlideProps {
    imgUrl: string;
}

const CarouselSlide = (props: CarouselSlideProps) => {

    return (<figure>
                <img src={props.imgUrl} />
                <figcaption />
            </figure>);
};

export default CarouselSlide;
