import { createDrawerNavigator } from "@react-navigation/drawer";
import { BottomTabs } from "../BottomTabs";
import React from "react";
import { HomePage } from "../../screens/Home";

export type DrawerParamList = {
   Home: {screen: "Home"}
   Search: {screen: "Search"}
   Profile: {screen: "Profile"};
};

const Drawer = createDrawerNavigator<DrawerParamList>();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator screenOptions={{
      headerShown: true,
      headerStyle: { backgroundColor: '#D8E1CE' },
      headerTintColor: '#829460',
      drawerStyle : { backgroundColor: '#829460' }, 
      drawerActiveTintColor: '#D8E1CE',
      drawerInactiveTintColor: '#ffffff',
    }}>
      <Drawer.Screen
        name="Home"
        component={BottomTabs}
        options={{drawerLabel: "Home", headerTitle: () => null}} /> 
      <Drawer.Screen
        name="Search"   
        component={BottomTabs}
        initialParams={{ screen: "Search" }}
        options={{drawerLabel: "Search", headerTitle: () => null}}  
        />
      <Drawer.Screen
        name="Profile"
        component={BottomTabs}
        initialParams={{ screen: "Profile" }}
        options={{drawerLabel: "Profile", headerTitle: () => null}}
        />
          
           
    </Drawer.Navigator>
    
  );
}