import React from 'react';
import {configure, shallow, ShallowWrapper} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Carousel from '../Carousel';

configure({ adapter: new Adapter() });

describe('Carousel', () => {
   let wrapper: ShallowWrapper;

   beforeEach(() => {
       wrapper = shallow(<Carousel />);
   });

   it('renders a div', () => {
       expect(wrapper.type()).toBe('div');
   });


});
