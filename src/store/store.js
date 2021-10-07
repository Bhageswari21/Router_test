// import { createStore, applyMiddleware } from 'redux';
// import RootReducer from '../reducers/rootReducer';
// import ReduxThunk from 'redux-thunk';

// export const middlewares = [ReduxThunk];
// export const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore)
// export const store = createStoreWithMiddleware(RootReducer);
// export default store;
import { createStore, applyMiddleware, compose } from "redux";
import RootReducer from "../reducers/rootReducer";
import thunk from 'redux-thunk';
 
const INITIAL_STATE = {};
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
 
const store = createStore(RootReducer, INITIAL_STATE, composeEnhancers(applyMiddleware(thunk)));
    
 
export default store;