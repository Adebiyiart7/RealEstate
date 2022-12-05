import { StyleSheet, View } from 'react-native'
import React from 'react'
import defaultStyles from '../config/styles'

const ItemSeparatorComponent = () => {
  return (
    <View style={styles.view} />
  )
}

export default ItemSeparatorComponent

const styles = StyleSheet.create({
  view: {
    borderBottomWidth: 1,
    borderBottomColor: defaultStyles.colors.border100,
  },
});