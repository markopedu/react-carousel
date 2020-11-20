import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import CarouselButton, {CarouselProps} from '../CarouselButton';

configure({ adapter: new Adapter() });

describe('CarouselButton', () => {

    it('renders a <button>', () => {

        const wrapper = shallow(<button />);
        expect(wrapper.type()).toBe('button');

    });

    it('passes "children" through to the <button>', () => {

         const props: CarouselProps = {
             text: 'Button Text'
         };

         const wrapper = shallow(<CarouselButton text={props.text} />);
         expect(wrapper.prop('children')).toBe(props.text);
    });


});

