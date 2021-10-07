import React from 'react';
import { shallow, configure} from 'enzyme';
import Routes from './App';
import { Route } from 'react-router-dom';
import App from './App';
 

import PokemonList from './components/pokemonList';
import Todo from './components/Todo';

import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
 
configure({adapter: new Adapter()});


 
let pathMap = {};
 
describe('routes using array of routers', () => {
  beforeAll(() => {
    const component = shallow(<Routes/>);
    pathMap = component.find(Route).reduce((pathMap, route) => {
        const routeProps = route.props();
        pathMap[routeProps.path] = routeProps.component;
        return pathMap;
      }, {});
       
  })
 
  it("should render my component", () => {
    // eslint-disable-next-line no-unused-vars
    const wrapper = shallow(<App />);
  });
 
  
  it('should show News Feed component for /news router', () => {
    expect(pathMap['/PokemonList']).toBe(PokemonList);
  })
  it('should show News Feed component techdomain for /news router', () => {
    expect(pathMap['/Todo']).toBe(Todo);
  })
})
