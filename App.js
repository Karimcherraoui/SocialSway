import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React, { useState } from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import ModalSetting from "./src/components/Modal/ModalSetting";
import Profile from "./src/screens/profileScreen/Profile";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet } from "react-native";
import { DrawerNavigator } from "./src/components/Navigations/DrawerNavigator";

const Stack = createNativeStackNavigator();

const App = () => {

  return (

      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Go Back"
            component={DrawerNavigator}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Profile"
            component={Profile}
            options={{
              headerTitle: "Profile",
              headerStyle: {
                backgroundColor: "#ff6666",
              },
              headerTintColor: "white",
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  iconSetting: {
    position: "absolute",
    top: 70,
    right: 20,
  },

  header: {
    flex: 1.7,
  },
  menu: {
    flexDirection: "row",
    position: "absolute",
    top: 70,
    left: 10,
    gap: 30,
    alignItems: "center",
  },
  accueil: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
  appBar: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginBottom: 20,
  },
  text: {
    color: "white",
  },
  bar: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "50%",
  },
});
