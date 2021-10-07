/* eslint-disable no-undef */
import React, { Component } from 'react' 
import getAbilities  from "../actions/action-get-values" 
import { connect } from 'react-redux'; 
import CommonDropDown from './common/commonDropDown'; 
export class PokemonList extends Component { 
 
     componentDidMount() { 
         this.setAbility(this.props.Content.drop1[0].ability.name); 
     } 
     setAbility(name) { 
         this.props.getAbilities(name); 
     } 
     
     render() { 
         return ( 
            <div  className="component"> 
              <h1>{this.props.Content.heading}</h1>
                <div className="dropdown">
                <label id="label1"> Select Name: </label>
                    <CommonDropDown dropDownList={this.props.Content.drop1} 
                        handleOnChange={(name)=>this.setAbility(name)} /> 
                    <br />
                <label id="label2"> Select Abilities: </label>
                     <CommonDropDown dropDownList={this.props.result} /> 
                     {this.props.error && <p style={{ textAlign: 'center', color: 'red', fontSize: '20px' }}>Something went wrong. </p>}
                </div> 
            </div>
         ) 
     } 
 } 
 
export const mapStateToProps = (state) => { 
    return { 
         result: state.event.result, 
         error: state.event.error, 
    }; 
 }; 

 export const mapDispatchProps = (dispatch) => ({ 
    getAbilities: (name) => dispatch(getAbilities(name)) 
 }); 
 
 export default connect(mapStateToProps, mapDispatchProps)(PokemonList); 
