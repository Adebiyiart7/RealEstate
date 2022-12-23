import { StyleSheet, Text, View } from "react-native";
import React from "react";
import AppButton from "../AppButton";
import AppText from "../AppText";
import colors from "../../config/colors";
import routes from "../../config/routes";

const Footer = ({ navigation, item }) => {
  return (
    <View style={styles.footer}>
      <View style={styles.left}>
        <AppText style={styles.priceText}>Price</AppText>
        <AppText style={styles.price}>
          &#8358;{parseInt(item.cost).toLocaleString()}
          <AppText style={styles.duration}> / {item.duration}</AppText>
        </AppText>
      </View>
      <AppButton
        style={styles.button}
        onPress={() =>
          navigation.navigate(routes.BOOKING, {
            _id: item._id
          })
        }
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
    display: "flex",
    flexDirection: "row",
    borderTopWidth: 1,
    borderColor: colors.border200,
    // borderRadius: 25,
    padding: 16,
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