import { shallow } from 'enzyme';

import PokemonApp from '../../components/pokemonApp';

import Enzyme from'enzyme';

import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
 
Enzyme.configure({adapter: new Adapter()});

describe('rendering App component properly', () => {
    const Data = 
    {
      heading: "Pokemon API",
      drop1:
      [
        {
          "ability":
          {     
            "name": "charmeleon",    
          }
        },
         
        {
          "ability": 
          {
            "name": "bulbasaur",
          }
        },
         
        {    
          "ability": 
          {     
            "name": "squirtle",         
          }
        },
         
        {     
          "ability": 
          { 
            "name": "weedle",
          }
        }
       
      ],
        
    }

  it('renders there <PokemonApp /> components', () => {

    const wrapper = shallow(<PokemonApp {...Data} />);

    expect(wrapper.find('.main-component').exists()).toBe(false);

  });



});