import React from 'react'
import { StyleSheet, Text, } from 'react-native'

// LOCAL IMPORTS
import defaultStyles from '../config/styles'

const AppText = ({ style, children, ...otherProps }) => {
  return <Text {...otherProps} style={[styles.text, style]}>{children}</Text>;
};

export default AppText;

const styles = StyleSheet.create({
  text: {
    color: defaultStyles.colors.primaryText,
  }
});