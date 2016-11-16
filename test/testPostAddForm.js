import { mount, shallow } from 'enzyme'
import React from 'React'
import {expect} from 'chai';
import CreateAd from '../app/js/components/CreateAd'

describe('<CreateAd/>', function () {
    it('should have 4 input to get the title, price, mobile-number, submit', function () {
        const wrapper = shallow(<CreateAd/>);
        expect(wrapper.find('input')).to.have.length(4);
    });

    it('should have 2 select to get the city, category', function () {
        const wrapper = shallow(<CreateAd/>);
        expect(wrapper.find('select')).to.have.length(2);
    });

    it('should have a textarea to get the description', function () {
        const wrapper = shallow(<CreateAd/>);
        expect(wrapper.find('textarea')).to.have.length(1);
    });

    it('price should not be zero', function() {
        const wrapper = shallow(<CreateAd/>);
        wrapper.setState({value: -100});
        expect(wrapper.find('#price').text()).to.contain(100);
    });


});