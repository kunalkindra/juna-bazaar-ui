import { mount, shallow } from 'enzyme'
import React from 'React'
import {expect} from 'chai';
import SignIn from '../app/js/components/SignIn'

describe('SignIn'  , function () {



    it('should contain input form controls', function () {
        const wrapper = shallow(<SignIn/>);

        expect(wrapper.find('input')).to.have.length(3);
    });



    it('should contain form labels', function () {
        const wrapper = shallow(<SignIn/>);

        expect(wrapper.find('label')).to.have.length(2);
    });
});