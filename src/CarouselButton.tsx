import React from 'react';

export interface CarouselProps {
    text: string;
}

const CarouselButton = (props: CarouselProps) => <button>{props.text}</button>;

export default CarouselButton;
