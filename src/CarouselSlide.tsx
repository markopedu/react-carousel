import React from 'react';

export interface CarouselSlideProps {
    imgUrl: string;
    description: string;
    attribution: string;
    slideOnClick: (e: React.MouseEvent<HTMLElement>) => void;
    cssStyle: any;
    className: string;
}

const CarouselSlide = (props: CarouselSlideProps) => {

    return (<figure onClick={props.slideOnClick}
                    style={props.cssStyle}
                    className={props.className} >
                <img alt={props.description} src={props.imgUrl} />
                <figcaption>
                    <strong>{props.description}</strong> {props.attribution}
                </figcaption>
            </figure>);
};

export default CarouselSlide;
