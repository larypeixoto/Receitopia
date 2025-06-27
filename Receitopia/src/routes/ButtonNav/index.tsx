import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Profile } from "../../screens/Profile";
import { MadeIt } from "../../screens/MadeIt";

const Stack = createNativeStackNavigator();

export const ButtonNav = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Profile">
                <Stack.Screen name="MadeIt" component={MadeIt}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}