import { createDrawerNavigator } from "@react-navigation/drawer";
import { BottomTabs } from "../BottomTabs";
import React from "react";

export type DrawerParamList = {
  Home: { screen: "Home" };
  Search: { screen: "Search" };
  Profile: { screen: "Profile" };
};

const Drawer = createDrawerNavigator<DrawerParamList>();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: {
        backgroundColor: 'black',
        elevation: 0,
        shadowOpacity: 0,
        height: 100,
     },
        
        headerTintColor: '#829460',
        drawerStyle: { backgroundColor: '#829460' },
        drawerActiveTintColor: '#D8E1CE',
        drawerInactiveTintColor: '#ffffff',
        drawerPosition: 'right',
      }}
    >
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
