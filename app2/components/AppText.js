import React from 'react'
import { Platform, StyleSheet, Text, } from 'react-native'

// LOCAL IMPORTS
import defaultStyles from '../config/styles'

const AppText = ({ style, children, numberOfLines, onPress }) => {
  return (
    <Text
      onPress={onPress}
      numberOfLines={numberOfLines}
      style={[styles.text, style]}
    >
      {children}
    </Text>
  );
};

export default AppText;

const styles = StyleSheet.create({
  text: {
    color: defaultStyles.colors.primaryText,
  }
});