import React from 'react';
import { Platform } from 'react-native';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {LikesScreen, ArtScreen, PicsScreen, DetailScreen } from '../screens/index';
import { colors } from '../constants/themes/colors';

const Stack = createNativeStackNavigator();

const isIOS = Platform.OS === "ios";

const LikeNavigator = () => {
  return (
        <Stack.Navigator 
        initialRouteName="Like" 
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
           name="Like" 
           component={LikesScreen}
           options={{
            headerShown: true,
          }}
           />

<Stack.Screen 
           name="Art" 
           component={ArtScreen}
           options={{
            headerShown: true,
          }}
           />

           
<Stack.Screen 
           name="Pics" 
           component={PicsScreen}
           options={{
            headerShown: true,
          }}
           />

<Stack.Screen 
           name="Detail" 
           component={DetailScreen}
           options={{
            headerShown: true,
          }}
           />
           
        </Stack.Navigator>
    )
}

export default LikeNavigator;