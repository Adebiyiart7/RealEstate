import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import colors from '../../config/colors';

const ChatCard = ({fromMe, item}) => {
  return (
    <View style={[styles.card, fromMe ? styles.fromMeCard : {}]}>
      <Text style={[styles.cardText, fromMe ? styles.fromMeCardText : {}]}>
        {item.message}
      </Text>
    </View>
  );
}

export default ChatCard

const radius = 18;
const smallRadius = 7;

const styles = StyleSheet.create({
  card: {
    display: "flex",
    alignSelf: "flex-start",
    backgroundColor: colors.background200,
    borderRadius: radius,
    marginVertical: 10,
    padding: 18,
    maxWidth: "80%",
    borderBottomLeftRadius: smallRadius
  },
  fromMeCard: {
    alignSelf: "flex-end",
    backgroundColor: colors.primaryColor,
    borderBottomLeftRadius: radius,
    borderBottomRightRadius: smallRadius
  },
  cardText: {
    fontSize: 16
  },
  fromMeCardText: {
    color: colors.white
  }
});