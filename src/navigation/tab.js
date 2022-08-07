import React from "react";
import { Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import IonicIcons from "@expo/vector-icons/Ionicons";
import MainNavigator from "./main";
import LikeNavigator from "./like";
import ProfileNavigator from "./profile";

import { colors } from "../constants/themes/colors";

const BottomTabs = createBottomTabNavigator()

const LabelBottomTab = (focused, label) => (
<Text
style={{
  color: focused ? colors.primary : colors.secondary,
  fontFamily: focused ? "Lato-Bold" : "Lato-Regular",
}}
>{label}</Text>
)

const TabNavigator = () => {
    return (
        <BottomTabs.Navigator
        initialRouteName="HomeTab"
        screenOptions={{
            headerShown:false,
      
        }}
        >
            <BottomTabs.Screen
            name= "HomeTab"
            component={MainNavigator} 
            options={{
                tabBarLabel:({ focused }) => LabelBottomTab(focused, "Home"),
                tabBarIcon: ({ focused }) => (
                    <IonicIcons
                      name={focused ? "home" : "home-outline"}
                      size={20}
                      color={focused ? colors.primary : colors.secondary}
                    />
                  ),
            }} 
            />
            <BottomTabs.Screen
            name= "ProfileTab"
            component={ProfileNavigator} 
            options={{
                tabBarLabel:({ focused }) => LabelBottomTab(focused, "Profile"),
                tabBarIcon: ({ focused }) => (
                    <IonicIcons
                      name={focused ? "man" : "man-outline"}
                      size={20}
                      color={focused ? colors.primary : colors.secondary}
                    />
                  ),
            }} 
            />

<BottomTabs.Screen
            name= "LikesTab"
            component={LikeNavigator} 
            options={{
                tabBarLabel:({ focused }) => LabelBottomTab(focused, "Likes"),
                tabBarIcon: ({ focused }) => (
                    <IonicIcons
                      name={focused ? "heart-sharp" : "heart-outline"}
                      size={20}
                      color={focused ? colors.primary : colors.secondary}
                    />
                  ),
            }} 
            />


        </BottomTabs.Navigator>

    )

}

export default TabNavigator;