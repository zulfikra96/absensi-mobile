import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Login from "../pages/login";
import SplashScreen from "../pages/splash_screen";
const AuthNavigator = createStackNavigator();

export default () => {
    return (
        <AuthNavigator.Navigator screenOptions={{headerShown:false}} initialRouteName="Splash">
            <AuthNavigator.Screen  name="Login" component={Login}/>
            <AuthNavigator.Screen  name="Splash" component={SplashScreen}/>
            
        </AuthNavigator.Navigator>
    );
}