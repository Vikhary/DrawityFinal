import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Ionicons from "@expo/vector-icons/Ionicons";
import { styles } from './styles';
import { colors } from "../../constants/themes/colors";


const ProfileItem = ({ item, navigation, onSelected  }) => {
    return (
      <View style={styles.container}>
         <View style={styles.containerDetail}>
            <View style={styles.detail}>
            <Text style={styles.detailInfo}>{item.info}</Text>
            </View>
             <TouchableOpacity onPress={() => onSelected (item.id)}>
             <Ionicons name="arrow-forward" size={20} color={colors.primary} />
            </TouchableOpacity>
             </View>
           </View>
    );
  };

  export default ProfileItem;