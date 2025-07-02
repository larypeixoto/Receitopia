import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DrawerNavigator from "../Drawer"; 
import { Register } from "../../screens/Register";
import { SingIn } from "../../screens/SingIn";

declare global {
   namespace ReactNavigation{
    interface RootParamList{
      HomePage: undefined
      Register: undefined
      SingIn: undefined
      Profile: undefined
      HomeTabs: undefined
      AppDrawer: undefined
      Auth: undefined
    }
   }
}


const Stack = createNativeStackNavigator();

export function StackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="SingIn" component={SingIn} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="AppDrawer" component={DrawerNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
