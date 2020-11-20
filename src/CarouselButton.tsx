import React from 'react';

export interface CarouselProps {
    text: string;
    buttonClick: () => void;
    className: string;
    dataAction: string;
}

const CarouselButton = (props: CarouselProps) => {
     return (<button onClick={() => props.buttonClick()}
                     className={props.className}
                     data-action={props.dataAction}>{props.text}</button>)};

export default CarouselButton;
