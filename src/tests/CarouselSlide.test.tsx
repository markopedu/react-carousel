import React from 'react';
import {configure, shallow, ShallowWrapper} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import CarouselSlide, {CarouselSlideProps} from '../carousel/CarouselSlide';
import {CarouselData, CarouselImage} from '../carousel/CarouselImage';

configure({ adapter: new Adapter() });

describe('CarouselSlide', () => {
    const carouselImage: CarouselImage = CarouselData()[0];

    const props: CarouselSlideProps = {
        carouselImage: carouselImage,
        slideOnClick: (e) => console.log('slide clicked!'),
        cssStyle: {},
        className: 'carousel-slide'
    };
    let wrapper: ShallowWrapper;

    beforeEach(() => {
        wrapper = shallow(<CarouselSlide carouselImage={props.carouselImage}
                                         slideOnClick={props.slideOnClick}
                                         cssStyle={props.cssStyle}
                                         className={props.className} />);
    });

    it('renders a figure', () => {
        expect(wrapper.type()).toBe('figure');
    });

    it('renders a <img> and a <figcaption> as children', () => {
       expect(wrapper.childAt(0).type()).toBe('img');
       expect(wrapper.childAt(1).type()).toBe('figcaption');
    });

    it('sets img attributes through to the component', () => {
        const img = wrapper.find('img');
        expect(img.prop('alt')).toBe(props.carouselImage.description);
        expect(img.prop('src')).toBe(props.carouselImage.imgUrl);
    });

    it('uses description & attribution as the figcaption', () => {
       expect(wrapper.find('figcaption').text()).toBe(`${props.carouselImage.description} ${props.carouselImage.attribution}`);
       expect(wrapper.find('figcaption strong').text()).toBe(props.carouselImage.description);
    });

    it('passes other props to the component', () => {
       expect(wrapper.prop('style')).toBe(props.cssStyle);
       expect(wrapper.prop('onClick')).toBe(props.slideOnClick);
       expect(wrapper.prop('className')).toBe(props.className);
    });

});
