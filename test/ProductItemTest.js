import { mount, shallow } from 'enzyme'
import React from 'React'
import {expect} from 'chai';
import ProductItem from '../app/js/components/ProductItem'

describe('<ProductItem />', function () {
    it('should have a td containing id, title, price, description and city', function () {
        const wrapper = shallow(<ProductItem />);
        expect(wrapper.find('td')).to.have.length(5);
    });
});
