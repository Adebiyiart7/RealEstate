import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";

import AppButton from "../AppButton";
import AppText from "../AppText";
import colors from "../../config/colors";
import routes from "../../config/routes";
import LoginBottomSheet from "../LoginBottomSheet";

const Footer = ({ navigation, item }) => {
  const [bottomSheetVisible, setBottomSheetVisible] = useState(false);

  return (
    <View style={styles.footer}>
      <LoginBottomSheet
        bottomSheetVisible={bottomSheetVisible}
        setBottomSheetVisible={setBottomSheetVisible}
      />
      <View style={styles.left}>
        <AppText style={styles.priceText}>Price</AppText>
        <AppText style={styles.price}>
          ${parseInt(item.cost).toLocaleString()}
          <AppText style={styles.duration}> / {item.duration}</AppText>
        </AppText>
      </View>
      <AppButton
        small
        style={styles.button}
        onPress={() => {
          navigation.navigate(routes.BOOKING, {
            _id: item._id,
            user: {}
          });
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
    flex: 1
  },
  duration: {
    fontWeight: "400",
    fontSize: 13,
    color: colors.mediumText
  },
  footer: {
    position: "absolute",
    borderWidth: 1,
    display: "flex",
    flexDirection: "row",
    borderTopWidth: 1,
    borderColor: colors.border200,
    // borderRadius: 25,
    bottom: 60,
    padding: 16,
    paddingBottom: 30,
    backgroundColor: colors.white
  },
  price: {
    color: colors.primaryColor,
    fontSize: 25,
    fontWeight: "bold",
    marginRight: 16
  },
  priceText: {
    fontSize: 13,
    color: colors.lightText
  }
});
