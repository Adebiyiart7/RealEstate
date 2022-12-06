import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppText from '../AppText'
import defaultStyles from '../../config/styles'

const Card1 = ({ Icon, title, subTitle, selected }) => {
  const selectedStyles = {
    borderWidth: 2,
borderColor: defaultStyles.colors.primaryColor,
  }
  return (
    <View style={{...styles.card, ...selected && selectedStyles}}>
      <View style={styles.icon}>
        {Icon}
      </View>
      <View style={styles.right}>
        <AppText numberOfLines={1} style={styles.title}>{title}</AppText>
        <AppText numberOfLines={1} style={styles.subTitle}>{subTitle}</AppText>
      </View>
    </View>
  )
}

export default Card1

const styles = StyleSheet.create({
  card: {
    display: "flex",
    flexDirection: "row",
    borderWidth: 1,
    borderRadius: 25,
    borderColor: defaultStyles.colors.border100,
    padding: 16,
    alignItems: "center",
    marginVertical: 8,
  },
  icon: {
    backgroundColor: defaultStyles.colors.lightBackground,
    borderRadius: "50%",
    padding: 20,
  },
  right: {
    display: "flex",
    flexDirection: "column",
    marginLeft: 16,
  },
  subTitle: {
    maxWidth: 180,
    fontWeight: "600",
  },
  title: {
    fontSize: 12,
    color: defaultStyles.colors.mediumText
  },
});