import React from "react";
import { shallow } from "enzyme";
import Modal from "./Modal"
import sinon from 'sinon';
import Enzyme from'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
Enzyme.configure({adapter: new Adapter()});
describe("Modal", () => {
  let props = {
    Demo: {
      heading: "ToDo List",
      enter: "Enter your Task",
      addButtonText: "Add",
      editButtonText: "Edit",
      deleteButtonText: "Delete",
      popupCancel: "Cancel",
      popupSave: "Save",
      popupHeading: "Edit",
    },
    saveDetails: fn => fn,
  };
  test("renders", () => {
    const wrapper = shallow(<Modal />);
    expect(wrapper.find(".main_div").exists()).toBe(true);
  });
  test("renders App components and checks for false case", () => {
    const wrapper = shallow(<Modal />);
    expect(wrapper.find(".main_div11").exists()).toBe(false);
  });
  it("should call titleHandler method", () => {
    const value = {
      target: {
        value: "item",
      },
    };
    const wrapper = shallow(<Modal />);
    wrapper.instance().titleHandler(value);
    expect(wrapper.exists()).toBe(true);  
  });
  it("should call handleSave method", () => {
    const item = {
      target: {
        key: "id",
        name: "value",
      },
    };
    const saveDetails = sinon.spy();
    const wrapper = shallow(<Modal {...props} saveDetails={saveDetails} />);
    wrapper.instance().handleSave(item);
    expect(saveDetails).toHaveProperty('callCount', 1);
  });
  it("renders button for titleHandler", () => {
    const wrapper = shallow(<Modal {...props} />);
      wrapper
        .find(`[id="edit item"]`)
        .simulate("change", { target: { title: "Walk" } })
        expect(wrapper.exists()).toBe(true)
  });
  
  it("renders inputfield for handleoncreate", () => {
    const wrapper = shallow(<Modal {...props} />);
      wrapper
        .find(`[id="ok"]`)
        .simulate("click", { target: { key: "id", name: "value" } })
         expect(wrapper.exists()).toBe(true)
  });
});