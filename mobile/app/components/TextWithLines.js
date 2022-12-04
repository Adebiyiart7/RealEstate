import { StyleSheet, View } from 'react-native'
import React from 'react'

// LOCAL IMPORTS
import defaultStyles from '../config/styles'
import AppText from './AppText'

const TextWithLines = ({ children, style, textStyle }) => {
  return (
    <View style={[styles.container, style]}>
      <AppText style={[styles.text, textStyle]}>{children}</AppText>
    </View>
  );
};

export default TextWithLines

const styles = StyleSheet.create({
  container: {
    borderBottomColor: defaultStyles.colors.border100,
    borderBottomWidth: 1,
    alignItems: "center",
  },
  text: {
    position: "absolute",
    top:-12,
    paddingHorizontal: 10,
    backgroundColor: defaultStyles.colors.white,
  }
});