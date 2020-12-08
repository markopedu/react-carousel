import React from 'react';
import styled from 'styled-components';

export interface CarouselButtonProps {
    text: string;
    buttonClick: () => void;
    className: string;
    dataAction: string;
}

const StyledCarouselButtons = styled.button`
    width: 49.5%;
    padding: 5px 0;
`;


const CarouselButton = (props: CarouselButtonProps): JSX.Element => {
     return (<StyledCarouselButtons onClick={() => props.buttonClick()}
                     className={props.className}
                     data-action={props.dataAction}>{props.text}</StyledCarouselButtons>);
};

export default CarouselButton;
