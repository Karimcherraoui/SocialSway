import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../../screens/HomeScreen/Home";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import Menu from "../Buttons/Menu";
import Drawer from "./Drawer";
import { createDrawerNavigator } from "@react-navigation/drawer";

const Tab = createBottomTabNavigator();

export default function TabBar() {
  return (
    <>
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: {
            backgroundColor: "#ff6666",
          },
          tabBarLabelStyle: {
            color: "white",
          },
        }}
      >
        <Tab.Screen
          name="Accueil"
          component={Home}
          options={{
            headerShown: false,
            tabBarIcon: () => <Entypo name="home" size={24} color="white" />,

          }}
        />
        <Tab.Screen
          name="selection"
          component={Home}
          options={{
            tabBarIcon: () => (
              <AntDesign name="like1" size={24} color="white" />
            ),
          }}
          
        />
       
      </Tab.Navigator>
    </>
  );
}
