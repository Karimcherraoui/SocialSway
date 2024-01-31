import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React, { useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import Home from "./src/screens/HomeScreen/Home";
import Faq from "./src/screens/Faq/Faq";
import { Ionicons } from "@expo/vector-icons";

import { StyleSheet } from "react-native";
import ModalSetting from "./src/components/Modal/ModalSetting";
// import Settings from "./src/screens/Settings/Settings"; // Import your Settings screen
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const TabNavigator = () => (
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
      component={Faq}
    />
  </Tab.Navigator>
);

const App = () => {
  const [visible, setVisible] = useState(false);

  const handleSetting = () => {
    // console.log("setting");
    setVisible(true);
  };

  return (
    <>
      <ModalSetting visible={visible} setVisible={setVisible} />
      <NavigationContainer>
        <Drawer.Navigator
          screenOptions={{
            headerTintColor: "white",
            headerTitleAlign: "left",
            headerRight: () => (
              <Ionicons
                name="settings-sharp"
                size={24}
                color="white"
                onPress={handleSetting}
              />
            ),
            headerRightContainerStyle: {
              marginEnd: 20,
            },
          }}
        >
          <Drawer.Screen
            name="AccueilDrawer"
            component={TabNavigator}
            options={{
              title: "Accueil",
              headerStyle: {
                backgroundColor: "#ff6666",
              },
            }}
          />
          <Drawer.Screen name="Faq" component={Faq} />
        </Drawer.Navigator>
      </NavigationContainer>
    </>
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
