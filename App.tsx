/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

 import React from 'react';
 import configureStore, { persistor } from './src/redux/store';
 import { Provider } from "react-redux"
 import Route from "./src/routes/index"
 import { PersistGate } from "redux-persist/lib/integration/react"


 

 const App = () => {
  return (
    <Provider store={configureStore}>
      <PersistGate persistor={persistor}>
        <Route/>   
      </PersistGate>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
    </Provider>
  );
 };


 export default App;
