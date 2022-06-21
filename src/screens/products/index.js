import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { styles } from "./styles";

const ProductsScreen = ({navigation}) => {
    return (
        <View style = {styles.container} >
        <Text> Products  Screen</Text>
        <Button title='Go to Product Details Screen' onPress={() => {navigation.navigate("ProductDetails")}}/>
      </View>
    );
}

export default ProductsScreen;