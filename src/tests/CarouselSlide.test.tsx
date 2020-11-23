import React from 'react';
import {configure, shallow, ShallowWrapper} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import CarouselSlide, {CarouselSlideProps} from '../carousel/CarouselSlide';

configure({ adapter: new Adapter() });

describe('CarouselSlide', () => {
    const props: CarouselSlideProps = {
        imgUrl: 'http://example.com/image.png',
        description: 'Fine Image!',
        attribution: 'John Doe',
        slideOnClick: (e) => console.log('slide clicked!'),
        cssStyle: {},
        className: 'carousel-slide'
    };
    let wrapper: ShallowWrapper;

    beforeEach(() => {
        wrapper = shallow(<CarouselSlide imgUrl={props.imgUrl}
                                         description={props.description}
                                         attribution={props.attribution}
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
        expect(img.prop('alt')).toBe(props.description);
        expect(img.prop('src')).toBe(props.imgUrl);
    });

    it('uses description & attribution as the figcaption', () => {
       expect(wrapper.find('figcaption').text()).toBe(`${props.description} ${props.attribution}`);
       expect(wrapper.find('figcaption strong').text()).toBe(props.description);
    });

    it('passes other props to the component', () => {
       expect(wrapper.prop('style')).toBe(props.cssStyle);
       expect(wrapper.prop('onClick')).toBe(props.slideOnClick);
       expect(wrapper.prop('className')).toBe(props.className);
    });

});
