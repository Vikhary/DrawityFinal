import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../../constants/themes/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    },

  content:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    margintop: 20,
    marginHorizontal: 20,
},

  input: {
    borderBottomWidth: 1,
    borderBottomColor: colors.primary,
    flex: 0.85,
    
   },

   containerList: {
   marginHorizontal: 20,
  },

  itemList: {
    fontSize: 14, 
    fontFamily: 'Lato-Regular', 
  },

  containerItemList: {
   flexDirection: 'row',
   justifyContent: 'space-between',
   alignItems: 'center',
   marginHorizontal: 20,
   marginVertical: 10,
  },

  deleteButton: {
    backgroundColor: colors.secondary,
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 10,
  },

  deleteButtonText: {
    color: colors.white,
    fontsize: 14,
    fontWeight: 'bold',
    fontFamily: 'Lato-Bold',
  },

  modalCotent: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: 'center',
  },

 modalTitleContainer: {
 flexDirection: 'row',
 justifyContent: 'space-evenly',
 alignItems: 'center',
 borderRadius: 10,
},
  modalTitle: {
   fontSize: 18,
   marginVertical: 20,
   marginHorizontal: 20,
   fontFamily: 'Lato-Bold',
  },

  modalText: {
    fontSize: 16,
    marginHorizontal: 20,
    fontFamily: 'Lato-Bold',
   },

   modalMessage: {
    marginHorizontal: 20,
    marginVertical: 20,
    
   },


  });
  