import { useWindowDimensions } from "react-native";
import React from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";

// LOCAL IMPORTS
import AppText from "../AppText";
import colors from "../../config/colors";
import { LIGHT, useTheme } from "../../contexts/ThemeContext";

const avatarSize = 50;
const AccountCard = ({
  Icon,
  avatar,
  first_text: firstText,
  second_text,
  reverse,
  style,
  showIconBorder = true,
}) => {
  const { state } = useTheme();
  const { width } = useWindowDimensions();
  const textWidth = width - 150;
  const isLight = state.theme === LIGHT;
  const secondTextStyles = isLight
    ? styles.secondTextLight
    : styles.secondTextDark;
  const firstTextStyles = isLight
    ? styles.firstTextLight
    : styles.firstTextDark;
  const iconStyles = isLight ? styles.iconLight : styles.iconDark;

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
          <AppText
            numberOfLines={1}
            style={[styles.firstText, firstTextStyles]}
          >
            {firstText}
          </AppText>
          <AppText numberOfLines={1} style={secondTextStyles}>
            {second_text}
          </AppText>
        </View>
        <View style={styles.icons}>
          <TouchableOpacity
            style={[
              styles.icon,
              iconStyles,
              { borderWidth: showIconBorder ? 1 : 0 },
            ]}
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
  secondTextLight: {
    color: colors.light.mediumText,
  },
  secondTextDark: {
    color: colors.dark.mediumText,
  },
  icon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: 5,
    borderRadius: 30,
    height: 43,
    width: 43,
  },
  iconLight: {
    borderColor: colors.light.border200,
  },
  iconDark: {
    borderColor: colors.dark.border200,
  },
  icons: {
    display: "flex",
    flexDirection: "row",
    marginRight: avatarSize,
  },
  firstText: {
    fontWeight: "bold",
    fontSize: 18,
  },
  firstTextLight: {
    color: colors.light.primaryText,
  },
  firstTextDark: {
    color: colors.dark.primaryText,
  },
  wavingHand: {
    height: 15,
    width: 15,
  },
});
