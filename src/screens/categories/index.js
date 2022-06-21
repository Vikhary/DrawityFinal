import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { styles } from "./styles";

const CategoriesScreen = ({ navigation }) => {
    return (
        <View style = {styles.container} >
        <Text style={styles.text}> Categories Screen</Text>
        <Button title='Go to Products Screen' onPress={() => {navigation.navigate("Produts")}}/>
      </View>
    );
};

export default CategoriesScreen;