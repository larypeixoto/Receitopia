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
      headerStyle: { backgroundColor: '#D8E1CE' },
      headerTintColor: '#829460',
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