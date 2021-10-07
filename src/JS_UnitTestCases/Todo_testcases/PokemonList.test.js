import Enzyme, { shallow } from "enzyme";
 
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import {PokemonList,mapStateToProps,mapDispatchProps} from "../../components/pokemonList";
// eslint-disable-next-line no-unused-vars
import getAbilities from "../../actions/action-get-values";
// eslint-disable-next-line no-unused-vars
import { Dropdown } from "bootstrap";
Enzyme.configure({ adapter: new Adapter() });
 
describe("Select Buttons for displaying Pokemon and abilities",()=>{
    // eslint-disable-next-line no-unused-vars
    const getAbilities = function(){
    };
    let props = {
         
        Content :{
         
        regions:[ {
            "ability":
            {
            "name": "charmeleon",
          }
          }
        ]},
        setAbility: fn => fn,
        getAbilities: fn => fn,
        handleClose: fn =>fn,
        error:true,
    }
    it( "render the title",()=>{
        // const wrapper= shallow(<PokemonList {...props} />);
        const wrapper = shallow(<PokemonList {...props}/>);
        
        // console.log(wrapper.debug());
        expect(wrapper.find('.component .dropdown #label1').text()).toBe(' Select Name: ')
        
    })
    // // eslint-disable-next-line jest/no-identical-title
    // it( "render the title",()=>{
    //   const wrapper 
    //     const wrapper = shallow(<PokemonList {...props} />);
    //     const element = wrapper.find('DropDown');
    //     expect(element.length).toBe(2);
       
    // })
})