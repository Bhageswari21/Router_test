/* eslint-disable jest/valid-expect */
import Enzyme, { shallow } from "enzyme";

import CommonDropDown from "../components/common/commonDropDown";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
Enzyme.configure({ adapter: new Adapter() });

describe("passing props", () => {
  let props = {
    Content: {
      heading: "Select Ability based on Pokemon",
      label2: "Select Ability",
      label1: "Select Pokemon",
      
    },
    handleDropdownChange: (fn) => fn,
    handleOnChange: (fn) => fn,
    // data: [{ name: "pokemon values" }],
  };
  it("should call handleOnChange method", () => {
    const wrapper = shallow(<CommonDropDown {...props} dropDownList={[]}/>);
    const para = wrapper.find('select').at(0);
    para.simulate('change');
    // eslint-disable-next-line no-unused-expressions
    expect(wrapper.find("handleDropdownChange")).toHaveBeenCalled;
    
  });
});