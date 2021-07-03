import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Login from "../pages/login";

const AuthNavigator = createStackNavigator();

export default () => {
    return (
        <AuthNavigator.Navigator screenOptions={{headerShown:false}}>
            <AuthNavigator.Screen  name="Login" component={Login}/>
        </AuthNavigator.Navigator>
    );
}