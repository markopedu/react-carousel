import React from 'react';
import {configure, shallow, ShallowWrapper} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Carousel from '../Carousel';
import CarouselButton, { CarouselProps } from '../CarouselButton';

configure({ adapter: new Adapter() });

describe('Carousel', () => {
   let wrapper: ShallowWrapper;

   beforeEach(() => {
       wrapper = shallow(<Carousel />);
   });

   it('renders a div', () => {
       expect(wrapper.type()).toBe('div');
   });

   it('has an initial slideIndex of 0', () => {
      expect(wrapper.state('slideIndex')).toBe(0);
   });

   it('renders a CarouselButton labeled Prev', () => {
      expect(wrapper.find(CarouselButton).at(0).prop('text')).toBe('Prev');
   });

    it('renders a CarouselButton labeled Next', () => {
        expect(wrapper.find(CarouselButton).at(1).prop('text')).toBe('Next');
    });

    it('decrements when Prev is clicked', () => {
        wrapper.setState({ slideIndex: 1 });
        const button = wrapper.find('.carousel-button-prev');
        const props = button.props() as CarouselProps;
        props.buttonClick();
        expect(wrapper.state('slideIndex')).toBe(0);
    });

    it('increments when Next is clicked', () => {
        wrapper.setState({ slideIndex: 1 });
        const button = wrapper.find('.carousel-button-next');
        const props = button.props() as CarouselProps;
        props.buttonClick();
        expect(wrapper.state('slideIndex')).toBe(2);
    });

});
