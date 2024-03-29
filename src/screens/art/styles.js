import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../../constants/themes/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    margin: 20,
  },
  title: {
    fontSize: 18,
    marginBottom: 20
  },
  input: {
    borderBottomColor: colors.primary,
    borderBottomWidth: 1,
    marginBottom: 20,
    padding: 5,
  }
  });
  