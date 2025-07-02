import { createDrawerNavigator } from "@react-navigation/drawer";
import React from "react";
import { TouchableOpacity, View } from "react-native";
import { Title } from "../../components/Texts/Title";
import { BottomTabs } from "../BottomTabs";

export type DrawerParamList = {
  HomePage: { screen: "HomePage" };
  Search: { screen: "Search" };
  Profile: { screen: "Profile" };
};

const Drawer = createDrawerNavigator<DrawerParamList>();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#D8E1CE",
          elevation: 0,
          shadowOpacity: 0,
          height: 100,
        },

        headerTintColor: "#829460",
        drawerStyle: { backgroundColor: "#829460" },
        drawerActiveTintColor: "#D8E1CE",
        drawerInactiveTintColor: "#ffffff",
        drawerPosition: "right",
      }}
    >
      <Drawer.Screen
        name="HomePage"
        component={BottomTabs}
        initialParams={{ screen: "HomePage" }}
        options={({ navigation }) => ({
          drawerLabel: "Home",
          headerTitle: () => (
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                flex: 1,
                justifyContent: "center",
              }}
            >
              <Title title={"Receitopia"} />
              <TouchableOpacity
                onPress={() => navigation.toggleDrawer()}
                style={{
                  position: "absolute",
                  justifyContent: "space-between",
                }}
              ></TouchableOpacity>
            </View>
          ),
        })}
      />

      <Drawer.Screen
        name="Search"
        component={BottomTabs}
        initialParams={{ screen: "Search" }}
        options={({ navigation }) => ({
          drawerLabel: "Search",
          headerTitle: () => (
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                flex: 1,
                justifyContent: "center",
              }}
            >
              <Title title={"Receitopia"} />
              <TouchableOpacity
                onPress={() => navigation.toggleDrawer()}
                style={{
                  position: "absolute",
                  justifyContent: "space-between",
                }}
              ></TouchableOpacity>
            </View>
          ),
        })}
      />

      <Drawer.Screen
        name="Profile"
        component={BottomTabs}
        initialParams={{ screen: "Profile" }}
        options={({ navigation }) => ({
          drawerLabel: "Profile",
          headerTitle: () => (
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                flex: 1,
                justifyContent: "center",
              }}
            >
              <Title title={"Receitopia"} />
              <TouchableOpacity
                onPress={() => navigation.toggleDrawer()}
                style={{
                  position: "absolute",
                  justifyContent: "space-between",
                }}
              ></TouchableOpacity>
            </View>
          ),
        })}
      />
    </Drawer.Navigator>
  );
}
