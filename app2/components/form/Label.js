import { StyleSheet, View } from 'react-native'
import React from 'react'
import AppText from '../AppText'

const Label = ({title, style}) => {
  return (<AppText style={[styles.label, style]}>{title }</AppText>
  )
}

export default Label

const styles = StyleSheet.create({
  label: {
    fontWeight: "bold",
    fontSize: 16,
  }
});