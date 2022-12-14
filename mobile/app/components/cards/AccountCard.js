import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import AppText from "../AppText";
import colors from "../../config/colors";

const avatarSize = 50;
const AccountCard = ({ Icon, avatar, first_text, second_text }) => {
  return (
    <View style={styles.accountCard}>
      <Image source={avatar} style={styles.avatar} />
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
          justifyContent: "space-between"
        }}
      >
        <View style={styles.center}>
          <AppText style={styles.first_text}>
            {`${first_text} `}
            <Image
              source={require(".././../assets/images/waving-hand.png")}
              style={styles.wavingHand}
            />
          </AppText>
          <AppText style={styles.second_text}>{second_text}</AppText>
        </View>
        <TouchableOpacity style={styles.icon}>{Icon && Icon}</TouchableOpacity>
      </View>
    </View>
  );
};

export default AccountCard;

const styles = StyleSheet.create({
  accountCard: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center"
  },
  avatar: {
    height: avatarSize,
    width: avatarSize,
    borderRadius: 30
  },
  center: {
    marginLeft: 10
  },
  first_text: {
    color: colors.mediumText
  },
  icon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    padding: 5,
    borderColor: colors.border100,
    borderRadius: 30,
    height: 43,
    width: 43,
    marginRight: avatarSize,
  },
  second_text: {
    color: colors.primaryText,
    fontWeight: "bold",
    fontSize: 18
  },
  wavingHand: {
    height: 15,
    width: 15
  }
});
