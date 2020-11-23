import React from 'react';
import {configure, shallow, ShallowWrapper} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import CarouselButton, {CarouselButtonProps} from '../carousel/CarouselButton';

configure({ adapter: new Adapter() });

describe('CarouselButton', () => {
    const props: CarouselButtonProps = {
        text: 'Button Text',
        buttonClick: () => console.log('button clicked!'),
        className: 'carousel-button',
        dataAction: 'prev'
    };
    let wrapper: ShallowWrapper;

    beforeEach(() => {
        wrapper = shallow(<CarouselButton text={props.text}
                                          className={props.className}
                                          buttonClick={props.buttonClick}
                                          dataAction={props.dataAction}  />);
    });

    it('renders a <button>', () => {
        expect(wrapper.type()).toBe('button');
    });

    it('passes "children" through to the <button>', () => {
         expect(wrapper.prop('children')).toBe(props.text);
    });

    it('passes other props through to the <button>', () => {

         // @ts-ignore
         expect(wrapper.prop('onClick').toString()).toBe((() => props.buttonClick()).toString());
         expect(wrapper.prop('className')).toBe(props.className);
         expect(wrapper.prop('data-action')).toBe(props.dataAction);
    });


});

