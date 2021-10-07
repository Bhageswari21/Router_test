
import React from 'react';
import { shallow } from 'enzyme';
import Todo from '../../components/Todo';
import Enzyme from'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
Enzyme.configure({adapter: new Adapter()});
describe("Header" , () =>{
  let props ={
      Demo : {
        heading:"ToDo List",
        enter:"Enter your Task",
        addButtonText:"Add",
        editButtonText:"Edit",
        deleteButtonText:"Delete",
        popupCancel:"Cancel",
        popupSave:"Save",
        popupHeading:"Edit"
    },
    todos: fn=>fn
  }
  it('renders Header components', () => {
      const wrapper = shallow(<Todo {...props}/>);
      expect(wrapper.find(".div_class").exists()).toBe(true);
  });
  it('renders Header components and checks for false case', () => {
    const wrapper = shallow(<Todo {...props}/>);
    expect(wrapper.find(".div11_class").exists()).toBe(false);
  });
  it("should call addtodo", () => {
    const value = {
        todos: fn => fn
    }
    const wrapper = shallow(<Todo {...props}/>);
    wrapper.instance().addtodo(value);
    expect(wrapper.exists()).toBe(true);
});
});