import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axios from 'axios';
import ACTION_TYPES from  '../../actions/actionTypes';
import MockAdapter from 'axios-mock-adapter';
import getAbilities from '../../actions/action-get-values';
const middleware = [thunk];
const mockStore = configureMockStore(middleware);
const mock = new MockAdapter(axios);


describe('getAbilities actions', () => {
    beforeEach(() => {
        store.clearActions();
      });
      const store = mockStore();
      store.dispatch(getAbilities());
    // eslint-disable-next-line no-dupe-keys
    const payload = {name: "blaze" , name: "solar-power"}
    it('dispatches getAbilities after a successful API requets', () => {
        mock.onGet("https://pokeapi.co/api/v2/pokemon/charmeleon").reply(200, payload )
        
         return store.dispatch(getAbilities("charmeleon")).then(() => {
             
            let expectedActions =              
                {
                    type: ACTION_TYPES.FETCH_SUCCESS,
                    payload: undefined
                }
           
            expect(store.getActions()[0]).toEqual(expectedActions)
            
            });
    });
    it("dispatches INVALID_REQST after a FAILED API requets", () => {

        mock
        
        .onGet("https://pokeapi.co/api/v2/pokemon/ty")
        
        .reply(400, { error: { message: "error message" } });
        
        // eslint-disable-next-line jest/valid-expect-in-promise
        const newstate = store.dispatch(getAbilities()).catch(() => {
        
        let expectedActions = [
        
        {
        
         type: "INVALID_REQST",
        
         payload: { error: { message: "error message" } },
        
        },
        
        ];
        
        // eslint-disable-next-line jest/no-conditional-expect
        expect(newstate).toEqual(expectedActions);
        
        });
        
        });
    
})
 

