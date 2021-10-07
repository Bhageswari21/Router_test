import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import React, { Component } from 'react';
import Data from './mock/valuesMock';
import './styles/App.css';
import PokemonList from './components/pokemonList';
import Todo from './components/Todo';


class App extends Component {
  render() {
    return (
        <Router>
            <div> 
                <ol>
                    <li> <Link to="/Todo">TODO APP</Link></li> <br/>             
                    <li> <Link to="/pokemonList">Pokemon API</Link></li>
                </ol>
         
                <Switch>    
                    <Route exact path='/Todo' component={Todo}></Route>
                    <Route exact path='/PokemonList' component={PokemonList}><PokemonList Content={this.props.Content} /></Route>    
                </Switch>   
            </div>
        </Router>
    );
  }
}
App.defaultProps = { Content: Data }
export default App;