import React from "react"
import { createSwitchNavigator } from "@react-navigation/compat"
import { NavigationContainer } from "@react-navigation/native"
import auth from "./auth";

const Route = createSwitchNavigator({
    auth:auth
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