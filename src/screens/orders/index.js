import React, { useEffect } from "react";
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import { styles } from "./styles";
import { orders } from '../../data/orders';
import { OrderItem } from '../../components';
import { useDispatch, useSelector } from "react-redux";
import { getOrders, deleteOrder } from "../../store/actions/order.action";

const OrderScreen = () => {
  const dispatch = useDispatch();
  const orders = useSelector((state) => state.order.items);
  
  const onDeleteOrder = (id) => {
    dispatch(deleteOrder(id));
  };

  const renderItem = ({ item }) => (
    <OrderItem item={item} onDelete={onDeleteOrder} />
  );

  useEffect(() => {
    dispatch(getOrders());
  }, []);

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