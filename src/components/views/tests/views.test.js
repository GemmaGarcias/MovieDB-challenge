import React from 'react';
import Enzyme, { shallow } from enzyme;
import Adapter from 'enzyme-adapter-react-16';
import Home from '../home/Home';

Enzyme.configure({ adapter: new Adapter() })
describe('Home', () => {
    it('Should ', () => {
        const wrapper = shallow( <Home />);
        const title = wrapper.find('div h1');
        expect(title.text()).toBe('Home')
    });
})