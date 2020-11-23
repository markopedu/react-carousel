import React from 'react';

export interface CarouselButtonProps {
    text: string;
    buttonClick: () => void;
    className: string;
    dataAction: string;
}

const CarouselButton = (props: CarouselButtonProps) => {
     return (<button onClick={() => props.buttonClick()}
                     className={props.className}
                     data-action={props.dataAction}>{props.text}</button>)};

export default CarouselButton;
