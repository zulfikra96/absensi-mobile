import 'react-native-gesture-handler';
import { createStore, combineReducers, applyMiddleware, Store } from "redux"
import thunk from "redux-thunk";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { persistReducer, persistStore } from "redux-persist"
// Reducer list
import eventsReducer from "./reducers/event";
import authReducer from "./reducers/auth"
import attendanceReducers from './reducers/attendances';

const persistConfig = {
    key:'root',
    storage: AsyncStorage
}

const rootReducer = combineReducers({
    events: eventsReducer,
    auth:authReducer,
    attendances: attendanceReducers
})


const persistedReducer = persistReducer(persistConfig, rootReducer);
const store: Store = createStore(persistedReducer, applyMiddleware(thunk));
export const persistor = persistStore(store);
export default store
