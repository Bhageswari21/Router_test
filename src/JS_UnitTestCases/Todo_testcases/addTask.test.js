
import React from 'react';
import { shallow } from 'enzyme';
import Addtask from '../../components/Addtask';
import Enzyme from'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
Enzyme.configure({adapter: new Adapter()});
describe("Addtask", () => {
  let props = { Demo : {
    heading:"ToDo List",
    enter:"Enter your Task",
    addButtonText:"Add",
    editButtonText:"Edit",
    deleteButtonText:"Delete",
    popupCancel:"Cancel",
    popupSave:"Save",
    popupHeading:"Edit"
  },
   addtodo: fn=> fn,
}
  it('renders Addtask component', () => {
    const wrapper = shallow(<Addtask {...props}/>);
    expect(wrapper.find(".add").exists()).toBe(true);
});
it('renders App components and checks for false case', () => {
  const wrapper = shallow(<Addtask {...props}/>);
  expect(wrapper.find(".add11").exists()).toBe(false);
});
  it('should call handleChange method', () => {
    const value = {
      target:{
        value:"create item"
      }}
      const wrapper = shallow(<Addtask/>);
      wrapper.instance().handleChange(value);
      expect(wrapper.state('content')).toEqual("create item");
  });
  it('should call handleSubmit method', () => {
    const value = {
      preventDefault: fn => fn
    }
      const wrapper = shallow(<Addtask {...props}/>);
      wrapper.instance().handleSubmit(value);
      expect(wrapper.state('content')).toEqual("");
  });
});

