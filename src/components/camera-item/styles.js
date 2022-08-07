import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../../constants/themes/colors';

const styles = StyleSheet.create({
    container: {
        marginBottom: 20,
    },

    preview: {
        width:"100%",
        height: 200,
        marginBottom: 20,
        justifyContent: "center",
        alignItems: "center",
        borderColor: colors.primary,
        borderWidth: 1,
    },

    image: {
        width:"100%",
        height: "100%",
    },

});
