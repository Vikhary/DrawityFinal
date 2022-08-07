import React from 'react';
import { View, FlatList, TouchableOpacity, Text,  } from 'react-native';
import { chat } from '../../data/chat';
import { ChatItem } from '../../components';
import { styles } from "./styles";


const ChatScreen = () => {
    const total = 35;

    const onHandlerDeleteChat = (id) =>  {
        console.log(id);
    }


    const renderItem = ({item}) => ( 
    <ChatItem item= {item} onDelete = {onHandlerDeleteChat}/>
    );

    return (
        <View style = {styles.container} >
      <View style = {styles.cartList}>
        <FlatList
        data={chat}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
         />
         </View>
         <View style = {styles.footer}>
            
         </View>
       </View>
    );
};

export default ChatScreen;