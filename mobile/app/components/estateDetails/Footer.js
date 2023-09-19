import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";

import AppButton from "../AppButton";
import AppText from "../AppText";
import colors from "../../config/colors";
import routes from "../../config/routes";
import { useSelector } from "react-redux";
import LoginBottomSheet from "../LoginBottomSheet";
import { LIGHT, useTheme } from "../../contexts/ThemeContext";

const Footer = ({ navigation, item }) => {
  const { state } = useTheme();
  const isLight = state.theme === LIGHT;
  const [bottomSheetVisible, setBottomSheetVisible] = useState(false);
  const { user } = useSelector((state) => state.auth);
  const durationStyles = isLight ? styles.durationLight : styles.durationDark;
  const footerStyles = isLight ? styles.footerLight : styles.footerDark;

  return (
    <View style={[styles.footer, footerStyles]}>
      <LoginBottomSheet
        bottomSheetVisible={bottomSheetVisible}
        setBottomSheetVisible={setBottomSheetVisible}
      />
      <View style={styles.left}>
        <AppText style={styles.priceText}>Price</AppText>
        <AppText style={styles.price}>
          &#8358;{parseInt(item.cost).toLocaleString()}
          <AppText style={[styles.duration, durationStyles]}>
            {" "}
            / {item.duration}
          </AppText>
        </AppText>
      </View>
      <AppButton
        small
        rounded
        style={styles.button}
        onPress={() => {
          user
            ? navigation.navigate(routes.BOOKING, {
                _id: item._id,
                user: user,
              })
            : setBottomSheetVisible(true);
        }}
      >
        Booking Now
      </AppButton>
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  button: {
    flex: 1,
  },
  duration: {
    fontWeight: "400",
    fontSize: 13,
  },
  durationLight: {
    color: colors.light.mediumText,
  },
  durationDark: {
    color: colors.dark.mediumText,
  },
  footer: {
    position: "absolute",
    borderWidth: 0,
    display: "flex",
    flexDirection: "row",
    borderTopWidth: 1,
    bottom: 47,
    padding: 16,
    paddingBottom: 18,
  },
  footerLight: {
    backgroundColor: colors.light.white,
    borderColor: colors.light.border200,
  },
  footerDark: {
    backgroundColor: colors.dark.white,
    borderColor: colors.dark.border200,
  },
  price: {
    color: colors.primaryColor,
    fontSize: 25,
    fontWeight: "bold",
    marginRight: 16,
  },
  priceText: {
    fontSize: 13,
    color: colors.lightText,
  },
});
