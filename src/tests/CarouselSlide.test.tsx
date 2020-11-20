import React from 'react';
import {configure, shallow, ShallowWrapper} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import CarouselSlide from '../CarouselSlide';

configure({ adapter: new Adapter() });

describe('CarouselSlide', () => {

    let wrapper: ShallowWrapper;

    beforeEach(() => {
        wrapper = shallow(<CarouselSlide />);
    });

    it('renders a figure', () => {
        expect(wrapper.type()).toBe('figure');
    });

});
