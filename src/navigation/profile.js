import React from 'react';
import { Platform, TouchableOpacity } from 'react-native';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {ProfileScreen, InfoScreen } from '../screens/index';
import IonicIcons from "@expo/vector-icons/Ionicons";
import { colors } from '../constants/themes/colors';

const Stack = createNativeStackNavigator();

const isIOS = Platform.OS === "ios";

const ProfileNavigator = () => {
  return (
        <Stack.Navigator 
        initialRouteName="Profile" 
        screenOptions={{
          headerStyle: {
            backgroundColor: isIOS ? colors.secondary : colors.primary,
          },
          headerTintColor: isIOS ? colors.black : colors.white,
          headerTitleStyle: {
            fontFamily: "Lato-Bold",
          },
         }}
        >
           <Stack.Screen 
           name="Profile" 
           component={ProfileScreen}
           options={{
            headerShown: true,
          }}
        />

<Stack.Screen 
           name="Info" 
           component={InfoScreen}
           options={{
            headerShown: true,
          }}
           />
           
        </Stack.Navigator>
    )
}

export default ProfileNavigator;