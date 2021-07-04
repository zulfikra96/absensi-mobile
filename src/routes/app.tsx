import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "../pages/home";
import Attendances from "../pages/attendances"
const AppNavigator = createStackNavigator();

export default () => {
    return (
        <AppNavigator.Navigator screenOptions={{headerShown:false}}>
            <AppNavigator.Screen  name="Home" component={Home}/>
            <AppNavigator.Screen  name="Attendances" component={Attendances}/>
        </AppNavigator.Navigator>
    );
}