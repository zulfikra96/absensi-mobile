import React from "react"
import { createSwitchNavigator } from "@react-navigation/compat"
import { NavigationContainer } from "@react-navigation/native"
// Routes
import auth from "./auth";
import app from "./app"
const Route = createSwitchNavigator({
    auth,
    app
},{
    initialRouteName:"auth"
})


export default () => {
    return (
        <NavigationContainer>
            <Route/>
        </NavigationContainer>
    )
};