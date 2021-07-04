import 'react-native-gesture-handler';
import { createStore, combineReducers, applyMiddleware } from "redux"
import thunk from "redux-thunk";

import eventsReducer from "./reducers/event";

export interface Dispatch {
    type: string,
    payload: any
}

const rootReducer = combineReducers({
    events: eventsReducer
})

const configureStore = createStore(rootReducer, applyMiddleware(thunk));

export default configureStore;