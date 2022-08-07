import React from 'react';
import { View, FlatList } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { LikeItem } from "../../components/index";
import { like } from '../../data/like';

import { styles } from "./styles";

const LikesScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  
 

  const onSelected = ( item ) => {
    navigation.navigate("Art" , {
      name: item.name,
 });
    
 };

  const renderItem = ({ item }) => (
    <LikeItem item={item} onSelected={onSelected} />
  );
    return (
        <View style = {styles.container} >
       <FlatList
        data={like}
        renderItem={renderItem} 
        keyExtractor={(item) => item.id}
        numColumns={2}
      />
      </View>
    );
};


export default LikesScreen;