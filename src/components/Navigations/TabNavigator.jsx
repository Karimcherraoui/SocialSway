import React from "react";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import Home from "../../screens/HomeScreen/Home";
import Selectione from "../../screens/Selectione/Selectione";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

export const Tab = createBottomTabNavigator();


export const TabNavigator = () => (
  <Tab.Navigator
    screenOptions={{
      headerShown: false,
      tabBarStyle: {
        backgroundColor: "#ff6666",
        justifyContent: "center",
        alignItems: "center",
        borderTopWidth: 0,
      },
    }}
  >
    <Tab.Screen
      options={{
        tabBarLabelStyle: {
          fontSize: 13,
          color: "white",
        },
        tabBarIcon: () => <Entypo name="home" size={24} color="white" />,
      }}
      name="Accueil"
      component={Home}
    />
    <Tab.Screen
      options={{
        tabBarLabelStyle: {
          fontSize: 13,
          color: "white",
        },
        tabBarIcon: () => <AntDesign name="like1" size={24} color="white" />,
      }}
      name="Selectione"
      component={Selectione}
    />
  </Tab.Navigator>
);
