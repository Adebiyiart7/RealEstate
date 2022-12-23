import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

// LOCAL IMPORTS
import AppText from './AppText'
import defaultStyles from '../config/styles'
import ItemSeparatorComponent from './ItemSeparatorComponent'
import Rating from './Rating'

const RateBooking = () => {
  return (
    <View style={styles.container}>
      <AppText style={styles.title}>Leave a Review</AppText>
      <ItemSeparatorComponent style={styles.separator} />
      <AppText style={styles.reviewQuestion}>How was your expirence with ... ?</AppText>
      <Rating />
    </View>
  )
}

export default RateBooking

const styles = StyleSheet.create({
  container: {
    padding: 16,
    paddingTop: 0,
  },
  reviewQuestion: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 17,
  },
  separator: {
    marginVertical: 16,
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
  }
});