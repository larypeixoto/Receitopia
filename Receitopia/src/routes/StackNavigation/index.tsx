import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Profile } from "../../screens/Profile";
import { RecipeDetail } from "../../screens/Receita";
import { Register } from "../../screens/Register";
import { SingIn } from "../../screens/SingIn";
import DrawerNavigator from "../Drawer";

export type ExportedRootParamList = {
  HomePage: undefined;
  Register: undefined;
  SingIn: undefined;
  Profile: undefined;
  MadeIt: undefined;
  ToDo: undefined;
  HomeTabs: undefined;
  AppDrawer: undefined;
  Auth: undefined;
  RecipeDetail: { id: string };
};
declare global {
  namespace ReactNavigation {
    interface RootParamList extends ExportedRootParamList {}
  }
}
const Stack = createNativeStackNavigator();
export const StackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="SingIn" component={SingIn} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="RecipeDetail" component={RecipeDetail} />
        <Stack.Screen name="AppDrawer" component={DrawerNavigator} />
        <Stack.Screen name="Profile" component={Profile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
