import { StyleSheet, Dimensions} from 'react-native';
import { colors } from '../../constants/themes/colors';

const { height, width } = Dimensions.get("window");

export const styles = StyleSheet.create({
    container: {
     flex:1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    
    details: {
      height: height/ 2,
      justifyContent: 'space-around',
      alignItems:  'center',
    },

    text: {
      fontFamily: "Lato-Bold",
      fontSize: 20,
    },

    button: {
      flex:1,
      borderRadius: 20,
      color: colors.primary,
      marginTop: 20,
    },
  });
  