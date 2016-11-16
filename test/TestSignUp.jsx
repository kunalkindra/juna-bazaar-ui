import { mount, shallow } from 'enzyme'
import React from 'React'
import {expect} from 'chai';
import SignUp from '../app/js/components/SignUp'

describe('<SignUp/>', function () {
    it('should have an input to get the name', function () {
        const wrapper = shallow(<SignUp/>);
        expect(wrapper.find('FormControl')).to.have.length(5);
    });
});