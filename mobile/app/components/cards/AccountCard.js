import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { useDimensions } from "@react-native-community/hooks";

// LOCAL IMPORTS
import AppText from "../AppText";
import colors from "../../config/colors";

const avatarSize = 50;
const AccountCard = ({
  Icon1,
  Icon2,
  avatar,
  first_text,
  second_text,
  reverse,
  style,
  emptyRightComponent,
  showIconBorder = true
}) => {
  const { width: screenWidth } = useDimensions().screen;

  return (
    <View style={[styles.accountCard, style]}>
      <Image source={avatar} style={styles.avatar} />
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
          justifyContent: "space-between"
        }}
      >
        <View
          style={[
            styles.center,
            {
              width: screenWidth - (Icon1 && Icon2 ? 173 : 173 - 40),
              flexDirection: reverse ? "column-reverse" : "column"
            }
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
          {emptyRightComponent ? (
            <View>{Icon1}</View>
          ) : (
            <>
              {Icon1 && (
                <TouchableOpacity
                  style={[styles.icon, { borderWidth: showIconBorder ? 1 : 0 }]}
                >
                  {Icon1}
                </TouchableOpacity>
              )}
              {Icon2 && (
                <TouchableOpacity
                  style={[styles.icon, { borderWidth: showIconBorder ? 1 : 0 }]}
                >
                  {Icon2}
                </TouchableOpacity>
              )}
            </>
          )}
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
  second_text: {
    color: colors.mediumText
  },
  icon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: 5,
    borderColor: colors.border100,
    borderRadius: 30,
    height: 43,
    width: 43
  },
  icons: {
    display: "flex",
    flexDirection: "row",
    marginRight: avatarSize
  },
  first_text: {
    color: colors.primaryText,
    fontWeight: "bold",
    fontSize: 18
  },
  wavingHand: {
    height: 15,
    width: 15
  }
});
