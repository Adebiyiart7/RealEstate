import {
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import Screen from "../components/Screen";
import GoBackArrowHeader from "../components/GoBackArrowHeader";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";
import AppText from "../components/AppText";
import AppButton from "../components/AppButton";
import routes from "../config/routes";

const PaymentsScreen = ({ navigation }) => {
  return (
    <Screen scrollable={false}>
      <GoBackArrowHeader
        navigation={navigation}
        title={"Payments"}
        RightIcon={
          <MaterialCommunityIcons
            name="qrcode-scan"
            color={colors.primaryText}
            size={24}
          />
        }
      />
      <ScrollView>
        <TouchableOpacity style={styles.card}>
          <View style={styles.left}>
            <Image
              style={styles.image}
              source={require("../assets/images/apple-icon.png")}
            />
            <AppText style={styles.text}>Apple Pay</AppText>
          </View>
          <AppText style={styles.connected}>Connected</AppText>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card}>
          <View style={styles.left}>
            <Image
              style={styles.image}
              source={require("../assets/images/google-icon.png")}
            />
            <AppText style={styles.text}>Google Pay</AppText>
          </View>
          <AppText style={styles.connected}>Connected</AppText>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card}>
          <View style={styles.left}>
            <Image
              style={styles.image}
              source={require("../assets/images/master-card-logo.png")}
            />
            <AppText style={styles.text}>**** **** **** 4194</AppText>
          </View>
          <AppText style={styles.connected}>Connected</AppText>
        </TouchableOpacity>
        <AppButton
          rounded
          onPress={() => navigation.navigate(routes.ADD_NEW_CARD)}
        >
          Add New Card
        </AppButton>
      </ScrollView>
    </Screen>
  );
};

export default PaymentsScreen;

const styles = StyleSheet.create({
  card: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: colors.white,
    borderRadius: 16,
    padding: 16,
    paddingVertical: 20,
    marginBottom: 20,
  },
  connected: {
    color: colors.primaryColor,
    fontWeight: "700",
    fontSize: 15,
  },
  image: {
    height: 30,
    width: 30,
  },
  left: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    fontWeight: "bold",
    fontSize: 16,
    marginLeft: 14,
  },
});
