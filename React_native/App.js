import * as React from "react";
import { View, Text, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import AccountScreen from "./src/screens/AccountScreen";
import SigninScreen from "./src/screens/SigninScreen";
import SignupScreen from "./src/screens/SignupScreen";
import TrackCreateScreen from "./src/screens/TrackCreateScreen";
import TrackDetailScreen from "./src/screens/TrackDetailScreen";
import TrackListScreen from "./src/screens/TrackListScreen";

const MainStack = createStackNavigator();

function LoginFlow() {
  return (
    <MainStack.Navigator initialRouteName="Signup">
      <MainStack.Screen name="Signin" component={SigninScreen} />
      <MainStack.Screen name="Signup" options={{ headerShown: false }} component={SignupScreen} />
    </MainStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

const ListStack = createStackNavigator();

function TrackListFlow() {
  return (
    <ListStack.Navigator initialRouteName="TrackList">
      <ListStack.Screen name="TrackList" component={TrackListScreen} />
      <ListStack.Screen name="TrackDetail" component={TrackDetailScreen} />
    </ListStack.Navigator>
  );
}
function TabList() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={TrackListFlow} />
      <Tab.Screen name="TrackCreate" component={TrackCreateScreen} />
      <Tab.Screen name="Account" component={AccountScreen} />
    </Tab.Navigator>
  );
}

const RootStack = createStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <RootStack.Navigator mode="modal">
        <RootStack.Screen
          name="loginFlow"
          component={LoginFlow}
          options={{ headerShown: false }}
        />
        <RootStack.Screen
          name="mainFlow"
          component={TabList}
          options={{ headerShown: false }}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

export default App;
