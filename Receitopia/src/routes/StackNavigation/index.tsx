import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DrawerNavigator from "../Drawer"; 
import { Register } from "../../screens/Register";
import { SingIn } from "../../screens/SingIn";
import { RecipeDetail } from "../../screens/Receita";
import { Profile } from "../../screens/Profile";


export type ExportedRootParamList = {
  HomePage: undefined;
  Register: undefined;
  SingIn: undefined;
  Profile: undefined;
  MadeIt: undefined;
  ToDo: undefined;
  HomeTabs: undefined;
  AppDrawer: undefined
  Auth: undefined
  RecipeDetail: { id: string };
}
declare global {
   namespace ReactNavigation{
     interface RootParamList extends ExportedRootParamList {}
    // interface RootParamList{
    //   HomePage: undefined
    //   Register: undefined
    //   SingIn: undefined
    //   Profile: undefined
    //   MadeIt: undefined
    //   ToDo: undefined
    //   HomeTabs: undefined
    //   RecipeDetail: { id: string }
    // }
   }
}
const Stack = createNativeStackNavigator();
export const StackNavigator = () => {
  return (
    <NavigationContainer>
      
      <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name='SingIn' component={SingIn} />
          <Stack.Screen name='Register' component={Register}/>
           <Stack.Screen name='RecipeDetail' component={RecipeDetail} />
          <Stack.Screen name='AppDrawer' component={DrawerNavigator}/>
          <Stack.Screen name='Profile' component={Profile}/>
      </Stack.Navigator>
     
    </NavigationContainer>
  );
};