import React, { useState } from "react";
import { ScrollView, View, Text, TextInput, Button } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { savePlace } from '../../store/reducers/place.slices';
import ImageSelector from "../../components/camera-item";
import { colors } from '../../constants/themes/colors';
import { styles } from "./styles";

  const ArtScreen = ({ navigation }) => {
 const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");

  const onHandleTitleChange = (text) => setTitle(text);
  const onHandleSubmit = () => {
    dispatch(savePlace(title, image));
    navigation.navigate("Pics");
  }
  
  const onHandleImaageSelect = (imageUrl) => setImage(imageUrl);
    
  
    return (
      <ScrollView style={styles.container}>
       <View style={styles.content}>
          <Text style={styles.title}>Titulo</Text>
          <TextInput style={styles.input} placeholder="Nueva ubicacion" onChangeText={onHandleTitleChange} value={title}/>
          <ImageSelector onImage={onHandleImaageSelect} />
          <Button 
            title="Grabar Direccion"
            color={colors.primary}
            onPress={onHandleSubmit}
          />
       </View>
      </ScrollView>
    );
  };

export default ArtScreen;
