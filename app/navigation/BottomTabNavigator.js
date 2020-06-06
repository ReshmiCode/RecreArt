import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";

import TabBarIcon from "../components/TabBarIcon";
import HomeScreen from "../screens/HomeScreen";
import ChallengeScreen from "../screens/ChallengeScreen";
import ProfileScreen from "../screens/ProfileScreen";
import TabBar from "../navigation/TabBar";

const BottomTab = createBottomTabNavigator();
const Stack = createStackNavigator();

export default function BottomTabNavigator({ navigation }) {
  navigation.setOptions({ headerShown: false });

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      tabBar={(props) => <TabBar {...props} />}
    >
      <BottomTab.Screen
        name="Home"
        component={ChallengeStack}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} name="md-code-working" />
          ),
        }}
      />
      <BottomTab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} name="md-book" />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

function ChallengeStack() {
  return (
    <Stack.Navigator headerMode={false}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Challenge" component={ChallengeScreen} />
    </Stack.Navigator>
  );
}
