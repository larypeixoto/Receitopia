import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DrawerNavigator from "../Drawer"; 
import { Register } from "../../screens/Register";
import { SingIn } from "../../screens/SingIn";
import { MadeIt } from "../../screens/MadeIt";
import { ToDo } from "../../screens/ToDo";

export type RootStackParamList = {
  Auth: undefined;
  Register: undefined;
  SingIn: undefined;
  AppDrawer: undefined; 
  MadeIt: undefined;
  ToDo: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export function StackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="SingIn" component={SingIn} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="AppDrawer" component={DrawerNavigator} />
        <Stack.Screen name="MadeIt" component={MadeIt} />
        <Stack.Screen name="ToDo" component={ToDo} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
