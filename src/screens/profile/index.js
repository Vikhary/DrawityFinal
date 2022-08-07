import React from 'react';
import { View, FlatList, TouchableOpacity, Text,  } from 'react-native';
import { profile } from '../../data/profile';
import { ProfileItem} from '../../components';
import { styles } from "./styles";


const ProfileScreen = ({ navigation }) => {
    

    const onSelected = () =>  {
      navigation.navigate("Info" , {
        
   });
    };


    const renderItem = ({item}) => ( 
    <ProfileItem item= {item} onSelected={onSelected}/>
    );

    return (
        <View style = {styles.container} >
      <View style = {styles.profileList}>
        <FlatList
        data={profile}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
         />
         </View>
         <View style = {styles.footer}>
            
         </View>
       </View>
    );
};


export default ProfileScreen;