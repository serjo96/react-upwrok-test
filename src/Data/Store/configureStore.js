import Tiles from './../Reducers/Tiles-reducer';
import { createStore } from 'redux';

export default function configureStore() {
    const store = createStore(Tiles, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
    return store;
}
