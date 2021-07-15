import { createStore } from "redux";
import AppReducer from './Reducer';

const Store = createStore( AppReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() );

export default Store;