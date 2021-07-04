import 'react-native-gesture-handler';
import { createStore, combineReducers, applyMiddleware, Store } from "redux"
import thunk from "redux-thunk";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { persistReducer, persistStore } from "redux-persist"
// Reducer list
import eventsReducer from "./reducers/event";
import authReducer from "./reducers/auth"

const persistConfig = {
    key:'root',
    storage: AsyncStorage
}

const rootReducer = combineReducers({
    events: eventsReducer,
    auth:authReducer
})


const persistedReducer = persistReducer(persistConfig, rootReducer);
const store: Store = createStore(persistedReducer, applyMiddleware(thunk));

export default store
