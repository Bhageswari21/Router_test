import ACTION_TYPES from '../../actions/actionTypes';
import  valuesReducers  from '../../reducers/valuesReducer';
const INITIAL_STATE = {
    result: [],
    error: null
}
describe('testing reducer', () => {
    const value = 'Blaze';
    it('returns the initial state', () => {
        expect(valuesReducers(undefined, {})).toEqual(INITIAL_STATE);
    });
    it('handles success', () => {
        expect(valuesReducers(INITIAL_STATE, {
            type: ACTION_TYPES.FETCH_SUCCESS ,
            payload: value,
        })).toEqual({
            ...INITIAL_STATE,
            result: value
        });
    });

    it('handles error', () => {
        expect(valuesReducers(INITIAL_STATE, {
            type: ACTION_TYPES.FETCH_FAIL,
            payload: "undefined"
        })).toEqual({
            ...INITIAL_STATE,
            error: "undefined"
        });
    });
});