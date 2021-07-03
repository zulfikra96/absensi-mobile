import { createStackNavigator } from "@react-navigation/stack";

import Login from "../pages/login";

const AppNavigator = createStackNavigator();

export default () => {
    return (
        <AppNavigator.Navigator>
            <AppNavigator.Screen name="Login" component={Login}/>
        </AppNavigator.Navigator>
    );
}