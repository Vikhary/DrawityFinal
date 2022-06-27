import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { styles } from "./styles";
import { orders } from '../../data/orders';
import { OrderItem } from '../../components';

const onDeleteOrder = (id) => {
    dispatch(deleteOrder(id));
  };

  const renderItem = ({ item }) => (
    <OrderItem item={item} onDelete={onDeleteOrder} />
  );

const OrderScreen = () => {
    return (
        <View style = {styles.container} >
      <View style={styles.orderList}>
        <FlatList
          data={orders}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
       </View>
    );
};

export default OrderScreen;