import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../../screens/HomeScreen/Home";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import Menu from "../Buttons/Menu";
import { createDrawerNavigator } from "@react-navigation/drawer";
import TabBar from "./TabBar";

const Draw = createDrawerNavigator();

export default function Drawer() {
  return (
    <>
      <Draw.Navigator>
        <Draw.Screen
          name={"Accueil"}
          component={Home}
          options={{
            drawerIcon: () => <Entypo name="home" size={24} color="black"/>,
          }}
        />
      </Draw.Navigator>
    </>
  );
}
