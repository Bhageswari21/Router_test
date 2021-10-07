import { shallow } from 'enzyme';
import Enzyme from'enzyme';
import InputField from "../../components/common/Inputfield";
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
 Enzyme.configure({adapter: new Adapter()});
 
describe('render <InputField /> component', () => {

  it('should render an  input tag', () => {
    const wrapper = shallow(<InputField />);
    expect(wrapper.find('input').exists()).toBe(true);
  });
});