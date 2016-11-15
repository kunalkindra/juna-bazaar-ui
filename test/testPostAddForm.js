import { mount, shallow } from 'enzyme'
import React from 'React'
import {expect} from 'chai';
import PostAdForm from '../app/js/components/PostAdForm'

describe('<PostAdForm/>', function () {
    it('should have an input to get the name', function () {
        const wrapper = shallow(<PostAdForm/>);
        expect(wrapper.find('input')).to.have.length(2);
    });
});
