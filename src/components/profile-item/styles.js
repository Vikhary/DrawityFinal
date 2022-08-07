import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../../constants/themes/colors';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderBottomWidth: 2,
        margin: 10,
        height: 50,
        borderBottomColor: colors.primary,
        borderRadius: 10,
        backgroundColor: colors.white,
        shadowColor: colors.shadow,
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        elevation: 3,
        padding: 10,
    },
    headerContainer: {},
    header: {
        fontSize: 18,
        fontFamily: 'Lato-Bold',
    },
    containerDetail: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 4,
        flex: 1,
    },

    detail: {},
    
    detailInfo: {
        fontSize: 16,
        fontFamily: 'Lato-Regular',
    },
   

  });
  