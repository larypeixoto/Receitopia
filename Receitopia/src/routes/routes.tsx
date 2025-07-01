import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { BottomTabs } from "./BottomTabs";

import { Register } from "../screens/Register";
import { HomePage } from "../screens/Home";
import { Profile } from "../screens/Profile";
import { SingIn } from "../screens/SingIn";
import { MadeIt } from "../screens/MadeIt";
import { ToDo } from "../screens/ToDo";
import { RecipeDetail } from "../screens/Receita";
const Stack = createNativeStackNavigator();

declare global {
   namespace ReactNavigation{
    interface RootParamList{
      HomePage: undefined
      Register: undefined
      SingIn: undefined
      Profile: undefined
      MadeIt: undefined
      ToDo: undefined
      HomeTabs: undefined
    }
   }
}

export const Routes = () => {
  return (
    <NavigationContainer>
      
      <Stack.Navigator screenOptions={{ headerShown: false }}>
          {/* <Stack.Screen name='RecipeDetail' component={RecipeDetail} /> */}


          <Stack.Screen name='SingIn' component={SingIn} />
          <Stack.Screen name='Register' component={Register}/>
          <Stack.Screen name='HomePage' component={HomePage}/>
          <Stack.Screen name='HomeTabs' component={BottomTabs}/>
          <Stack.Screen name='MadeIt' component={MadeIt}/>
          <Stack.Screen name='ToDo' component={ToDo}/>
          <Stack.Screen name='Profile' component={Profile}/>
      </Stack.Navigator>
     
    </NavigationContainer>
  );
};

