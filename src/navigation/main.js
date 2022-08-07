import React from 'react';
import { Platform, TouchableOpacity } from 'react-native';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import IonicIcons from "@expo/vector-icons/Ionicons";
import {CategoriesScreen, ProductDetailsScreen, ProductsScreen, OrdersScreen, CartScreen, ChatScreen} from '../screens/index';
import { colors } from '../constants/themes/colors';

const Stack = createNativeStackNavigator();

const isIOS = Platform.OS === "ios";

const MainNavigator = () => {
  return (
        <Stack.Navigator 
        initialRouteName="Categories" 
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
           name="Home" 
           component={CategoriesScreen}
           options={({ navigation }) => ({ 
            title: "Home",
            headerShown: true,
            headerRight: () => (
              <TouchableOpacity onPress={() => navigation.navigate("Chat")}>
                <IonicIcons
                  name="chatbox"
                  size={25}
                  color={colors.secondary}
                  />
              </TouchableOpacity>
            )
          })}
        />


<Stack.Screen 
           name="Chat" 
           component={ChatScreen}
           options={{
            headerShown: true,
          }}
           />

           <Stack.Screen 
           name="Products" 
           component={ProductsScreen}
           options={({route}) =>({
            title: route.params.title,

           }) }
         
           />
           <Stack.Screen 
           name="ProductDetails" 
           component={ProductDetailsScreen}
           options={({route, navigation}) =>({
            title: route.params.name,
            headerRight: () => (
              <TouchableOpacity onPress={() => navigation.navigate("Cart")}>
                <IonicIcons
                  name="cart"
                  size={25}
                  color={colors.secondary}
                  />
              </TouchableOpacity>
            )

           }) }
           />

            <Stack.Screen 
           name="Orders" 
           component={OrdersScreen}
           options={{
            headerShown: true,
          }}
           />

       <Stack.Screen
      name="Cart"
      component={CartScreen}
      options={({ navigation }) => ({ 
        title: "Cart",
        headerShown: true,
        headerRight: () => (
          <TouchableOpacity onPress={() => navigation.navigate("Orders")}>
            <IonicIcons
              name="add-circle-outline"
              size={25}
              color={colors.black}
              />
          </TouchableOpacity>
        )
      })}
    />
        </Stack.Navigator>
    )
}

export default MainNavigator;
