import { shallow } from "enzyme";
 
import React from 'react';
import sinon from "sinon";
import Buttons from "../../components/common/Buttons";
import Enzyme from'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
 

 Enzyme.configure({adapter: new Adapter()});
describe('Buttons', () => {

  it('should render a submit button', () => {
    const mockCallBack = sinon.spy();
    const wrapper = shallow(<Buttons onClick={mockCallBack} />);
    wrapper.find('button').simulate('click');
    expect(mockCallBack.calledOnce).toBe(true);
  });
});