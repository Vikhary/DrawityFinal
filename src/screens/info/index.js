import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList, Modal, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { colors } from '../../constants/themes/colors';
import { styles } from "./styles";

const InfoScreen = ({navigation, route }) => {
  const [text, setText] = useState("");
  const [list, setList] = useState([]);
  const [itemSelected, setItemSelected] = useState({});
  const [modalVisible, setModalVisible] = useState(false);

  const handleOnChangeText = (text) => {
    setText(text);
  };

  const addItem = () => {
    if (text !== "") {
    setList((currentList) => [
    ...currentList,
    { id: Math.random(), value: text},
  ]);
    setText("");
  }
  };

  const renderItem = ({item}) => (
    <View key={item.id} style={styles.containerItemList}>
    <Text style={styles.itemList}>{item.value}</Text>
    <TouchableOpacity 
    onPress={() => onHandlerModal(item.id)} 
    style={styles.deleteButton}> 
    <Text style={styles.deleteButtonText}>X</Text>
    </TouchableOpacity>
  </View>

  );

  const keyExtractor = (item)  => item.id.toString();

  const onHandlerDelete = (id) => {
    setList((currentList) => currentList.filter((item) => item.id  !== id ));
    setItemSelected ({});
    setModalVisible(!modalVisible);

  };

  const onHandlerModal = (id) => {
    setItemSelected(list.filter((item) => item.id === id)[0]);
    setModalVisible(!modalVisible);
  };


    return (
      <View style={styles.container}>
      <View style={styles.content}>
        <TextInput 
        placeholder='New task' 
        style={styles.input}
        placeholderTextColor= "#212121"
        value={text}
        onChangeText={(text) => handleOnChangeText(text)}
        />
        <Button title='ADD' onPress={() => addItem()} color = "#B9CCE9"  />
 </View>
       
     <FlatList 
     data ={list} 
     renderItem = {renderItem}
     keyExtractor= {keyExtractor}
     style={styles.containerList}
     />
     <Modal
     animationType='slide'
     visible={modalVisible}
     onRequestClose={() => null}
     >
      <View style={styles.modalCotent}>
      <View style={styles.modalTitleContainer}>
        <Text style={styles.modalTitle}> Delete Item</Text>
        <TouchableOpacity 
        style={styles.deleteButton} 
        onPress={()=> setModalVisible(!modalVisible)}>
          <Text>X</Text>
         </TouchableOpacity>
        </View>
        <Text style={styles.modalText}> Are you sure? </Text>
        <Text style={styles.modalMessage}>{itemSelected.value}</Text>
        <Button 
        style={styles.addButton} 
        title='Okay' 
        onPress={() => onHandlerDelete(itemSelected.id)} 
        color = "#AB83CD"
        />
       </View>
      </Modal>
    </View>
    );
}

export default InfoScreen;