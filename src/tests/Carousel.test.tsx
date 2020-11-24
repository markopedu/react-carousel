import React from 'react';
import {configure, shallow, ShallowWrapper} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Carousel from '../carousel/Carousel';
import CarouselButton, { CarouselButtonProps } from '../carousel/CarouselButton';
import {CarouselData, CarouselImage} from '../carousel/CarouselImage';
import CarouselSlide, {CarouselSlideProps} from "../carousel/CarouselSlide";

configure({ adapter: new Adapter() });

describe('Carousel', () => {
   let wrapper: ShallowWrapper;

   let slides: CarouselImage[] = CarouselData();

   beforeEach(() => {
       wrapper = shallow(<Carousel slideIndex={0} slides={slides} />);
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
        const props = button.props() as CarouselButtonProps;
        props.buttonClick();
        expect(wrapper.state('slideIndex')).toBe(0);
    });

    it('try to go out of lower index', () => {
        wrapper.setState({ slideIndex: 0 });
        const button = wrapper.find('.carousel-button-prev');
        const props = button.props() as CarouselButtonProps;
        props.buttonClick();
        expect(wrapper.state('slideIndex')).toBe((slides.length-1));
    });

    it('increments when Next is clicked', () => {
        wrapper.setState({ slideIndex: 1 });
        const button = wrapper.find('.carousel-button-next');
        const props = button.props() as CarouselButtonProps;
        props.buttonClick();
        expect(wrapper.state('slideIndex')).toBe(2);
    });

    it('try to go out of upper index', () => {
        wrapper.setState({ slideIndex: 2 });
        const button = wrapper.find('.carousel-button-next');
        const props = button.props() as CarouselButtonProps;
        props.buttonClick();
        expect(wrapper.state('slideIndex')).toBe(0);
    });

    it('renders the current slide as a CarouselImage', () => {
       let slideProps = wrapper.find(CarouselSlide).props() as CarouselSlideProps;
       expect(slideProps.carouselImage).toBe(slides[0]);

       wrapper.setState({ slideIndex: 1 });

       slideProps = wrapper.find(CarouselSlide).props() as CarouselSlideProps;
       expect(slideProps.carouselImage).toBe(slides[1]);
    });



});
