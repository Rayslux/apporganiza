import React, { Component } from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from "@react-navigation/native";
import { Rajdhani_600SemiBold } from "@expo-google-fonts/rajdhani";
import * as Font from "expo-font";
import Home from "./screens/Home";


const Tab = createBottomTabNavigator();

export default function App() {
  return(
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="HomeScreen" component={Home} />
      </Tab.Navigator>
    </NavigationContainer>
  );
  
}
