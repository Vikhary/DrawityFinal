import React, { useEffect} from "react";
import { View, StyleSheet, Text, FlatList } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import PlaceItem from "../../components/place-item/index";
import { styles } from "./styles";
import { loadPlaces } from "../../store/reducers/place.slices";


const PicsScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const places = useSelector((state) => state.place.places );

  useEffect(() => {
    dispatch(loadPlaces());
  }, []);


  const onSelectPlace = (id) => {
    navigation.navigate("Detail", { placeId: id });
  }

  const renderItem = ({ item }) => (
    <PlaceItem {...item}  address='123 Calle , Ciudad, Distrito'  onSelect={onSelectPlace} />
  )

  const ListEmptyComponent = () => (
    <View style={styles.emptyContainer}>
      <Text>No hay lugares disponibles</Text>
    </View>
  )

  return (
    <FlatList 
      style={styles.container}
      data={places}
      keyExtractor={(item) => item.id.toString()}
      renderItem={renderItem}
      ListEmptyComponent={ListEmptyComponent}
    />
  );
};

export default PicsScreen;