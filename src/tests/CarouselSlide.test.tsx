import React from 'react';
import {configure, shallow, ShallowWrapper} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import CarouselSlide, {CarouselSlideProps} from '../CarouselSlide';

configure({ adapter: new Adapter() });

describe('CarouselSlide', () => {
    const props: CarouselSlideProps = {
        imgUrl: 'http://example.com/image.png'
    };
    let wrapper: ShallowWrapper;

    beforeEach(() => {
        wrapper = shallow(<CarouselSlide imgUrl={props.imgUrl} />);
    });

    it('renders a figure', () => {
        expect(wrapper.type()).toBe('figure');
    });

    it('renders a <img> and a <figcaption> as children', () => {
       expect(wrapper.childAt(0).type()).toBe('img');
       expect(wrapper.childAt(1).type()).toBe('figcaption');
    });

    it('passes "imgUrl" through to the <img>', () => {
        const img = wrapper.find('img');
        expect(img.prop('src')).toBe(props.imgUrl);
    });

});
