import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { addItem } from "../../store/actions/cart.action";
import { colors } from "../../constants/themes/colors";
import { styles } from "./styles";

const ProductDetailsScreen = () => {
  const dispatch = useDispatch();
  const product = useSelector(state => state.product.selected);


  const onHandlerAddToCart =(item)=>{
    dispatch(addItem(product));
  };

    return (
        <View style = {styles.container} >
          <View style = {styles.details}>
        <Text style = {styles.text}>id: {product.id} </Text>
        <Text style = {styles.text}>{product.name} </Text>
        <Text style = {styles.text}>{product.description} </Text>
        <Text style = {styles.text}>{product.material} </Text>
        <Text style = {styles.text}>${product.price.toFixed(2)} </Text>
        </View>
        <Button  
        title='Agregar' 
        color={colors.primary}
        onPress={() => onHandlerAddToCart()
        }>
         </Button>
  
      </View>
    );
};

export default ProductDetailsScreen;