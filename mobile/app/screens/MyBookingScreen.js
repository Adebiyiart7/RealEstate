import {
  FlatList,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useState } from "react";
import Screen from "../components/Screen";
import GoBackArrowHeader from "../components/GoBackArrowHeader";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";
import { estates } from "../db";
import AppText from "../components/AppText";
import utils from "../utils";
import ItemSeparatorComponent from "../components/ItemSeparatorComponent";
import AppButton from "../components/AppButton";
import routes from "../config/routes";

const MyBookingScreen = ({ navigation }) => {
  const [startDate] = useState(new Date(1611106322840));
  const [endDate] = useState(new Date(1671706322840));

  return (
    <Screen scrollable={false}>
      <GoBackArrowHeader
        navigation={navigation}
        title={"My Booking"}
        RightIcon={
          <MaterialCommunityIcons
            name="dots-horizontal-circle-outline"
            color={colors.primaryText}
            size={24}
          />
        }
      />

      <FlatList
        data={estates.slice(0, 2)}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <View>
            <View style={styles.card}>
              <ImageBackground
                source={{ uri: item.image }}
                style={styles.image}
              >
                <AppText style={styles.rating}>
                  <MaterialCommunityIcons
                    name="star"
                    size={12}
                    color={colors.primaryOrange}
                  />
                  {item.rating}
                </AppText>
              </ImageBackground>
              <View style={styles.details}>
                <View style={styles.texts}>
                  <View>
                    <AppText
                      numberOfLines={2}
                      style={[styles.firstText, { marginTop: 0 }]}
                    >
                      {item.name}
                    </AppText>
                    <AppText numberOfLines={2} style={styles.secondText}>
                      Feb 02 - 07, 2023 (6 days)
                    </AppText>
                  </View>
                  <AppText numberOfLines={1} style={styles.footer}>
                    <AppText style={[styles.f1, { marginTop: 10 }]}>
                      &#8358;{utils.separateToThounsand(item.cost)}
                    </AppText>
                    <AppText style={styles.f2}>
                      &nbsp;/&nbsp;{item.duration}
                    </AppText>
                  </AppText>
                </View>
              </View>
            </View>
            <View style={styles.buttons}>
              <AppButton
                style={{ flex: 1, marginRight: 8 }}
                rounded
                small
                onPress={() =>
                  navigation.navigate(routes.ESTATE_DETAILS, { _id: item._id })
                }
              >
                Details
              </AppButton>
              <AppButton
                style={{ flex: 1, marginLeft: 8 }}
                rounded
                small
                secondary
                onPress={() =>
                  navigation.navigate(routes.E_RECEIPT, {
                    _id: item._id,
                    userInfo: {
                      fullname: "Adeeyo Joseph Adebiyi",
                      phoneNumber: "09029242729",
                    },
                    checksDetails: {
                      startDate: startDate,
                      endDate: endDate,
                    },
                  })
                }
              >
                E-Receipt
              </AppButton>
            </View>
          </View>
        )}
        ItemSeparatorComponent={
          <ItemSeparatorComponent
            style={{ marginBottom: 10, borderBottomColor: colors.border200 }}
          />
        }
      />
    </Screen>
  );
};

export default MyBookingScreen;

const styles = StyleSheet.create({
  buttons: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 20,
  },
  card: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    marginVertical: 4,
    marginBottom: 16,
    borderRadius: 20,
  },

  details: {
    marginVertical: 5,
    marginHorizontal: 5,
    maxWidth: 200,
  },
  image: {
    borderRadius: 20,
    overflow: "hidden",
    height: 120,
    width: 120,
    maxHeight: 200,
    maxWidth: 200,
    marginRight: 10,
  },
  f1: {
    color: colors.primaryColor,
    fontWeight: "bold",
    fontSize: 22,
  },
  f2: {
    color: colors.mediumText,
    width: "50%",
  },
  firstText: {
    color: colors.primaryText,
    fontSize: 20,
    fontWeight: "bold",
  },
  footer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-end",
    marginTop: 5,
  },
  secondText: { marginTop: 4, fontWeight: "500", color: colors.mediumText },
  rating: {
    position: "absolute",
    top: 10,
    right: 10,
    backgroundColor: colors.white,
    borderRadius: 9,
    paddingVertical: 2,
    paddingHorizontal: 5,
    fontSize: 11,
    fontWeight: "bold",
    color: colors.primaryColor,
  },
  texts: { display: "flex", flex: 1, justifyContent: "space-between" },
});
