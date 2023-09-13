import { useDimensions } from "@react-native-community/hooks";
import React from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";

// LOCAL IMPORTS
import AppText from "../AppText";
import colors from "../../config/colors";

const avatarSize = 50;
const AccountCard = ({
  Icon,
  avatar,
  first_text,
  second_text,
  reverse,
  style,
  showIconBorder = true,
}) => {
  const { width } = useDimensions().screen;
  const textWidth = width - 150;

  return (
    <View style={[styles.accountCard, style]}>
      <Image source={avatar} style={styles.avatar} />
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
          justifyContent: "space-between",
        }}
      >
        <View
          style={[
            styles.center,
            {
              flexDirection: reverse ? "column-reverse" : "column",
              maxWidth: textWidth,
            },
          ]}
        >
          <AppText numberOfLines={1} style={styles.first_text}>
            {first_text}
          </AppText>
          <AppText numberOfLines={1} style={styles.second_text}>
            {second_text}
          </AppText>
        </View>
        <View style={styles.icons}>
          <TouchableOpacity
            style={[styles.icon, { borderWidth: showIconBorder ? 1 : 0 }]}
          >
            {Icon}
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default AccountCard;

const styles = StyleSheet.create({
  accountCard: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  avatar: {
    height: avatarSize,
    width: avatarSize,
    borderRadius: 30,
  },
  center: {
    marginLeft: 10,
  },
  second_text: {
    color: colors.mediumText,
  },
  icon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: 5,
    borderColor: colors.border200,
    borderRadius: 30,
    height: 43,
    width: 43,
  },
  icons: {
    display: "flex",
    flexDirection: "row",
    marginRight: avatarSize,
  },
  first_text: {
    color: colors.primaryText,
    fontWeight: "bold",
    fontSize: 18,
  },
  wavingHand: {
    height: 15,
    width: 15,
  },
});
