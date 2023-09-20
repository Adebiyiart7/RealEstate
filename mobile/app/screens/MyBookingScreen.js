import React, { useState } from "react";
import { useWindowDimensions } from "react-native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { FlatList, ImageBackground, StyleSheet, View } from "react-native";

// LOCAL IMPORTS
import Screen from "../components/Screen";
import GoBackArrowHeader from "../components/GoBackArrowHeader";
import colors from "../config/colors";
import { estates } from "../db";
import AppText from "../components/AppText";
import utils from "../utils";
import ItemSeparatorComponent from "../components/ItemSeparatorComponent";
import AppButton from "../components/AppButton";
import routes from "../config/routes";
import { useTheme } from "../contexts/ThemeContext";

const MyBookingScreen = ({ navigation }) => {
  const { state } = useTheme();
  const [startDate] = useState(new Date(1611106322840));
  const [endDate] = useState(new Date(1671706322840));
  const [showActive, setShowActive] = useState(true);
  const { height } = useWindowDimensions();

  const activeTabStyle = {
    borderBottomColor: colors[state.theme].primaryColor,
    borderBottomWidth: 3,
  };

  const tabTextColor = { color: colors[state.theme].lightText };
  const activeTabTextStyle = { color: colors[state.theme].primaryColor };
  const tabBorderColor = { borderBottomColor: colors[state.theme].border200 };

  return (
    <Screen scrollable={false}>
      <GoBackArrowHeader
        navigation={navigation}
        title={"My Booking"}
        RightIcon={
          <MaterialCommunityIcons
            name="dots-horizontal-circle-outline"
            color={colors[state.theme].primaryText}
            size={24}
          />
        }
      />

      <View style={styles.tabs}>
        <AppButton
          onPress={() => setShowActive(true)}
          style={[styles.tab, tabBorderColor, showActive ? activeTabStyle : {}]}
          textStyle={[
            styles.tabText,
            tabTextColor,
            showActive ? activeTabTextStyle : {},
          ]}
          secondary
        >
          Active
        </AppButton>
        <AppButton
          onPress={() => setShowActive(false)}
          style={[
            styles.tab,
            tabBorderColor,
            !showActive ? activeTabStyle : {},
          ]}
          textStyle={[
            styles.tabText,
            tabTextColor,
            !showActive ? activeTabTextStyle : {},
          ]}
          secondary
        >
          Completed
        </AppButton>
      </View>

      <FlatList
        style={{ height: height - 233 }}
        showsVerticalScrollIndicator={false}
        data={showActive ? estates.slice(0, 1) : estates.slice(3, 6)}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <View>
            <View style={styles.card}>
              <ImageBackground
                source={{ uri: item.image }}
                style={styles.image}
              >
                <AppText
                  style={[
                    styles.rating,
                    {
                      color: colors[state.theme].primaryColor,
                      backgroundColor: colors[state.theme].white,
                    },
                  ]}
                >
                  <MaterialCommunityIcons
                    name="star"
                    size={12}
                    color={colors[state.theme].primaryOrange}
                  />
                  {item.rating}
                </AppText>
              </ImageBackground>
              <View style={styles.details}>
                <View style={styles.texts}>
                  <View>
                    <AppText
                      numberOfLines={2}
                      style={[
                        styles.firstText,
                        {
                          marginTop: 0,
                          color: colors[state.theme].primaryText,
                        },
                      ]}
                    >
                      {item.name}
                    </AppText>
                    <AppText
                      numberOfLines={2}
                      style={[
                        styles.secondText,
                        { color: colors[state.theme].mediumText },
                      ]}
                    >
                      Feb 02 - 07, 2023 (6 days)
                    </AppText>
                  </View>
                  <AppText numberOfLines={1} style={styles.footer}>
                    <AppText
                      style={[
                        styles.f1,
                        {
                          marginTop: 10,
                          color: colors[state.theme].primaryColor,
                        },
                      ]}
                    >
                      &#8358;{utils.separateToThounsand(item.cost)}
                    </AppText>
                    <AppText
                      style={[
                        styles.f2,
                        { color: colors[state.theme].mediumText },
                      ]}
                    >
                      &nbsp;/&nbsp;{item.duration}
                    </AppText>
                  </AppText>
                </View>
              </View>
            </View>
            <ItemSeparatorComponent
              style={{
                marginBottom: 10,
                borderBottomColor: colors[state.theme].border200,
              }}
            />
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
            style={{
              marginBottom: 10,
              borderBottomColor: colors[state.theme].border200,
            }}
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
    fontWeight: "bold",
    fontSize: 22,
  },
  f2: {
    width: "50%",
  },
  firstText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  footer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-end",
    marginTop: 5,
  },
  secondText: {
    marginTop: 4,
    fontWeight: "500",
  },
  rating: {
    position: "absolute",
    top: 10,
    right: 10,
    borderRadius: 9,
    paddingVertical: 2,
    paddingHorizontal: 5,
    fontSize: 11,
    fontWeight: "bold",
  },
  tab: {
    flex: 1,
    backgroundColor: "transparent",
    paddingVertical: 5,
    borderRadius: 0,
    borderBottomWidth: 1,
  },
  tabs: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 16,
  },
  tabText: {
    fontSize: 18,
  },
  texts: { display: "flex", flex: 1, justifyContent: "space-between" },
});
