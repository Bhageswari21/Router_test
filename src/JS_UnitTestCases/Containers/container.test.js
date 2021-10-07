/* eslint-disable jest/valid-expect */
/* eslint-disable no-unused-expressions */
 
import {mapStateToProps} from '../../components/container';
 
describe("App Container",() => {
    
    // eslint-disable-next-line jest/valid-title
    it(" mapstatetoprops ", () => {
        const INITIAL_STATE = {
            event : { 
            selectValue: '5',
            error : null,          
          }};       
         
        expect(mapStateToProps(INITIAL_STATE).getSelectedValue).toEqual('5');
    });
     
    it("map state to props", () => {
        const INITIAL_STATE = {
            event : { 
            selectValue: null
                      
          }};       
         
        expect(mapStateToProps(INITIAL_STATE).selectValue).toBeNull;
    });

})