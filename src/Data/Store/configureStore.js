import rootReducer from '../Reducers/Main.reducer';
import {createStore} from 'redux';

export default function configureStore() {

    const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
    return store;
}
