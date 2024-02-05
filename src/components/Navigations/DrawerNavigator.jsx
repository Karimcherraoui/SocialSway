import React, { useState } from "react";
import { Entypo } from "@expo/vector-icons";
import Faq from "../../screens/Faq/Faq";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { TabNavigator } from "./TabNavigator";
import { createDrawerNavigator } from "@react-navigation/drawer";
import ModalSetting from "../Modal/ModalSetting";

const Drawer = createDrawerNavigator();

export const DrawerNavigator = () => {
  const [visible, setVisible] = useState(false);

  const handleSetting = () => {
    setVisible(true);
  };

  return (
    <>
      <ModalSetting visible={visible} setVisible={setVisible} />

      <Drawer.Navigator
        screenOptions={{
          headerTintColor: "white",
          headerStyle: {
            backgroundColor: "#ff6666",
          },
          headerTitleAlign: "left",
          headerRight: () => (
            <Ionicons name="settings-outline" size={24} color="white" onPress={handleSetting} />
          ),

          headerRightContainerStyle: {
            marginEnd: 20,
          },
        }}
      >
        <Drawer.Screen
          options={{
            drawerLabel: "Home",
            drawerIcon: () => <Entypo name="home" size={24} color="black" />,
          }}
          name="Home"
          component={TabNavigator}
        />
        <Drawer.Screen
          options={{
            drawerLabel: "Faq",
            drawerIcon: () => (
              <MaterialCommunityIcons
                name="help-rhombus"
                size={24}
                color="black"
              />
            ),
          }}
          name="Faq"
          component={Faq}
        />
      </Drawer.Navigator>
    </>
  );
};
