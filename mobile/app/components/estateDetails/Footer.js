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
        <AppText
          style={[styles.priceText, { color: colors[state.theme].lightText }]}
        >
          Price
        </AppText>
        <AppText
          style={[styles.price, { color: colors[state.theme].primaryColor }]}
        >
          &#8358;{parseInt(item.cost).toLocaleString()}
          <AppText style={[styles.duration, durationStyles]}>
            {" "}
            / {item.duration}
          </AppText>
        </AppText>
      </View>
      <AppButton
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
    borderWidth: 1,
    bottom: 47,
    padding: 16,
    paddingTop: 20,
    paddingBottom: 18,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    marginLeft: -1,
    marginRight: -1,
  },
  footerLight: {
    backgroundColor: colors.light.white,
    borderColor: colors.light.border100,
  },
  footerDark: {
    backgroundColor: colors.dark.white,
    borderColor: colors.dark.border100,
  },
  price: {
    fontSize: 25,
    fontWeight: "bold",
    marginRight: 16,
  },
  priceText: {
    fontSize: 13,
  },
});
