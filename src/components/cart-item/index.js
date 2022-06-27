import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Ionicons from "@expo/vector-icons/Ionicons";
import { styles } from './styles';
import { colors } from "../../constants/themes/colors";

const CartItem = ({ item, onDelete }) => {
    return (
      <View style={styles.container}>
         <View style={styles.headerContainer}>
            <Text style={styles.name}>{item.name}</Text>
          </View>
          <View style={styles.containerDetail}>
            <View style={styles.detail}>
            <Text style={styles.detailQty}>{item.quantity}</Text>
            <Text style={styles.detailprice}>${item.price}</Text>
             </View>
             <TouchableOpacity onPress={() => onDelete(item.id)}>
             <Ionicons name="trash" size={20} color={colors.primary} />
            </TouchableOpacity>
             </View>
           </View>
    );
  };

  export default CartItem;